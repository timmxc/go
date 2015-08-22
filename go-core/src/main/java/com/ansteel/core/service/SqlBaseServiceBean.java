package com.ansteel.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ansteel.core.repository.SqlBaseRepository;
/**
 * 创 建 人：gugu
 * 创建日期：2015-05-25
 * 修 改 人：
 * 修改日 期：
 * 描   述：sql服务接口实现。  
 */
@Service
@Transactional(readOnly = true)
public class SqlBaseServiceBean implements SqlBaseService {
	
	@Autowired
	SqlBaseRepository sqlBaseRepository;

	@Override
	public List findSqlMap(String queryString, Map<String, Object> whereMap, Pageable pageable) {
		return sqlBaseRepository.findSqlMap(queryString,whereMap,pageable);
	}

	@Override
	public long sqlCount(String countQuery, Map<String, Object> whereMap) {
		return sqlBaseRepository.sqlCount(countQuery,whereMap);
	}

	@Override
	public List findSqlMap(String queryString, Map<String, Object> whereMap) {
		return sqlBaseRepository.findSqlMap(queryString,whereMap);
	}

	@Override
	public List findSql(String queryString, Map<String, Object> whereMap) {
		return sqlBaseRepository.findSql(queryString,whereMap);
	}

}
