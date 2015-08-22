<%@page language="Java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix='c' uri='http://java.sun.com/jstl/core_rt'%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> 
<%@ taglib uri="/fis" prefix="fis"%>
<fis:html mapDir="/map"> 
<div class="goods-gallery" nctype="gallery-0">
  <a class='sample_demo' id="select_submit" href="${S_URL}/se/goods/addstep/three/images"
  style="display:none;">
    提交
  </a>
  <div class="nav">
    <span class="l">
      用户相册 > 
<c:choose><c:when test="${empty P_CLASSID}">全部图片</c:when><c:otherwise>
<c:forEach items="${P_ALBUM_CLASS}" var="album">
<c:if test="${album.id==P_CLASSID}">
	${album.aclassName}
</c:if>
</c:forEach>
</c:otherwise>
</c:choose>
    </span>
    <span class="r">
      <select name="jumpMenu" id="jumpMenu" style="width:100px;">
        <option value="0" style="width:80px;">
          请选择...
        </option>
          <c:forEach items="${P_ALBUM_CLASS}" var="album">
            <option class="w80" <c:if test="${album.id==P_CLASSID}">selected=""</c:if> value="${album.id}"> ${album.aclassName}</option>
          </c:forEach>
      </select>
    </span>
  </div>
<c:if test="${fn:length(P_ALBUM_PICLIST)>0}">
   <ul class="list">
  <c:forEach items="${P_ALBUM_PICLIST}" var="pic">
    <li onclick="insert_img('${pic.apicCover}','${S_URL}/att/download/${pic.apicCover}','0');">
      <a href="JavaScript:void(0);">
        <img src="${S_URL}/att/download/${pic.apicCover}" title='${pic.apicName}'/>
      </a>
    </li>
  </c:forEach>
</ul> 
   <fis:block url="shop:widget/tpl/pagination.html.jsp" >
       <fis:param name="page" value="P_PAGE_SHOW"/>
       <fis:param name="paginationSize" value="9"/>
       <fis:param name="reqName" value="curpage"/>
       <fis:param name="url" value="${S_URL}/se/goods/addstep/three/images"/>
     </fis:block> 
</c:if>
<c:if test="${fn:length(P_ALBUM_PICLIST)==0}">
      <div class="warning-option">
        <i class="icon-warning-sign"></i>
        <span>相册中暂无图片   </span>
      </div>
</c:if>

<fis:out id="common:widget/jquery/jquery.js"/>
<fis:out id="common:widget/jquery/jquery.ajaxContent.pack.js"/>
<script>
$(function() {
    $('.demo').ajaxContent({
      event: 'click',
      loaderType: 'img',
      loadingMsg: '${S_URL}/res/img/loading.gif',
      target: 'div[nctype="album-0"]'
    });
    
    $('#jumpMenu').change(function() {
      $('#select_submit').attr('href', $('#select_submit').attr('href') + "?class_id=" + $('#jumpMenu').val());
      $('.sample_demo').ajaxContent({
        event: 'click',
        loaderType: 'img',
        loadingMsg: '${S_URL}/res/img/loading.gif',
        target: 'div[nctype="album-0"]'
      });
      $('#select_submit').click();
    });
  });
</script>
</fis:html>