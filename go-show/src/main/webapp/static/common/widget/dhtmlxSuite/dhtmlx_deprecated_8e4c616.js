function eXcell_dec(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid),this.getValue=function(){return parseFloat(this.cell.innerHTML.replace(/,/g,""))},this.setValue=function(t){var e="0,000.00";if("0"==t)return void this.setCValue(e.replace(/.*(0\.[0]+)/,"$1"),t);var i=e.substr(e.indexOf(".")+1).length;t=Math.round(t*Math.pow(10,i)).toString();for(var l="",o=0,s=!1,h=t.length-1;h>=0;h--)o++,l=t.charAt(h)+l,s||o!=i||(l="."+l,o=0,s=!0),s&&3==o&&0!=h&&"-"!=t.charAt(h-1)&&(l=","+l,o=0);this.setCValue(l,t)}}function eXcell_cor(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid,this.combo=this.grid.getCombo(this.cell._cellIndex),this.editable=!0),this.shiftNext=function(){var t=this.list.options[this.list.selectedIndex+1];return t&&(t.selected=!0),this.obj.value=this.list.value,!0},this.shiftPrev=function(){var t=this.list.options[this.list.selectedIndex-1];return t&&(t.selected=!0),this.obj.value=this.list.value,!0},this.edit=function(){this.val=this.getValue(),this.text=this.cell.innerHTML._dhx_trim();var t=this.grid.getPosition(this.cell);this.obj=document.createElement("TEXTAREA"),this.obj.className="dhx_combo_edit",this.obj.style.height=this.cell.offsetHeight-4+"px",this.obj.wrap="soft",this.obj.style.textAlign=this.cell.align,this.obj.onclick=function(t){(t||event).cancelBubble=!0},this.obj.value=this.text,this.list=document.createElement("SELECT"),this.list.editor_obj=this,this.list.className="dhx_combo_select",this.list.style.width=this.cell.offsetWidth+"px",this.list.style.left=t[0]+"px",this.list.style.top=t[1]+this.cell.offsetHeight+"px",this.list.onclick=function(t){var e=t||window.event,i=e.target||e.srcElement;"OPTION"==i.tagName&&(i=i.parentNode),-1!=i.value?(i.editor_obj._byClick=!0,i.editor_obj.editable=!1,i.editor_obj.grid.editStop()):(e.cancelBubble=!0,i.editor_obj.obj.value="",i.editor_obj.obj.focus())};var e=this.combo.getKeys(),i=0;this.list.options[0]=new Option(this.combo.get(e[0]),e[0]),this.list.options[0].selected=!0;for(var l=1;l<e.length;l++){var o=this.combo.get(e[l]);this.list.options[this.list.options.length]=new Option(o,e[l]),e[l]==this.val&&(i=this.list.options.length-1)}document.body.appendChild(this.list),this.list.size="6",this.cstate=1,this.editable?this.cell.innerHTML="":(this.obj.style.width="1px",this.obj.style.height="1px"),this.cell.appendChild(this.obj),this.list.options[i].selected=!0,(!_isFF||this.editable)&&(this.obj.focus(),this.obj.focus()),this.editable||(this.obj.style.visibility="hidden")},this.getValue=function(){return this.cell.combo_value==window.undefined?"":this.cell.combo_value},this.getText=function(){return this.cell.innerHTML},this.getState=function(){return{prev:this.cell.__prev,now:this.cell.__now}},this.detach=function(){if(this.val!=this.getValue()&&(this.cell.wasChanged=!0),null!=this.list.parentNode)if(this.obj.value._dhx_trim()!=this.text||this._byClick){var t=this.list.value;this._byClick||(this.combo.values[this.combo.keys._dhx_find(t)]=this.obj.value),this.setValue(t)}else this.setValue(this.val);return this.list.parentNode&&this.list.parentNode.removeChild(this.list),this.obj.parentNode&&this.obj.parentNode.removeChild(this.obj),this.val!=this.getValue()}}function eXcell_wbut(t){this.cell=t,this.grid=this.cell.parentNode.grid,this.edit=function(){var t=this.getValue().toString();this.obj=document.createElement("INPUT"),this.obj.readOnly=!0,this.obj.style.width="60px",this.obj.style.height=this.cell.offsetHeight-(this.grid.multiLine?5:4)+"px",this.obj.style.border="0px",this.obj.style.margin="0px",this.obj.style.padding="0px",this.obj.style.overflow="hidden",this.obj.style.fontSize=_isKHTML?"10px":"12px",this.obj.style.fontFamily="Arial",this.obj.wrap="soft",this.obj.style.textAlign=this.cell.align,this.obj.onclick=function(t){(t||event).cancelBubble=!0},this.cell.innerHTML="",this.cell.appendChild(this.obj),this.obj.onselectstart=function(t){return t||(t=event),t.cancelBubble=!0,!0},this.obj.style.textAlign=this.cell.align,this.obj.value=t,this.obj.focus(),this.obj.focus(),this.cell.appendChild(document.createTextNode(" "));var e=document.createElement("input");_isIE?(e.style.height=this.cell.offsetHeight-(this.grid.multiLine?5:4)+"px",e.style.lineHeight="5px"):(e.style.fontSize="8px",e.style.width="10px",e.style.marginTop="-5px"),e.type="button",e.name="Lookup",e.value="...";var i=(this.obj,this.cell.cellIndex,this.cell.parentNode.idd,this.grid,this);this.dhx_m_func=this.grid.getWButFunction(this.cell._cellIndex),e.onclick=function(){i.dhx_m_func(i,i.cell.parentNode.idd,i.cell._cellIndex,t)},this.cell.appendChild(e)},this.detach=function(){return this.setValue(this.obj.value),this.val!=this.getValue()}}function eXcell_passw(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid),this.edit=function(){this.cell.innerHTML="",this.cell.atag="INPUT",this.val=this.getValue(),this.obj=document.createElement(this.cell.atag),this.obj.style.height=this.cell.offsetHeight-(_isIE?6:4)+"px",this.obj.className="dhx_combo_edit",this.obj.type="password",this.obj.wrap="soft",this.obj.style.textAlign=this.cell.align,this.obj.onclick=function(t){(t||event).cancelBubble=!0},this.obj.onmousedown=function(t){(t||event).cancelBubble=!0},this.obj.value=this.cell._rval||"",this.cell.appendChild(this.obj),_isFF&&(this.obj.style.overflow="visible",this.grid.multiLine&&this.obj.offsetHeight>=18&&this.obj.offsetHeight<40&&(this.obj.style.height="36px",this.obj.style.overflow="scroll")),this.obj.onselectstart=function(t){return t||(t=event),t.cancelBubble=!0,!0},this.obj.focus(),this.obj.focus()},this.getValue=function(){return this.cell._rval},this.setValue=function(t){var e="*****";this.cell.innerHTML=e,this.cell._rval=t},this.detach=function(){return this.setValue(this.obj.value),this.val!=this.getValue()}}function eXcell_num(t){try{this.cell=t,this.grid=this.cell.parentNode.grid}catch(e){}this.edit=function(){this.val=this.getValue(),this.obj=document.createElement(_isKHTML?"INPUT":"TEXTAREA"),this.obj.className="dhx_combo_edit",this.obj.style.height=this.cell.offsetHeight-4+"px",this.obj.wrap="soft",this.obj.style.textAlign=this.cell.align,this.obj.onclick=function(t){(t||event).cancelBubble=!0},this.obj.value=this.val,this.cell.innerHTML="",this.cell.appendChild(this.obj),this.obj.onselectstart=function(t){return t||(t=event),t.cancelBubble=!0,!0},this.obj.focus(),this.obj.focus()},this.getValue=function(){return this.cell.firstChild&&"TEXTAREA"==this.cell.firstChild.tagName?this.cell.firstChild.value:this.grid._aplNFb(this.cell.innerHTML.toString()._dhx_trim(),this.cell._cellIndex)},this.setValue=function(t){var e=new RegExp("[a-z]|[A-Z]","i");t.match(e)&&(t="&nbsp;"),this.cell.innerHTML=t},this.detach=function(){var t=this.obj.value;return this.setValue(t),this.val!=this.getValue()}}function eXcell_mro(t){this.cell=t,this.grid=this.cell.parentNode.grid,this.edit=function(){}}function eXcell_liveedit(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid),this.edit=function(){this.cell.inputObj.focus(),this.cell.inputObj.focus()},this.detach=function(){this.setValue(this.cell.inputObj.value)},this.getValue=function(){return this.cell.inputObj?this.cell.inputObj.value:""},this.destructor=function(){},this.onFocus=function(){var t=this.grid.callEvent("onEditCell",[0,this.cell.parentNode.idd,this.cell._cellIndex]);t===!1&&this.cell.inputObj.blur()},this.onBlur=function(){this.grid.callEvent("onEditCell",[2,this.cell.parentNode.idd,this.cell._cellIndex]);this.detach()},this.onChange=function(){this.grid.callEvent("onCellChanged",[this.cell.parentNode.idd,this.cell._cellIndex,this.cell.inputObj.value]);this.detach()}}function eXcell_limit(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid),this.edit=function(){this.cell.atag=!this.grid.multiLine&&(_isKHTML||_isMacOS||_isFF)?"INPUT":"TEXTAREA",this.val=this.getValue(),this.obj=document.createElement(this.cell.atag),this.obj.style.height=this.cell.offsetHeight-(_isIE?6:4)+"px",this.obj.className="dhx_combo_edit",this.obj.wrap="soft",this.obj.style.textAlign=this.cell.align,this.obj.onclick=function(t){(t||event).cancelBubble=!0},this.obj.onmousedown=function(t){(t||event).cancelBubble=!0},this.obj.value=this.val,this.cell.innerHTML="",this.cell.appendChild(this.obj),_isFF&&(this.obj.style.overflow="visible",this.grid.multiLine&&this.obj.offsetHeight>=18&&this.obj.offsetHeight<40&&(this.obj.style.height="36px",this.obj.style.overflow="scroll")),this.obj.onkeypress=function(){return this.value.length>=15?!1:void 0},this.obj.onselectstart=function(t){return t||(t=event),t.cancelBubble=!0,!0},this.obj.focus(),this.obj.focus()},this.getValue=function(){return this.cell.firstChild&&this.cell.atag&&this.cell.firstChild.tagName==this.cell.atag?this.cell.firstChild.value:this.cell.innerHTML.toString()._dhx_trim()},this.setValue=function(t){this.cell.innerHTML=t.length>15?t.substring(0,14):t},this.detach=function(){return this.setValue(this.obj.value),this.val!=this.getValue()}}function eXcell_tree_property(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid),this.isDisabled=function(){return!0},this.getValue=function(){return this.cell.parentNode.valTag.innerHTML}}function eXcell_list(t){t&&(this.cell=t,this.grid=this.cell.parentNode.grid),this.edit=function(){this.cell.innerHTML="<select style='width:100%;' ></select>",this.obj=this.cell.firstChild,this.obj.onclick=function(t){(t||event).cancelBubble=!0},this.obj.onmousedown=function(t){(t||event).cancelBubble=!0},this.obj.onkeydown=function(t){var e=t||event;return 9==e.keyCode||13==e.keyCode?(globalActiveDHTMLGridObject.entBox.focus(),globalActiveDHTMLGridObject.doKey({keyCode:e.keyCode,shiftKey:e.shiftKey,srcElement:"0"}),!1):void(e.cancelBubble=!0)};var t=this;this.obj.onchange=function(){t.grid.editStop(),t=null};for(var e=this.getAttribute("values").split(","),i=0;i<e.length;i++)this.obj.options[i]=new Option(e[i],e[i]);this.obj.value=this.cell._val,this.obj.focus()},this.getValue=function(){return this.cell._val},this.detach=function(){var t=this.obj.value,e=this.obj.selectedIndex;return this.setValue(-1==e?"":this.obj.options[e].value),t!=this.getValue()}}function dhtmlXPropertyGrid(t){var e;return e=t.objBox?t:new dhtmlXGridObject(t),e.setHeader("Name,Value"),e.setColAlign("left,left"),window.dhtmlxHierarchy?(e.setColTypes("tree_property,ro"),e.isTreeGrid=function(){return!0},e.enableSmartXMLParsing(!1)):e.setColTypes("ro,ro"),e.setColSorting("na,na"),e.setInitWidths("*,*"),e.setNoHeader(!0),e.setSkin("dhx_skyblue"),e.entBox.className+=" gridbox_property",e.i18n.validation_error="Value is incorrect",e.attachEvent("onRowSelect",function(t){this.editor||(this.selectCell(this.getRowIndex(t),1),this.editCell())}),e.attachEvent("onBeforeSelect",function(){return this._block_selection?!1:!0}),e.attachEvent("onRowCreated",function(t,e){this._h2&&this._h2.get[t].childs.length||(e.childNodes[1].style.backgroundColor="white")}),e.attachEvent("onEditCell",function(t,e,i,l,o){if(1==t&&this.editor&&this.editor.obj&&this.editor.obj.select&&this.editor.obj.select(),2==t&&o!=l){var s=this.cells(e,1).getAttribute("validate"),h=!0;switch(s){case"int":h=parseFloat(l)==l}if(h)this._block_selection=!1,this.callEvent("onPropertyChanged",[this.cells(e,0).getValue(),l,o]);else{alert(this.i18n.validation_error),this._block_selection=!0;var n=this;window.setTimeout(function(){n.selectCell(e,i),n.editCell()},1)}}return!0}),e._key_events.k13_0_0=e._key_events.k9_0_0=e._key_events.k40_0_0,e.getProperties=function(){this.editStop(!0);var t={};return this.forEachRow(function(e){t[this.cells(e,0).getValue()]=this.cells(e,1).getValue()}),t},e.setProperties=function(t){this.editStop(),this.forEachRow(function(e){var i=this.cells(e,0).getValue();"undefined"!=typeof t[i]&&this.cells(e,1).setValue(t[i])}),this.callEvent("onPropertyChanged",[])},e}dhtmlXCalendarObject.prototype.draw=function(){this.show()},dhtmlXCalendarObject.prototype.close=function(){this.hide()},dhtmlXCalendarObject.prototype.setYearsRange=function(){},dhtmlXCombo.prototype.loadXML=function(t,e){this.load(t,e)},dhtmlXCombo.prototype.loadXMLString=function(t){this.load(t)},dhtmlXCombo.prototype.enableOptionAutoHeight=function(){},dhtmlXCombo.prototype.enableOptionAutoPositioning=function(){},dhtmlXCombo.prototype.enableOptionAutoWidth=function(){},dhtmlXCombo.prototype.destructor=function(){this.unload()},dhtmlXCombo.prototype.render=function(){},dhtmlXCombo.prototype.setOptionHeight=function(){},dhtmlXCombo.prototype.attachChildCombo=function(){},dhtmlXCombo.prototype.setAutoSubCombo=function(){},window.dhtmlXColorPickerInput=function(){return dhtmlXColorPicker.apply(window,arguments)},dhtmlXColorPicker.prototype.init=function(){},dhtmlXColorPicker.prototype.setOnSelectHandler=function(t){"function"==typeof t&&this.attachEvent("onSelect",t)},dhtmlXColorPicker.prototype.setOnCancelHandler=function(t){"function"==typeof t&&this.attachEvent("onCancel",t)},dhtmlXColorPicker.prototype._mergeLangModules=function(){if("object"==typeof dhtmlxColorPickerLangModules)for(var t in dhtmlxColorPickerLangModules)this.i18n[t]=dhtmlxColorPickerLangModules[t]},window.dhtmlxColorPickerLangModules=dhtmlXColorPicker.prototype.i18n,dhtmlXColorPicker.prototype.close=function(){this.hide()},dhtmlXColorPicker.prototype.setImagePath=function(){},dhtmlXMenuObject.prototype.loadXML=function(t,e){this.loadStruct(t,e)},dhtmlXMenuObject.prototype.loadXMLString=function(t,e){this.loadStruct(t,e)},dhtmlXMenuObject.prototype.setIconPath=function(t){this.setIconsPath(t)},dhtmlXMenuObject.prototype.setImagePath=function(){},dhtmlXToolbarObject.prototype.loadXML=function(t,e){this.loadStruct(t,e)},dhtmlXToolbarObject.prototype.loadXMLString=function(t,e){this.loadStruct(t,e)},dhtmlXToolbarObject.prototype.setIconPath=function(t){this.setIconsPath(t)},dhtmlXTreeObject.prototype.addPath=function(t,e,i,l){this.activatePaths(),i=i||{};for(var o=[],s=null,h=this._idpull[e],n=this._idpull[t];n!=s;)o.push({open:this._getOpenState(h),from:h.id,size:s?this._getIndex(s):0,to:s?s.id:null,style:"border-left:"+(i.width||1)+"px "+(i.mode||"solid")+" "+(i.color||"red")+"; border-bottom:"+(i.width||1)+"px "+(i.mode||"solid")+" "+(i.color||"red")+";"}),s=h,h=h.parentObject;for(;!l||this._pathspull[l];)l=(l||0)+1;this._pathspull[l]={path:o,id:l},this._paths.push(this._pathspull[l]),this._renderPath(this._pathspull[l])},dhtmlXTreeObject.prototype.activatePaths=function(t){var e=this;this.attachEvent("onOpenEnd",function(){for(var t=0;t<e._paths.length;t++)e._clearPath(e._paths[t]),e._renderPath(e._paths[t])}),this.attachEvent("onXLE",function(){for(var t=e.XMLLoader.doXPath("//pathend"),i=e.XMLLoader.doXPath("//pathstart"),l={},o=0;o<i.length;o++)l[i[o].getAttribute("id")]=i[o];for(var o=0;o<i.length;o++){var s=t[o].parentNode,h=l[t[o].getAttribute("id")];this.addPath(h.parentNode.getAttribute("id"),s.getAttribute("id"),{color:h.getAttribute("color"),mode:h.getAttribute("mode"),width:h.getAttribute("width")},h.getAttribute("id"))}}),t?this._halfHeight=t:this._idpull[0].childsCount&&(this._halfHeight=Math.floor(this._idpull[0].childNodes[0].span.parentNode.offsetHeight/2)),this._halfHeight||(this._halfHeight=9),this.activatePaths=function(){}},dhtmlXTreeObject.prototype._clearPath=function(t){for(var e=t.path.length-1;e>0;e--){var i=t.path[e];i._html&&i._html.parentNode.removeChild(i._html),i._html=null}},dhtmlXTreeObject.prototype._renderPath=function(t){for(var e=this._idpull[t.path[t.path.length-1].from].span.parentNode.parentNode,i=(_isIE?9:8)+this._halfHeight,l=_isIE?27:27;e.offsetParent!=this.allTree;)i+=e.offsetTop,l+=e.offsetLeft,e=e.offsetParent;for(var o=t.path.length-1;o>0;o--){var s=t.path[o],h=document.createElement("div");if(!this._idpull[s.to].tr.offsetHeight)return;var n=this._idpull[s.to].tr.offsetTop;h.style.cssText="position:absolute; z-index:1; width:"+(_isIE?10:8)+"px; height:"+(n-9)+"px; left:"+l+"px; top:"+i+"px;"+s.style,i+=n,l+=18,this.allTree.appendChild(h),s._html=h}},dhtmlXTreeObject.prototype.deletePath=function(t){var e=this._pathspull[t];if(e){this._clearPath(e),delete this._pathspull[t];for(var i=0;i<this._paths.length;i++)if(this._paths[i]==e)return this._paths.splice(i,1)}},dhtmlXTreeObject.prototype.deleteAllPaths=function(){for(var t=this._paths.length-1;t>=0;t--)this.deletePath(this._paths[t].id)},dhtmlXTreeObject.prototype._paths=[],dhtmlXTreeObject.prototype._pathspull={},dhtmlXTreeObject.prototype.enableSmartRendering=function(){this.enableSmartXMLParsing(!0),this._srnd=!0,this.itemHeight=18;var t=this;this.allTree.onscroll=function(){t._srndT||(t._srndT=window.setTimeout(function(){t._srndT=null,t._renderState()},300))},this.attachEvent("onXLE",function(){t._renderState()}),this._singleTimeSRND()},dhtmlXTreeObject.prototype._renderState=function(){this._idpull[this.rootId]._sready||this.prepareSR(this.rootId,!0);var t=this.allTree.scrollTop,e=(Math.floor(t/this.itemHeight),Math.ceil(this.allTree.offsetHeight/this.itemHeight));this._group_render=!0,this._getItemByPos(t,this.itemHeight,e,null,!1,this._renderItemSRND),this._group_render=!1},dhtmlXTreeObject.prototype._renderItemSRND=function(t,e){if(!t.span){t.span=-1;for(var i=t.parentObject.htmlNode.childNodes[0].childNodes,l=e*this.itemHeight,o=null,s=1;s<i.length;s++){o=i[s];var h=o.nodem?this.itemHeight:o.offsetHeight||parseInt(o.childNodes[1].firstChild.style.height);if(l-=h,0>l){if(-1==l){l++;continue}var n=o.childNodes[1].firstChild;if(n.style.height=parseInt(n.style.height)-(h-Math.abs(l)+this.itemHeight)+"px",Math.abs(l)!=h){var r=this._drawNewHolder(l+h,!0);o.parentNode.insertBefore(r,o)}o.tr={nextSibling:o};break}}if(n&&"0px"!=n.style.height&&!o.offsetHeight){var d=this._hAdI;this._hAdI=!0}this._parseItem(t._sxml,t.parentObject,null,o),n&&"0px"!=n.style.height&&!o.offsetHeight&&(this._hAdI=d),t.unParsed&&this._correctPlus(t),n&&"0px"==n.style.height&&o.parentNode.removeChild(o)}},dhtmlXTreeObject.prototype._buildSRND=function(t,e){t.parentObject&&this._globalIdStorageFind(t.parentObject.id),this._idpull[this.rootId]._sready||this.prepareSR(this.rootId,!0),this._renderItemSRND(t,this._getIndex(t)),t.unParsed&&!e&&this.reParse(t,0),t.prepareSR||this.prepareSR(t.id)},dhtmlXTreeObject.prototype._getIndex=function(t){for(var e=0;e<t.parentObject.childsCount;e++)if(t.parentObject.childNodes[e]==t)return e},dhtmlXTreeObject.prototype.prepareSR=function(t,e){if(t=this._idpull[t],!t._sready){var i=this._drawNewHolder(this.itemHeight*t.childsCount,e);t.htmlNode.childNodes[0].appendChild(i),t._sready=!0}},dhtmlXTreeObject.prototype._drawNewHolder=function(t,e){var i=document.createElement("TR"),l=document.createElement("TD"),o=document.createElement("TD"),s=document.createElement("DIV");return s.innerHTML="&nbsp;",l.appendChild(s),i.appendChild(o),i.appendChild(l),e||(i.style.display="none"),s.style.height=t+"px",i},dhtmlXTreeObject.prototype._getNextNodeSR=function(t,e){return!e&&t.childsCount?t.childNodes[0]:t==this.htmlNode?-1:t.tr&&t.tr.nextSibling&&t.tr.nextSibling.nodem?t.tr.nextSibling.nodem:this._getNextNode(t.parentObject,!0)},dhtmlXTreeObject.prototype._getItemByPos=function(t,e,i,l,o,s){l||(this._pos_c=t,l=this._idpull[this.rootId]);for(var h=0;h<l.childsCount;h++){if(this._pos_c-=e,this._pos_c<=0&&(o=!0),o&&(s.apply(this,[l.childNodes[h],h]),i--),0>i)return i;if(l.childNodes[h]._open&&(i=this._getItemByPos(null,e,i,l.childNodes[h],o,s),0>i))return i}return i},dhtmlXTreeObject.prototype._addItemSRND=function(t,e,i){var l=this._idpull[t],o=l.childsCount,s=l.childNodes;s[o]=new dhtmlXTreeItemObject(e,"",l,this,null,1),itemId=s[o].id,s[o]._sxml=i.clone(),l.childsCount++},dhtmlXTreeObject.prototype._singleTimeSRND=function(){this._redrawFrom=function(){};var t=dhtmlXTreeItemObject;this._singleTimeSRND=function(){},window.dhtmlXTreeItemObject=function(e,i,l,o,s,h){return o._srnd?(this.htmlNode="",this.acolor="",this.scolor="",this.tr=0,this.childsCount=0,this.tempDOMM=0,this.tempDOMU=0,this.dragSpan=0,this.dragMove=0,this.span=0,this.closeble=1,this.childNodes=new Array,this.userData=new cObject,this.checkstate=0,this.treeNod=o,this.label=i,this.parentObject=l,this.actionHandler=s,this.images=new Array(o.imageArray[0],o.imageArray[1],o.imageArray[2]),this.id=o._globalIdStorageAdd(e,this),e==o.rootId&&(this.htmlNode=this.treeNod.checkBoxOff?this.treeNod._createItem(1,this,h):this.treeNod._createItem(0,this,h),this.htmlNode.objBelong=this),this):t.call(this,e,i,l,o,s,h)},this.setCheckSR=this.setCheck,this.setCheck=function(t,e){return this._globalIdStorageFind(t),this.setCheckSR(t,e)},this._get_srnd_p=function(t){for(var e=[];t!=this.rootId;){for(var i=this.getParentId(t),l=0;l<this._idpull[i].childsCount;l++)if(this._idpull[i].childNodes[l].id==t){e.push([i,l]);break}t=i}return e.reverse(),e},this._get_srnd_p_last=function(t,e,i){e=e||[];for(var l=0;;){var o=this._idpull[t];o._sxml&&this.findStrInXML(o._sxml.d,"text",i)&&this._globalIdStorageFind(o.id);var l=o.childsCount;if(!l)break;e.push([t,l-1]),t=o.childNodes[l-1].id}return e},this._get_prev_srnd=function(t,e){var i;if(!t.length)return t.push.apply(t,this._get_srnd_p_last(this.rootId,null,e)),i=t[t.length-1],this._idpull[i[0]].childNodes[i[1]];if(i=t[t.length-1],i[1]){i[1]--;var l=this._idpull[i[0]].childNodes[i[1]];this._get_srnd_p_last(l.id,t,e);var i=t[t.length-1];return this._idpull[i[0]].childNodes[i[1]]}if(t.pop(),!t.length)return this._get_prev_srnd(t,e);var i=t[t.length-1];return this._idpull[i[0]].childNodes[i[1]]},this._get_next_srnd=function(t,e){if(!t.length)return t.push([this.rootId,0]),this._idpull[this.rootId].childNodes[0];var i=t[t.length-1],l=this._idpull[i[0]].childNodes[i[1]];if(l.childsCount&&!e)return t.push([l.id,0]),l.childNodes[0];i[1]++;var l=this._idpull[i[0]].childNodes[i[1]];return l?l:(t.pop(),t.length?this._get_next_srnd(t,!0):this.htmlNode)},this._findNodeByLabel=function(t,e,i){var t=t.replace(new RegExp("^( )+"),"").replace(new RegExp("( )+$"),"");t=new RegExp(t.replace(/([\*\+\\\[\]\(\)]{1})/gi,"\\$1").replace(/ /gi,".*"),"gi"),i||(i=this._selected[0],i||(i=this.htmlNode));for(var l=i,o=this._get_srnd_p(l.id);i=e?this._get_prev_srnd(o,t):this._get_next_srnd(o);){if(i.label){if(-1!=i.label.search(t))return i}else if(i._sxml){if(-1!=i._sxml.get("text").search(t))return i;this.findStrInXML(i._sxml.d,"text",t)&&this._globalIdStorageFind(i.id)}if(i.unParsed&&this.findStrInXML(i.unParsed.d,"text",t)&&this.reParse(i),l.id==i.id)break;if(e&&1==o.length&&0==o[0][1])break}return null},this.deleteChildItems=function(t){this.rootId==t&&(this._selected=new Array,this._idpull={},this._p=this._pos_c=this._pullSize=null,this.allTree.removeChild(this.htmlNode.htmlNode),this.htmlNode=new dhtmlXTreeItemObject(this.rootId,"",0,this),this.htmlNode.htmlNode.childNodes[0].childNodes[0].style.display="none",this.htmlNode.htmlNode.childNodes[0].childNodes[0].childNodes[0].className="hiddenRow",this.allTree.insertBefore(this.htmlNode.htmlNode,this.selectionBar),_isFF&&(this.allTree.childNodes[0].width="100%",this.allTree.childNodes[0].style.overflow="hidden"))},this._HideShow=function(t,e){if(this.XMLsource&&!t.XMLload){if(1==e)return;return t.XMLload=1,void this._loadDynXML(t.id)}if(t.span||this._buildSRND(t),t.unParsed&&(this.reParse(t),this.prepareSR(t.id)),0!=t.childsCount){var i=t.htmlNode.childNodes[0].childNodes,l=i.length;if(l>1){if("none"==i[1].style.display&&1!=e||2==e){var o="";t._open=!0}else{this.allTree.childNodes[0].border="1",this.allTree.childNodes[0].border="0";var o="none";t._open=!1}for(var s=1;l>s;s++)i[s].style.display=o;this._renderState()}this._correctPlus(t)}}},dhtmlXGridObject.prototype.hidePivot=function(){if(this._pgridCont){this._pgrid&&this._pgrid.destructor();var t=this._pgridCont.parentNode;t.innerHTML="",t.parentNode==this.entBox&&this.entBox.removeChild(t),this._pgrid=this._pgridSelect=this._pUNI=this._pgridCont=null}},dhtmlXGridObject.prototype.makePivot=function(t,e){if(e=e||{},this.hidePivot(),!t){var t=document.createElement("DIV");t.style.cssText="position:absolute; top:0px; left:0px;background-color:white;",t.style.height=this.entBox.offsetHeight+"px",t.style.width=this.entBox.offsetWidth+"px","absolute"!=this.entBox.style.position&&(this.entBox.style.position="relative"),this.entBox.appendChild(t)}if("object"!=typeof t&&(t=document.getElementById(t)),e.column_list)this._column_list=e.column_list;else{this._column_list=[];for(var i=0;i<this.hdr.rows[1].cells.length;i++)this._column_list.push(this.hdr.rows[1].cells[i][_isIE?"innerText":"textContent"])}var l=this;t.innerHTML="<table cellspacing='0' cellpadding='0'><tr><td style='width:160px' align='center'></td><td>&nbsp;&nbsp;&nbsp;</td><td></td></tr></table><div></div>";var o=this.makePivotSelect(this._column_list);o.style.width="80px",o.onchange=function(){l._pivotS.value=-1!=this.value?this.value:"",l._reFillPivotLists(),l._renderPivot2()};var s=this.makePivotSelect(this._column_list);s.onchange=function(){l._pivotS.x=-1!=this.value?this.value:"",l._reFillPivotLists(),l._renderPivot()};var h=this.makePivotSelect(this._column_list);h.onchange=function(){l._pivotS.y=-1!=this.value?this.value:"",l._reFillPivotLists(),l._renderPivot()};var n=this.makePivotSelect(["Sum","Min","Max","Average","Count"],-1);n.style.width="70px",n.onchange=function(){l._pivotS.action=-1!=this.value?this.value:null,l._renderPivot2()},e.readonly&&(o.disabled=s.disabled=h.disabled=n.disabled=!0),t.firstChild.rows[0].cells[0].appendChild(n),t.firstChild.rows[0].cells[0].appendChild(o),t.firstChild.rows[0].cells[2].appendChild(s);var r=t.childNodes[1];r.style.width=t.offsetWidth+"px",r.style.height=t.offsetHeight-20+"px",r.style.overflow="hidden",this._pgridCont=r,this._pgridSelect=[o,s,h,n],this._pData=this._fetchPivotData(),this._pUNI=[],this._pivotS={action:e.action||"0",value:"undefined"!=typeof e.value?e.value||"0":null,x:"undefined"!=typeof e.x?e.x||"0":null,y:"undefined"!=typeof e.y?e.y||"0":null},o.value=this._pivotS.value,s.value=this._pivotS.x,h.value=this._pivotS.y,n.value=this._pivotS.action,l._reFillPivotLists(),this._renderPivot()},dhtmlXGridObject.prototype._fetchPivotData=function(){for(var t=[],e=0;e<this._cCount;e++){for(var i=[],l=0;l<this.rowsCol.length;l++)this.rowsCol[l]._cntr||i.push(this.cells2(l,e).getValue());t.push(i)}return t},dhtmlXGridObject.prototype._renderPivot=function(){if(_isIE&&this._pgridSelect[2].removeNode(!0),this._pgrid&&this._pgrid.destructor(),this._pgrid=new dhtmlXGridObject(this._pgridCont),this._pgrid.setImagePath(this.imgURL),this._pgrid.attachEvent("onBeforeSelect",function(){return!1}),this._pivotS.x){for(var t=this._getUniList(this._pivotS.x),e=[160],i=0;i<t.length;i++)e.push(100);t=[""].concat(t),this._pgrid.setHeader(t),this._pgrid.setInitWidths(e.join(","))}else this._pgrid.setHeader(""),this._pgrid.setInitWidths("160");this._pgrid.init(),this._pgrid.setEditable(!1),this._pgrid.setSkin(this.entBox.className.replace("gridbox gridbox_",""));var l=this._pgrid.hdr.rows[1].cells[0];if(l.firstChild&&"DIV"==l.firstChild.tagName&&(l=l.firstChild),l.appendChild(this._pgridSelect[2]),this._pgrid.setSizes(),this._pivotS.y)for(var t=this._getUniList(this._pivotS.y),i=0;i<t.length;i++)this._pgrid.addRow(this._pgrid.uid(),[t[i]],-1);else this._pgrid.addRow(1,"not ready",1);this._renderPivot2()},dhtmlXGridObject.prototype._pivot_action_0=function(t,e,i,l,o,s){for(var h=0,n=s[t],r=s[e],d=s[i],c=n.length-1;c>=0;c--)n[c]==l&&r[c]==o&&(h+=this.parseFloat(d[c]));return h},dhtmlXGridObject.prototype._pivot_action_1=function(t,e,i,l,o,s){ret=9999999999;for(var h=s[t],n=s[e],r=s[i],d=h.length-1;d>=0;d--)h[d]==l&&n[d]==o&&(ret=Math.min(this.parseFloat(r[d]),ret));return 9999999999==ret&&(ret=""),ret},dhtmlXGridObject.prototype._pivot_action_2=function(t,e,i,l,o,s){ret=-9999999999;for(var h=s[t],n=s[e],r=s[i],d=h.length-1;d>=0;d--)h[d]==l&&n[d]==o&&(ret=Math.max(this.parseFloat(r[d]),ret));return-9999999999==ret&&(ret=""),ret},dhtmlXGridObject.prototype._pivot_action_3=function(t,e,i,l,o,s){for(var h=0,n=0,r=s[t],d=s[e],c=s[i],a=r.length-1;a>=0;a--)r[a]==l&&d[a]==o&&(h+=this.parseFloat(c[a]),n++);return n?h/n:""},dhtmlXGridObject.prototype._pivot_action_4=function(t,e,i,l,o,s){for(var h=0,n=s[t],r=s[e],d=(s[i],n.length-1);d>=0;d--)n[d]==l&&r[d]==o&&h++;return h},dhtmlXGridObject.prototype.parseFloat=function(t){return t=parseFloat(t),isNaN(t)?0:t},dhtmlXGridObject.prototype._renderPivot2=function(){if(this._pivotS.x&&this._pivotS.y&&this._pivotS.value&&this._pivotS.action)for(var t=this["_pivot_action_"+this._pivotS.action],e=this._getUniList(this._pivotS.x),i=this._getUniList(this._pivotS.y),l=0;l<e.length;l++)for(var o=0;o<i.length;o++)this._pgrid.cells2(o,l+1).setValue(Math.round(100*t(this._pivotS.x,this._pivotS.y,this._pivotS.value,e[l],i[o],this._pData))/100)},dhtmlXGridObject.prototype._getUniList=function(t){if(!this._pUNI[t]){for(var e={},i=[],l=this._pData[t].length-1;l>=0;l--)e[this._pData[t][l]]=!0;for(var o in e)e[o]===!0&&i.push(o);this._pUNI[t]=i.sort()}return this._pUNI[t]},dhtmlXGridObject.prototype._fillPivotList=function(t,e,i,l){i||(i={},l=-1),t.innerHTML="",t.options[t.options.length]=new Option("-select-",-1);for(var o=0;o<e.length;o++)i[o]||null===e[o]||(t.options[t.options.length]=new Option(e[o],o));t.value=parseInt(l)},dhtmlXGridObject.prototype._reFillPivotLists=function(){for(var t=[],e=[],i=0;3>i;i++)t.push(this._pgridSelect[i]),e.push(t[i].value);var l=this._reFfillPivotLists,o={};o[e[1]]=o[e[2]]=!0,this._fillPivotList(t[0],this._column_list,o,e[0]),o={},o[e[0]]=o[e[2]]=!0,this._fillPivotList(t[1],this._column_list,o,e[1]),o={},o[e[1]]=o[e[0]]=!0,this._fillPivotList(t[2],this._column_list,o,e[2]),this._reFfillPivotLists=l},dhtmlXGridObject.prototype.makePivotSelect=function(t,e){var i=document.createElement("SELECT");return this._fillPivotList(i,t,e),i.style.cssText="width:150px; height:20px; font-family:Tahoma; font-size:8pt; font-weight:normal;",i},eXcell_dec.prototype=new eXcell_ed,eXcell_cor.prototype=new eXcell,eXcell_cor.prototype.setValue=function(t){""==(t||"").toString()._dhx_trim()&&(t=null);var e=this.grid.getCombo(this.cell._cellIndex).get(t);-1==t&&""==e&&(this.combo.values[this.combo.keys._dhx_find(-1)]="Create new value",t=null),null!==t?this.setCValue(e,t):this.setCValue("&nbsp;",t),this.cell.__prev=this.cell.__now,this.cell.__now={key:t,value:e},this.cell.combo_value=t},eXcell_wbut.prototype=new eXcell,dhtmlXGridObject.prototype.getWButFunction=function(t){return this._wbtfna?this._wbtfna[t]:function(){}},dhtmlXGridObject.prototype.setWButFunction=function(t,e){this._wbtfna||(this._wbtfna=new Array),this._wbtfna[t]=e},eXcell_passw.prototype=new eXcell,eXcell_num.prototype=new eXcell,eXcell_mro.prototype=new eXcell,eXcell_mro.prototype.getValue=function(){return this.cell.childNodes[0].innerHTML._dhx_trim()},eXcell_mro.prototype.setValue=function(t){this.cell.childNodes.length||(this.cell.style.whiteSpace="normal",this.cell.innerHTML="<div style='height:100%; white-space:nowrap; overflow:hidden;'></div>"),t&&""!=t.toString()._dhx_trim()||(t="&nbsp;"),this.cell.childNodes[0].innerHTML=t},eXcell_liveedit.prototype=new eXcell_ed,eXcell_liveedit.prototype.setValue=function(t){var e=this;this.cell.innerHTML='<input type="text" value="" style="width:100%;" />',this.cell.inputObj=this.cell.firstChild,this.cell.inputObj=this.cell.firstChild,this.cell.inputObj.value=t,this.cell.inputObj.onfocus=function(){e.onFocus()},this.cell.inputObj.onblur=function(){e.onFocus()},this.cell.inputObj.onchange=function(){e.onChange()}},window.eXcell_math&&(eXcell_liveedit.prototype.setValueA=eXcell_liveedit.prototype.setValue,eXcell_liveedit.prototype.setValue=eXcell_math.prototype._NsetValue),eXcell_limit.prototype=new eXcell,window.dhtmlxHierarchy&&(window.dhtmlXCellObject&&(dhtmlXCellObject.prototype.attachPropertyGrid=function(){var t=this.attachGrid();return new dhtmlXPropertyGrid(t),t}),eXcell_tree_property.prototype=new eXcell_tree,eXcell_tree.prototype.setValue=function(t){if(this.cell.parentNode.imgTag)return this.setLabel(t);if(null==this.grid._tgc.iconTree||this.grid._tgc.iconTree!=this.grid.iconTree){var e={};
e.imst="<img src='"+this.grid.iconTree,e.imsti="<img src='"+(this.grid.iconURL||this.grid.iconTree),e.imact="' align='absmiddle'  onclick='this."+(_isKHTML?"":"parentNode.")+"parentNode.parentNode.parentNode.parentNode.grid.doExpand(this);event.cancelBubble=true;' class='property_image'>",e.plus=e.imst+"plus.gif"+e.imact,e.minus=e.imst+"minus.gif"+e.imact,e.blank=e.imst+"blank.gif"+e.imact,e.start="<div style=' overflow:hidden; white-space : nowrap; height:"+(_isIE?20:19)+"px;'>",e.itemim="<span "+(_isFF?"style='position:relative; top:2px;'":"")+"id='nodeval'>",e.close="</span><div class='property_space'></div></div>",this.grid._tgc=e}var e=(this.grid._h2,this.grid._tgc),i=this.cell.parentNode.idd,l=this.grid._h2.get[i];(this.grid.kidsXmlFile||this.grid._slowParse)&&(l.has_kids=l.has_kids||this.cell.parentNode._attrs.xmlkids&&"minus"!=l.state,l._xml_await=!!l.has_kids),l.image=l.image||this.cell._attrs.image||"leaf.gif",l.label=t;var o=[e.start];l.has_kids?(o.push(e.plus),l.state="plus"):o.push(e.imst+l.state+".gif"+e.imact+e.itemim),o.push(l.label),o.push(e.close),this.cell.innerHTML=o.join(""),this.cell.style.paddingLeft="0px",this.cell.parentNode.imgTag=this.cell.childNodes[0].childNodes[0],this.cell.parentNode.valTag=this.cell.childNodes[0].childNodes[1],l.childs.length&&(this.grid.getRowById(this.cell.parentNode.idd)._attrs["class"]=" dhx_parent_row ",this.cell.nextSibling.style.borderLeft="1px solid #D4D0C8"),_isKHTML&&(this.cell.vAlign="top"),0!=l.parent.id&&"plus"==l.parent.state&&(this.grid._updateTGRState(l.parent,!1),this.cell.parentNode._skipInsert=!0),this.grid.callEvent("onCellChanged",[i,this.cell._cellIndex,t])}),eXcell_list.prototype=new eXcell,eXcell_list.prototype.setValue=function(t){this.cell._val=t,t&&""!=t.toString()._dhx_trim()?(this.cell._clearCell=!1,this.setCValue(this.grid._aplNF(t,this.cell._cellIndex))):(this.cell._clearCell=!0,this.setCValue("&nbsp",""))},dhtmlXForm.prototype.getItemsList=function(){var t=[],e=[];for(var i in this.itemPull){var l=null;l=this.itemPull[i]._group?this.itemPull[i]._group:i.replace(this.idPrefix,""),1!=e[l]&&t.push(l),e[l]=!0}return t},dhtmlXForm.prototype.setItemText=function(){this.setItemLabel.apply(this,arguments)},dhtmlXForm.prototype.getItemText=function(){return this.getItemLabel.apply(this,arguments)},dhtmlXForm.prototype.loadStructString=function(t,e){this.loadStruct(t,e)},dhtmlXAccordion.prototype.setEffect=function(){},dhtmlXAccordion.prototype.setIcon=function(t,e){this.cells(t).setIcon(e)},dhtmlXAccordion.prototype.clearIcon=function(t){this.cells(t).clearIcon()},dhtmlXAccordion.prototype.setActive=function(t){this.cells(t).open()},dhtmlXAccordion.prototype.isActive=function(t){return this.cells(t).isOpened()},dhtmlXAccordion.prototype.openItem=function(t){this.cells(t).open()},dhtmlXAccordion.prototype.closeItem=function(t){this.cells(t).close()},dhtmlXAccordion.prototype.moveOnTop=function(t){this.cells(t).moveOnTop()},dhtmlXAccordion.prototype.setItemHeight=function(t){this.cells(id).setHeight(t)},dhtmlXAccordion.prototype.setText=function(t,e){this.cells(t).setText(e)},dhtmlXAccordion.prototype.getText=function(){return this.cells(id).getText()},dhtmlXAccordion.prototype.showItem=function(t){this.cells(t).show()},dhtmlXAccordion.prototype.hideItem=function(t){this.cells(t).hide()},dhtmlXAccordion.prototype.isItemHidden=function(t){return!this.cells(t).isVisible()},dhtmlXAccordion.prototype.loadJSON=function(t,e){this.loadStruct(t,e)},dhtmlXAccordion.prototype.loadXML=function(t,e){this.loadStruct(t,e)},dhtmlXAccordion.prototype.setSkinParameters=function(t){null!=t&&this.setOffset(t)},dhtmlXLayoutObject.prototype.listViews=function(){return this.listPatterns()},dhtmlXLayoutObject.prototype.setEffect=function(){},dhtmlXLayoutObject.prototype.getEffect=function(){},dhtmlXLayoutObject.prototype.dockWindow=function(t){this.cells(t).dock()},dhtmlXLayoutObject.prototype.unDockWindow=function(t){this.cells(t).undock()},dhtmlXLayoutObject.prototype.setCollapsedText=function(t,e){this.cells(t).setCollapsedText(e)},dhtmlXLayoutObject.prototype.getIdByIndex=function(t){if(0>t||t>this.items.length-1)return null;var e=null;return this.forEachItem(function(i){null==e&&i==this.items[t]&&(e=i.conf.name)}),e},dhtmlXLayoutObject.prototype.getIndexById=function(t){for(var e=this.cells(t),i=-1,l=0;l<this.items.length;l++)e==this.items[l]&&(i=l);return i},dhtmlXLayoutObject.prototype.showPanel=function(t){this.cells(t).showHeader()},dhtmlXLayoutObject.prototype.hidePanel=function(t){this.cells(t).hideHeader()},dhtmlXLayoutObject.prototype.isPanelVisible=function(t){return this.cells(t).isHeaderVisible()},dhtmlXLayoutObject.prototype.setImagePath=function(){},dhtmlXLayoutCell.prototype.getIndex=function(){return this.conf.index},dhtmlXTabBar.prototype.destructor=function(){this.unload()},dhtmlXTabBar.prototype.normalize=function(){},dhtmlXTabBar.prototype.setStyle=function(){},dhtmlXTabBar.prototype.setContent=function(t,e){this.cells(t).attachObject(e)},dhtmlXTabBar.prototype.setContentHTML=function(t,e){this.cells(t).attachHTMLString(e)},dhtmlXTabBar.prototype.setHrefMode=function(t){this._hrfmode=t},dhtmlXTabBar.prototype.setContentHref=function(t,e){switch(this._hrfmode||(this._hrfmode="iframe"),this._hrfmode){case"iframes":case"iframe":case"iframes-on-demand":this.cells(t).attachURL(e);break;case"ajax":case"ajax-html":this.cells(t).attachURL(e,!0)}},dhtmlXTabBar.prototype.setMargin=function(){},dhtmlXTabBar.prototype.setOffset=function(){},dhtmlXTabBar.prototype.setImagePath=function(){},dhtmlXTabBar.prototype.setSkinColors=function(){},dhtmlXTabBar.prototype.tabWindow=function(t){return this.cells(t).getFrame()},dhtmlXTabBar.prototype.setCustomStyle=function(){},dhtmlXTabBar.prototype.enableScroll=function(){},dhtmlXTabBar.prototype.enableForceHiding=function(){},dhtmlXTabBar.prototype.setSize=function(t,e){this.base.style.width=t+"px",this.base.style.height=e+"px",this.setSizes()},dhtmlXTabBar.prototype.enableAutoSize=function(){},dhtmlXTabBar.prototype.adjustOuterSize=function(){this.setSizes()},dhtmlXTabBar.prototype.showInnerScroll=function(t){for(var e in this.t)(null==t||t==e)&&this.t[e].cell.showInnerScroll()},dhtmlXTabBar.prototype.loadXML=function(t,e){this.loadStruct.apply(this,[t,e])},dhtmlXTabBar.prototype.loadXMLString=function(t,e){this.loadStruct.apply(this,[t,e])},dhtmlXTabBar.prototype.hideTab=function(t,e){this.tabs(t).hide(e)},dhtmlXTabBar.prototype.showTab=function(t,e){this.tabs(t).show(e)},dhtmlXTabBar.prototype.enableTab=function(t){this.tabs(t).enable()},dhtmlXTabBar.prototype.disableTab=function(t){this.tabs(t).disable()},dhtmlXTabBar.prototype.getIndex=function(t){return this.tabs(t).getIndex()},dhtmlXTabBar.prototype.getLabel=function(t){return this.tabs(t).getText()},dhtmlXTabBar.prototype.setLabel=function(t,e){this.tabs(t).setText(e)},dhtmlXTabBar.prototype.setTabActive=function(t){this.tabs(t).setActive()},dhtmlXTabBar.prototype.removeTab=function(t){this.tabs(t).close()},dhtmlXTabBar.prototype.forceLoad=function(t){this.tabs(t).reloadURL()},dhtmlXWindows.prototype.enableAutoViewport=function(){},dhtmlXWindows.prototype.setImagePath=function(){},dhtmlXWindows.prototype.setEffect=function(){},dhtmlXWindows.prototype.getEffect=function(){},dhtmlXWindowsCell.prototype.setToFullScreen=function(){},dhtmlXWindowsCell.prototype.setIcon=function(){},dhtmlXWindowsCell.prototype.getIcon=function(){},dhtmlXWindowsCell.prototype.restoreIcon=function(){},dhtmlXWindowsCell.prototype.clearIcon=function(){};