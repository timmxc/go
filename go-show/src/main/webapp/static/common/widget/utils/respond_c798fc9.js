!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,r=e.createElement("body"),s=e.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,a),t=42===s.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){w(!0)}var n={};e.respond=n,n.update=function(){};var a=[],r=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),s=function(e,t){var n=r();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=s,n.queue=a,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var o,l,m,d=e.document,h=d.documentElement,u=[],c=[],f=[],p={},g=30,y=d.getElementsByTagName("head")[0]||h,x=d.getElementsByTagName("base")[0],v=y.getElementsByTagName("link"),E=function(){var e,t=d.createElement("div"),n=d.body,a=h.style.fontSize,r=n&&n.style.fontSize,s=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=s=d.createElement("body"),n.style.background="none"),h.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),s&&h.insertBefore(n,h.firstChild),e=t.offsetWidth,s?h.removeChild(n):n.removeChild(t),h.style.fontSize=a,r&&(n.style.fontSize=r),e=m=parseFloat(e)},w=function(t){var n="clientWidth",a=h[n],r="CSS1Compat"===d.compatMode&&a||d.body[n]||a,s={},i=v[v.length-1],p=(new Date).getTime();if(t&&o&&g>p-o)return e.clearTimeout(l),void(l=e.setTimeout(w,g));o=p;for(var x in u)if(u.hasOwnProperty(x)){var S=u[x],T=S.minw,C=S.maxw,b=null===T,$=null===C,z="em";T&&(T=parseFloat(T)*(T.indexOf(z)>-1?m||E():1)),C&&(C=parseFloat(C)*(C.indexOf(z)>-1?m||E():1)),S.hasquery&&(b&&$||!(b||r>=T)||!($||C>=r))||(s[S.media]||(s[S.media]=[]),s[S.media].push(c[S.rules]))}for(var M in f)f.hasOwnProperty(M)&&f[M]&&f[M].parentNode===y&&y.removeChild(f[M]);f.length=0;for(var R in s)if(s.hasOwnProperty(R)){var O=d.createElement("style"),k=s[R].join("\n");O.type="text/css",O.media=R,y.insertBefore(O,i.nextSibling),O.styleSheet?O.styleSheet.cssText=k:O.appendChild(d.createTextNode(k)),f.push(O)}},S=function(e,t,a){var r=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),s=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!s&&a;t.length&&(t+="/"),l&&(s=1);for(var m=0;s>m;m++){var d,h,f,p;l?(d=a,c.push(o(e))):(d=r[m].match(n.regex.findStyles)&&RegExp.$1,c.push(RegExp.$2&&o(RegExp.$2))),f=d.split(","),p=f.length;for(var g=0;p>g;g++)h=f[g],i(h)||u.push({media:h.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:c.length-1,hasquery:h.indexOf("(")>-1,minw:h.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:h.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},T=function(){if(a.length){var t=a.shift();s(t.href,function(n){S(n,t.href,t.media),p[t.href]=!0,e.setTimeout(function(){T()},0)})}},C=function(){for(var t=0;t<v.length;t++){var n=v[t],r=n.href,s=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();r&&i&&!p[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(S(n.styleSheet.rawCssText,r,s),p[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!x||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===r.substring(0,2)&&(r=e.location.protocol+r),a.push({href:r,media:s})))}T()};C(),n.update=C,n.getEmValue=E,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);