$(window).resize(function(){GPW.layout.mainLayout.setSizes()});var GPC={url:{treeQueryUrl:GLOBAL.S.URL+GLOBAL.P.MODULES+"/a/queryIdToTree/"+GLOBAL.P.TREECLASS,dragOrderUrl:GLOBAL.S.URL+GLOBAL.P.MODULES+"/a/dragTree/"+GLOBAL.P.TREECLASS,treeSave:GLOBAL.S.URL+GLOBAL.P.MODULES+"/a/treeSave/"+GLOBAL.P.TREECLASS,treeGetUrl:GLOBAL.S.URL+GLOBAL.P.MODULES+"/a/get/"+GLOBAL.P.TREECLASS,treeDelectUrl:GLOBAL.S.URL+GLOBAL.P.MODULES+"/a/delect/"+GLOBAL.P.TREECLASS},constant:{add:"add",edit:"edit",delect:"delect",query:"query",select:"select",update:"update",detailQuery:"detailQuery",between:"between"}},GPW={layout:{},toolbar:{},tree:{},grid:{},window:{},form:{},paging:{},cache:{}};GPW.cache={grid:{}},GPW.layout={mainLayout:{},mainGridLayout:{},treeLayout:{},init:function(){this.mainLayout=new dhtmlXLayoutObject("layoutObj","2U"),this.treeLayout=this.mainLayout.cells("a"),this.treeLayout.setWidth(300),this.treeLayout.hideHeader(),this.mainGridLayout=this.mainLayout.cells("b"),this.mainGridLayout.hideHeader()}},GPW.tree={mainTree:{},init:function(){this.mainTree=GPW.layout.treeLayout.attachTree(),this.mainTree.setImagePath(GLOBAL.IconsPath+"dhxtree_skyblue/"),this.mainTree.enableTreeImages("false"),this.mainTree.setXMLAutoLoading(GPC.url.treeQueryUrl),this.mainTree.setDataMode("json"),this.mainTree.loadJSON(GPC.url.treeQueryUrl),this.dragOrder(),this.onClick()},onClick:function(){this.mainTree.attachEvent("onClick",function(e){var t=GPC.url.treeGetUrl+"?id="+e;return GPW.form.mainForm.loadStruct(t),!0})},delectTree:function(){var e=GPW.tree.mainTree,t=e.getSelectedItemId();t&&dhtmlx.confirm({title:"删除树节点",ok:"是",cancel:"否",text:"您确认删除树节点: "+e.getItemText(t),callback:function(r){r&&$.ajax({type:"GET",url:GPC.url.treeDelectUrl,data:"id="+t,success:function(){GPW.form.mainForm.clear(),e.refreshItem()}})}})},dragOrder:function(){this.mainTree.enableDragAndDrop(!0),this.mainTree.setDragBehavior("complex"),this.mainTree.attachEvent("onDrag",function(e,t,r){var a="sid="+e+"&tid="+t;r&&(a+="&id="+r),$.ajax({type:"GET",url:GPC.url.dragOrderUrl,data:a,success:function(){var a=GPW.tree.mainTree;if(0==t)a.refreshItem();else{var i=a.getParentId(e),n=a.getParentId(t);r?i==t?a.refreshItem(t):a.refreshItem():i==n?0==i?a.refreshItem():a.refreshItem(i):i!=t?a.refreshItem():a.refreshItem(i)}}})})}},GPW.toolbar={treeToolbar:{},initTreeToolbar:function(){this.treeToolbar=GPW.layout.treeLayout.attachToolbar(),this.treeToolbar.setIconsPath(GLOBAL.IconsPath),GLOBAL.S.SEC_C_V&&this.treeToolbar.addButton(GPC.constant.add,0,"新增","new.gif","new_dis.gif"),GLOBAL.S.SEC_D_V&&this.treeToolbar.addButton(GPC.constant.delect,1,"删除","delect.png","delect.png"),this.treeToolbar.addButton("refresh",3,"刷新","reload.gif","reload.gif"),this.treeToolbarClick()},addFunction:function(){GPW.tree.mainTree.clearSelection(),GPW.form.mainForm.clear()},treeToolbarClick:function(){this.treeToolbar.attachEvent("onClick",function(e){switch(e){case GPC.constant.add:GPW.toolbar.addFunction();break;case GPC.constant.delect:GPW.tree.delectTree();break;case"refresh":GPW.tree.mainTree.refreshItem()}})}},GPW.form={mainForm:{},getTreeFormData:function(){return GLOBAL.P.P_FORM},getForm:function(e,t){return e.attachForm(t)},init:function(){var e=this.getTreeFormData();this.mainForm=this.getForm(GPW.layout.mainGridLayout,e),this.mainForm.attachEvent("onInfo",function(e,t){GLOBAL.PopupFunction(t,this.getUserData(e,"info"))}),this.mainForm.attachEvent("onButtonClick",function(e){"save"==e&&(GLOBAL.S.SEC_D_V||GLOBAL.S.SEC_C_V?(SpinnerCtl.show(),GPW.form.mainForm.send(GPC.url.treeSave,function(e,t){SpinnerCtl.close(),t.length>0?GLOBAL.errorMessage(t):dhtmlx.alert("保存成功！"),GPW.tree.mainTree.refreshItem()})):dhtmlx.alert("没有操作权限，请联系管理员！"))})}},$(function(){GPW.layout.init(),GPW.tree.init(),GPW.toolbar.initTreeToolbar(),GPW.form.init()});