<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="layoutObj"></div>

<script type="text/javascript">


GLOBAL.S.URL = "${S_URL}";
GLOBAL.S.URL_R = "${S_URL_R}";
GLOBAL.P.MODULES="${P_TPL_MODULES}";
GLOBAL.P.CLASSNAME="${P_CLASS_NAME}";

$(window).resize(function() { 
	GPW.layout.mainLayout.setSizes();
});

var GPC = {
	url:{
		queryDetailUrl:GLOBAL.S.URL+GLOBAL.P.MODULES+"/a/queryDetailPage/"+GLOBAL.P.CLASSNAME+"?_key=${S_PARAM._key}&_value=${S_PARAM._value}"
	},
	constant:{between:"between"}
}

var GPW = {
	layout : {},
	tree : {}
};

GPW.layout = {
	mainLayout:{},
	queryForm:{},
	treeLayout:{},
	init : function() {
		this.mainLayout = new dhtmlXLayoutObject("layoutObj", "2U");
		this.treeLayout=this.mainLayout.cells("a");
		this.treeLayout.setWidth(180);
		this.treeLayout.hideHeader();
		
		this.queryForm=this.mainLayout.cells("b");
		this.queryForm.hideHeader();
		

	}
}


GPW.tree = {
	mainTree:{},
	init:function(){
		this.mainTree=GPW.layout.treeLayout.attachTree();
		this.mainTree.setImagePath(GLOBAL.S.URL_R+"/js/dhtmlxSuite/imgs/dhxtree_skyblue/");
		this.mainTree.enableTreeImages("false");
		this.mainTree.loadJSONObject(${P_DETAIL_QUERY_TREE});
		this.mainTree.openAllItems(0);
		this.onClick();
		
	},
	onClick:function(){
		this.mainTree.attachEvent("onClick",function(id){
		    if(!this.hasChildren(id)){
		    	GPW.form.addForm(id);
		    }
		    return true;
		});
	}
}

function delectTpl(name, value) {
    return "<a href='#' onclick=\"GPW.form.delectForm('"+name+"','"+value+"'); return false;\" ><img src='${S_URL_R}/images/toolbar/close.gif' alt='删除' style='padding-top: 6px;' width='10' height='10' border='0'></a>";
}
GPW.form = {
	mainForm:{},
	allQueryForm:${P_DETAIL_QUERY_ALL},
	delectForm:function(name, value){
		this.mainForm.removeItem(value+"Block");
	},
	addForm:function(id){
		var blockId=id+"Block";
		if(!this.mainForm.isItem(blockId)){
			_.each(this.allQueryForm, function (v, k, value) { 
				if(v.name==blockId){
					GPW.form.mainForm.addItem(null,v,0);
				}
			});
		}
	},
	getMainFormData:function(){
		return ${P_DETAIL_QUERY_OFTEN};
	},
	init:function(){
		var formData = this.getMainFormData();	
		this.mainForm = GPW.layout.queryForm.attachForm();
		var form = this.mainForm ;
		form.loadStruct(formData, "json");	
		form.attachEvent("onButtonClick", function(id){
			if (id == "query") {
				var arrayObj = new Array();
				
				var i=0;
				form.forEachItem(function(name){
					var type = form.getItemType(name);
					if("input"==type||"combo"==type){
						var index = name.lastIndexOf("_Operator");
						if(index>-1){
						    var itemName=name.substring(0,index);
							var operator = form.getItemValue(name);
							if(!_.isEmpty(value)&&!!operator){
								var value = form.getItemValue(itemName);
								arrayObj[i]=GLOBAL.getQueryObjct(itemName,operator,value);
								i++;
							}else if(!!operator&&operator=="between"){
								var valueBegin = form.getItemValue(itemName+"_Begin");
								var valueEnd = form.getItemValue(itemName+"_End");
								if(!!valueBegin&&!!valueEnd){
									arrayObj[i]=GLOBAL.getBetweenQueryObjct(itemName,operator,valueBegin,valueEnd);
									i++;
								}
							}
						}
					}
				});
				//var strJosn = encodeURI(JSON.stringify(arrayObj));  
				var strJosn = JSON.stringify(arrayObj); 
				var grid=parent.GPW.cache.grid;
				grid.clearAll();
				grid.load(GPC.url.queryDetailUrl+"&_json="+strJosn,"js");
				parent.GPW.window.handle.unload();
		    }
		});
		
		form.attachEvent("onChange", function(name, value){
			var index = name.lastIndexOf("_Operator");
			var form = GPW.form.mainForm;
		    if(index>-1){
		    	var itemName=name.substring(0,index);
		    	if(value=="between"){
		    		form.showItem(itemName+"_Begin");
		    		form.showItem(itemName+"_End");
		    		form.hideItem(itemName);
		    	}else{
		    		form.hideItem(itemName+"_Begin");
		    		form.hideItem(itemName+"_End");
		    		form.showItem(itemName);
		    	}
		    }
		});
		
		form.attachEvent("onValidateError", function (name, value, result){
			parent.dhtmlx.message({ 
		    	type:"error", 
		    	text:"校验错误："+form.getItemLabel(name)+"字段值不能为["+value+"]！"});
		});
	}
}//GPW.form 
	
$(function() {
	GPW.layout.init();
	GPW.tree.init();
	GPW.form.init();
});
</script>