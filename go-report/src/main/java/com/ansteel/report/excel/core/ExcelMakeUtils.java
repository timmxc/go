package com.ansteel.report.excel.core;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.log4j.Logger;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Footer;
import org.apache.poi.ss.usermodel.Header;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.ansteel.core.context.ContextHolder;
import com.ansteel.core.exception.PageException;
import com.ansteel.core.utils.StringUtils;
import com.ansteel.report.poi.utils.Excel;
import com.ansteel.report.excel.domain.ExcelReportSQL;
import com.ansteel.common.beetl.service.BeetlService;

/**
 * 创 建 人：gugu
 * 创建日期：2015-05-08
 * 修 改 人：
 * 修改日 期：
 * 描   述：excel-与报表数据生成工具。
 */
public class ExcelMakeUtils {
	
	Logger logger=Logger.getLogger(ExcelMakeUtils.class);

	private static final String DEFAULT_SHEET_NAME = "Sheet1";
	
	
	private static BeetlService beetlService;
	
	public static BeetlService getBeetlService(){
		if(beetlService==null){
			beetlService=ContextHolder.getSpringBean("beetlServiceBean");
		}
		return beetlService;
	}

	/*public Excel getExcel(String tplPath,Map<ExcelReportSQL,List> mapExcel){
		Excel excel = this.getExcel(tplPath);
		//先执行固定列数据填充
		for(Entry<ExcelReportSQL,List> entry:mapExcel.entrySet()){	
			List list = entry.getValue();
			if(list.size()>0){
				ExcelReportSQL excelReportSQL=entry.getKey();
				String sheetName = this.getSheetName(excelReportSQL.getSheetName());
				Sheet sheet=excel.getSheet(sheetName);
				this.setFixedSQLData(sheet,excelReportSQL,list);
				this.setHeader(sheet,excelReportSQL,list);
				this.setFooter(sheet,excelReportSQL,list);
			}
		}
		for(Entry<ExcelReportSQL,List> entry:mapExcel.entrySet()){
			List list = entry.getValue();
			if(list.size()>0){
				ExcelReportSQL excelReportSQL=entry.getKey();
				String sheetName = this.getSheetName(excelReportSQL.getSheetName());
				Sheet sheet=excel.getSheet(sheetName);
				this.setSQLData(sheet,excelReportSQL,list);
			}else{
				logger.error(entry.getKey().getAlias()+",没有记录！");
			}
		}
		
		return excel;
		
	}*/

	/**
	 * 设置页脚
	 * @param sheet
	 * @param excelReportSQL
	 * @param list
	 */
	public static void setFooter(Sheet sheet, ExcelReportSQL excelReportSQL, List list) {
		String footerRecode = excelReportSQL.getFooterRecode();
		if(StringUtils.hasText(footerRecode)){
			Map dataMap = (Map) list.get(0);
			Map<String,Object> recodeValueMap=getRecodeMap(footerRecode,dataMap);
			
			Footer footer = sheet.getFooter();
			String left = footer.getLeft();
			if(StringUtils.hasText(left)){
				footer.setLeft(getBeetlService().outContent(left, recodeValueMap));
			}
			String center = footer.getCenter();
			if(StringUtils.hasText(center)){
				footer.setCenter(getBeetlService().outContent(center, recodeValueMap));
			}
			String right = footer.getRight();
			if(StringUtils.hasText(right)){
				footer.setRight(getBeetlService().outContent(right, recodeValueMap));
			}
		}		
	}

	private static Map<String, Object> getRecodeMap(String recode, Map dataMap) {
		Map<String,Object> map = new HashMap<String, Object>();
		String[] rArray = recode.split(";");
		for(String s:rArray){
			//s=s.toUpperCase();
			if(dataMap.containsKey(s)){
				map.put(s, dataMap.get(s));
			}else{
				throw new PageException(s+",没有这个数据映射！");
			}
		}
		return map;
	}

	/**
	 * 设置页眉
	 * @param sheet
	 * @param excelReportSQL
	 * @param list
	 */
	public static void setHeader(Sheet sheet, ExcelReportSQL excelReportSQL, List list) {
		String headerRecode = excelReportSQL.getHeaderRecode();
		if(StringUtils.hasText(headerRecode)){
			Map dataMap = (Map) list.get(0);
			Map<String,Object> recodeValueMap=getRecodeMap(headerRecode,dataMap);
			
			Header header = sheet.getHeader();
			String left = header.getLeft();
			if(StringUtils.hasText(left)){
				header.setLeft(getBeetlService().outContent(left, recodeValueMap));
			}
			String center = header.getCenter();
			if(StringUtils.hasText(center)){
				header.setCenter(getBeetlService().outContent(center, recodeValueMap));
			}
			String right = header.getRight();
			if(StringUtils.hasText(right)){
				header.setRight(getBeetlService().outContent(right, recodeValueMap));
			}
		}
	}

	/**
	 * 固定列数据填充
	 */
	public static void setFixedSQLData(Sheet sheet, ExcelReportSQL excelReportSQL,
			List list) {
		// 固定值字段对照excel单元格
		String fixedRecode = excelReportSQL.getFixedRecode();
		if(StringUtils.hasText(fixedRecode)){
			Map<String, String> fixedMapping = StringUtils
									.getOptionsSplit(fixedRecode);
			mappingCellValue(0,fixedMapping,(Map)list.get(0),sheet);
		}
		sheet.setForceFormulaRecalculation(true);
	
	}

	

	/**
	 * 设置一行数据
	 * @param i
	 * @param mapping
	 * @param dataMap
	 * @param sheet
	 */
	public static void mappingCellValue(int i,Map<String, String> mapping, Map dataMap,
			Sheet sheet) {
		for(Entry<String,String>entry:mapping.entrySet()){
			//单元格名称：如A2
			String cellName=entry.getValue();
			//字段名称
			String fieldName = entry.getKey();
			Assert.isTrue(Excel.validateCell(entry.getValue()), entry.getValue()+",excel映射填写错误，请检查！");
			Integer[] iArray = Excel.getCellFigure(cellName);
			int row = iArray[0] + i;
			Cell cell=null;
			try {
				cell=Excel.getCell(sheet, row, iArray[1]);
			} catch (Exception e) {
				throw new PageException("excel不能读取："+(iArray[0]+i)+"-"+iArray[1]+":"+e.toString());
			}
			//fieldName=fieldNameAnalyze(fieldName,cell,i);
			if(StringUtils.hasText(fieldName)){
				if(!dataMap.containsKey(fieldName)){
					System.out.println(1);
				}
				Assert.isTrue(dataMap.containsKey(fieldName), fieldName+"数据映射没有这个字段！");
				setCellValue(cell,dataMap.get(fieldName)+"");
			}
		}
	}

	/**
	 * 设置一行数据
	 * @param i
	 * @param mapping
	 * @param dataMap
	 * @param sheet
	 */
	public static void mappingCellValue(Map<String, String> mapping, Map dataMap,
			Sheet sheet) {
		for(Entry<String,String>entry:mapping.entrySet()){
			//单元格名称：如A2
			String cellName=entry.getValue();
			//字段名称
			String fieldName = entry.getKey();
			Assert.isTrue(Excel.validateCell(entry.getValue()), "excel映射填写错误，请检查！");
			Integer[] iArray = Excel.getCellFigure(cellName);
			int row = iArray[0] ;
			Cell cell=null;
			try {
				cell=Excel.getCell(sheet, row, iArray[1]);
			} catch (Exception e) {
				throw new PageException("excel不能读取："+(iArray[0])+"-"+iArray[1]+":"+e.toString());
			}
			fieldName=fieldNameAnalyze(fieldName,cell);
			if(StringUtils.hasText(fieldName)){
				Assert.isTrue(dataMap.containsKey(fieldName), "数据映射没有这个字段！");
				setCellValue(cell,dataMap.get(fieldName)+"");
			}
		}
	}
	/**
	 * 解析字段
	 * @param fieldName
	 * @param cell
	 * @param i
	 * @return
	 */
	private static String fieldNameAnalyze(String fieldName, Cell cell, int i) {
		//解析模板语法
		//暂时不做，先直接设置值
		return fieldName.toUpperCase();
	}
	
	/**
	 * 解析字段
	 * @param fieldName
	 * @param cell
	 * @param i
	 * @return
	 */
	private static String fieldNameAnalyze(String fieldName, Cell cell) {
		//解析模板语法
		//暂时不做，先直接设置值
		return fieldName.toUpperCase();
	}

	/**
	 * 设置单元格值
	 * @param cell
	 * @param object
	 * @param i 行号
	 */
	private static void setCellValue(Cell cell, String value) {
		Excel.setCellValue(cell,value);		
	}

	public static String getSheetName(String sheetName) {
		if(StringUtils.hasText(sheetName)){
			return sheetName;
		}
		return DEFAULT_SHEET_NAME;
	}

	public static Excel getExcel(String tplPath) {
		try {
			return new Excel(tplPath);
		} catch (InvalidFormatException e) {
			e.printStackTrace();
			throw new PageException(e.getMessage());
		} catch (IOException e) {
			e.printStackTrace();
			throw new PageException(e.getMessage());
		}
	}

	/**
	 * 合并单元格
	 * @param dataMap
	 * @param mergerMap
	 * @param sheet
	 */
	public static void mergerRegion(int currnRowNum,int lastRowNum, Map dataMap,
			Map<String, MergerRegion> mergerMap, Sheet sheet) {
		for(Entry<String, MergerRegion>entry:mergerMap.entrySet()){
			String key = entry.getKey();
			MergerRegion mergerRegion=entry.getValue();

			Integer[] iArray = Excel.getCellFigure(mergerRegion.getMapping());
			int curreniRow = iArray[0] + currnRowNum;
			

			String oldValue = mergerRegion.getValue();
			String newValue=(String)dataMap.get(key);

			if(oldValue==null){
				mergerRegion.setValue(newValue);
				mergerRegion.setFirstRow(curreniRow);
			}else{
				if(oldValue.equals(newValue)){
					mergerRegion.setLastRow(curreniRow);
					//最后一行合并
					if(currnRowNum==lastRowNum){
						if(mergerRegion.getFirstRow()!=mergerRegion.getLastRow()){
							sheet.addMergedRegion(new CellRangeAddress(
									mergerRegion.getFirstRow(), //first row (0-based)
									mergerRegion.getLastRow(), //last row  (0-based)
									iArray[1], //first column (0-based)
									iArray[1]  //last column  (0-based)
							    ));
						}
					}
					
				}else{
					if(mergerRegion.getFirstRow()!=mergerRegion.getLastRow()){
						sheet.addMergedRegion(new CellRangeAddress(
								mergerRegion.getFirstRow(), //first row (0-based)
								mergerRegion.getLastRow(), //last row  (0-based)
								iArray[1], //first column (0-based)
								iArray[1]  //last column  (0-based)
						    ));
					}

					mergerRegion.setValue(newValue);
					mergerRegion.setFirstRow(curreniRow);
				}
			}
		}
		
		
	}
}
