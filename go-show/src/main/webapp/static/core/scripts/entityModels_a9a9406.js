GPC.url.scanUrl=GLOBAL.S.URL+GLOBAL.P.MODULES+"/scan";var Model={scan:function(){var e=GPW.tree.mainTree,t=e.getSelectedItemId();$.ajax({type:"GET",url:GPC.url.scanUrl,data:"id="+t,success:function(){dhtmlx.alert("扫描成功！"),GPW.grid.refreshTypeGrid(),GPW.grid.refreshMainGrid()}})}};$(function(){GPW.toolbar.treeToolbar.addListOption("edit","new_s1",5,"separator"),GPW.toolbar.treeToolbar.addListOption("edit","scan",6,"button","重新扫描","paste.gif"),GPW.toolbar.treeToolbar.attachEvent("onClick",function(e){switch(e){case"scan":Model.scan()}})});