(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{122:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=Function.bind.apply(e,o),i=new a;return r&&t(i,r.prototype),i}).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,u=Object.freeze,m=Object.seal,f=Object.create,p="undefined"!==typeof Reflect&&Reflect,d=p.apply,h=p.construct;d||(d=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=k(Array.prototype.forEach),b=k(Array.prototype.pop),T=k(Array.prototype.push),v=k(String.prototype.toLowerCase),N=k(String.prototype.toString),E=k(String.prototype.match),A=k(String.prototype.replace),w=k(String.prototype.indexOf),S=k(String.prototype.trim),_=k(RegExp.prototype.test),x=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function k(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function L(e,t,n){n=n||v,i&&i(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(l(t)||(t[r]=a),o=a)}e[o]=!0}return e}function O(e){var t,n=f(null);for(t in e)!0===d(a,e,[t])&&(n[t]=e[t]);return n}function D(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return k(n.get);if("function"===typeof n.value)return k(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var R=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),C=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=u(["#text"]),z=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=m(/<%[\w\W]*|[\w\W]*%>/gm),q=m(/\${[\w\W]*}/gm),Y=m(/^data-[\-\w.\u00B7-\uFFFF]/),$=m(/^aria-[\-\w]+$/),K=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=m(/^(?:\w+script|data):/i),J=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),X=m(/^html$/i),Z=function(){return"undefined"===typeof window?null:window},Q=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),o=function(e){return t(e)};if(o.version="2.4.5",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,m=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,k=n.trustedTypes,ee=m.prototype,te=D(ee,"cloneNode"),ne=D(ee,"nextSibling"),re=D(ee,"childNodes"),oe=D(ee,"parentNode");if("function"===typeof c){var ae=i.createElement("template");ae.content&&ae.content.ownerDocument&&(i=ae.content.ownerDocument)}var ie=Q(k,a),le=ie?ie.createHTML(""):"",ce=i,se=ce.implementation,ue=ce.createNodeIterator,me=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=a.importNode,de={};try{de=O(i).documentMode?i.documentMode:{}}catch(Lt){}var he={};o.isSupported="function"===typeof oe&&se&&"undefined"!==typeof se.createHTMLDocument&&9!==de;var ge,ye,be=G,Te=W,ve=q,Ne=Y,Ee=$,Ae=V,we=J,Se=K,_e=null,xe=L({},[].concat(r(R),r(C),r(M),r(F),r(H))),ke=null,Le=L({},[].concat(r(z),r(P),r(B),r(j))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Re=null,Ce=!0,Me=!0,Ie=!1,Fe=!0,Ue=!1,He=!1,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!1,We=!0,qe=!1,Ye=!0,$e=!1,Ke={},Ve=null,Je=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,Ze=L({},["audio","video","img","source","image","track"]),Qe=null,et=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",rt="http://www.w3.org/1999/xhtml",ot=rt,at=!1,it=null,lt=L({},[tt,nt,rt],N),ct=["application/xhtml+xml","text/html"],st=null,ut=i.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},ft=function(t){st&&st===t||(t&&"object"===e(t)||(t={}),t=O(t),ge=ge=-1===ct.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===ge?N:v,_e="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,ye):xe,ke="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,ye):Le,it="ALLOWED_NAMESPACES"in t?L({},t.ALLOWED_NAMESPACES,N):lt,Qe="ADD_URI_SAFE_ATTR"in t?L(O(et),t.ADD_URI_SAFE_ATTR,ye):et,Xe="ADD_DATA_URI_TAGS"in t?L(O(Ze),t.ADD_DATA_URI_TAGS,ye):Ze,Ve="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,ye):Je,De="FORBID_TAGS"in t?L({},t.FORBID_TAGS,ye):{},Re="FORBID_ATTR"in t?L({},t.FORBID_ATTR,ye):{},Ke="USE_PROFILES"in t&&t.USE_PROFILES,Ce=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ue=t.SAFE_FOR_TEMPLATES||!1,He=t.WHOLE_DOCUMENT||!1,Be=t.RETURN_DOM||!1,je=t.RETURN_DOM_FRAGMENT||!1,Ge=t.RETURN_TRUSTED_TYPE||!1,Pe=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,Ye=!1!==t.KEEP_CONTENT,$e=t.IN_PLACE||!1,Se=t.ALLOWED_URI_REGEXP||Se,ot=t.NAMESPACE||rt,Oe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Me=!1),je&&(Be=!0),Ke&&(_e=L({},r(H)),ke=[],!0===Ke.html&&(L(_e,R),L(ke,z)),!0===Ke.svg&&(L(_e,C),L(ke,P),L(ke,j)),!0===Ke.svgFilters&&(L(_e,M),L(ke,P),L(ke,j)),!0===Ke.mathMl&&(L(_e,F),L(ke,B),L(ke,j))),t.ADD_TAGS&&(_e===xe&&(_e=O(_e)),L(_e,t.ADD_TAGS,ye)),t.ADD_ATTR&&(ke===Le&&(ke=O(ke)),L(ke,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&L(Qe,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Ve===Je&&(Ve=O(Ve)),L(Ve,t.FORBID_CONTENTS,ye)),Ye&&(_e["#text"]=!0),He&&L(_e,["html","head","body"]),_e.table&&(L(_e,["tbody"]),delete De.tbody),u&&u(t),st=t)},pt=L({},["mi","mo","mn","ms","mtext"]),dt=L({},["foreignobject","desc","title","annotation-xml"]),ht=L({},["title","style","font","a","script"]),gt=L({},C);L(gt,M),L(gt,I);var yt=L({},F);L(yt,U);var bt=function(e){T(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Lt){try{e.outerHTML=le}catch(Lt){e.remove()}}},Tt=function(e,t){try{T(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Lt){T(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(Be||je)try{bt(t)}catch(Lt){}else try{t.setAttribute(e,"")}catch(Lt){}},vt=function(e){var t,n;if(Pe)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&ot===rt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(ot===rt)try{t=(new g).parseFromString(o,ge)}catch(Lt){}if(!t||!t.documentElement){t=se.createDocument(ot,"template",null);try{t.documentElement.innerHTML=at?le:o}catch(Lt){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),ot===rt?fe.call(t,He?"html":"body")[0]:He?t.documentElement:a},Nt=function(e){return ue.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},Et=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},At=function(e,t,n){he[e]&&y(he[e],function(e){e.call(o,t,n,st)})},wt=function(e){var t,n;if(At("beforeSanitizeElements",e,null),(n=e)instanceof h&&("string"!==typeof n.nodeName||"string"!==typeof n.textContent||"function"!==typeof n.removeChild||!(n.attributes instanceof d)||"function"!==typeof n.removeAttribute||"function"!==typeof n.setAttribute||"string"!==typeof n.namespaceURI||"function"!==typeof n.insertBefore||"function"!==typeof n.hasChildNodes))return bt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return bt(e),!0;var r=ye(e.nodeName);if(At("uponSanitizeElement",e,{tagName:r,allowedTags:_e}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return bt(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return bt(e),!0;if(!_e[r]||De[r]){if(!De[r]&&_t(r)){if(Oe.tagNameCheck instanceof RegExp&&_(Oe.tagNameCheck,r))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r))return!1}if(Ye&&!Ve[r]){var a=oe(e)||e.parentNode,i=re(e)||e.childNodes;if(i&&a)for(var l=i.length,c=l-1;c>=0;--c)a.insertBefore(te(i[c],!0),ne(e))}return bt(e),!0}return e instanceof m&&!function(e){var t=oe(e);t&&t.tagName||(t={namespaceURI:ot,tagName:"template"});var n=v(e.tagName),r=v(t.tagName);return!!it[e.namespaceURI]&&(e.namespaceURI===nt?t.namespaceURI===rt?"svg"===n:t.namespaceURI===tt?"svg"===n&&("annotation-xml"===r||pt[r]):Boolean(gt[n]):e.namespaceURI===tt?t.namespaceURI===rt?"math"===n:t.namespaceURI===nt?"math"===n&&dt[r]:Boolean(yt[n]):e.namespaceURI===rt?!(t.namespaceURI===nt&&!dt[r])&&!(t.namespaceURI===tt&&!pt[r])&&!yt[n]&&(ht[n]||!gt[n]):!("application/xhtml+xml"!==ge||!it[e.namespaceURI]))}(e)?(bt(e),!0):"noscript"!==r&&"noembed"!==r||!_(/<\/no(script|embed)/i,e.innerHTML)?(Ue&&3===e.nodeType&&(t=e.textContent,t=A(t,be," "),t=A(t,Te," "),t=A(t,ve," "),e.textContent!==t&&(T(o.removed,{element:e.cloneNode()}),e.textContent=t)),At("afterSanitizeElements",e,null),!1):(bt(e),!0)},St=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in i||n in ut))return!1;if(Me&&!Re[t]&&_(Ne,t));else if(Ce&&_(Ee,t));else if(!ke[t]||Re[t]){if(!(_t(e)&&(Oe.tagNameCheck instanceof RegExp&&_(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&_(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&_(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(Qe[t]);else if(_(Se,A(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Xe[e])if(Ie&&!_(Ae,A(n,we,"")));else if(n)return!1;return!0},_t=function(e){return e.indexOf("-")>0},xt=function(t){var n,r,a,i;At("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var s=n=l[i],u=s.name,m=s.namespaceURI;if(r="value"===u?n.value:S(n.value),a=ye(u),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,At("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(Tt(u,t),c.keepAttr))if(Fe||!_(/\/>/i,r)){Ue&&(r=A(r,be," "),r=A(r,Te," "),r=A(r,ve," "));var f=ye(t.nodeName);if(St(f,a,r)){if(!qe||"id"!==a&&"name"!==a||(Tt(u,t),r="user-content-"+r),ie&&"object"===e(k)&&"function"===typeof k.getAttributeType)if(m);else switch(k.getAttributeType(f,a)){case"TrustedHTML":r=ie.createHTML(r);break;case"TrustedScriptURL":r=ie.createScriptURL(r)}try{m?t.setAttributeNS(m,u,r):t.setAttribute(u,r),b(o.removed)}catch(Lt){}}}else Tt(u,t)}At("afterSanitizeAttributes",t,null)}},kt=function e(t){var n,r=Nt(t);for(At("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)At("uponSanitizeShadowNode",n,null),wt(n)||(n.content instanceof l&&e(n.content),xt(n));At("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((at=!t)&&(t="\x3c!--\x3e"),"string"!==typeof t&&!Et(t)){if("function"!==typeof t.toString)throw x("toString is not a function");if("string"!==typeof(t=t.toString()))throw x("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"===typeof n.toStaticHTML){if("string"===typeof t)return n.toStaticHTML(t);if(Et(t))return n.toStaticHTML(t.outerHTML)}return t}if(ze||ft(f),o.removed=[],"string"===typeof t&&($e=!1),$e){if(t.nodeName){var p=ye(t.nodeName);if(!_e[p]||De[p])throw x("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)r=vt("\x3c!----\x3e"),1===(i=r.ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName?r=i:"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!Be&&!Ue&&!He&&-1===t.indexOf("<"))return ie&&Ge?ie.createHTML(t):t;if(!(r=vt(t)))return Be?null:Ge?le:""}r&&Pe&&bt(r.firstChild);for(var d=Nt($e?t:r);c=d.nextNode();)3===c.nodeType&&c===u||wt(c)||(c.content instanceof l&&kt(c.content),xt(c),u=c);if(u=null,$e)return t;if(Be){if(je)for(m=me.call(r.ownerDocument);r.firstChild;)m.appendChild(r.firstChild);else m=r;return(ke.shadowroot||ke.shadowrootmod)&&(m=pe.call(a,m,!0)),m}var h=He?r.outerHTML:r.innerHTML;return He&&_e["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&_(X,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+h),Ue&&(h=A(h,be," "),h=A(h,Te," "),h=A(h,ve," ")),ie&&Ge?ie.createHTML(h):h},o.setConfig=function(e){ft(e),ze=!0},o.clearConfig=function(){st=null,ze=!1},o.isValidAttribute=function(e,t,n){st||ft({});var r=ye(e),o=ye(t);return St(r,o,n)},o.addHook=function(e,t){"function"===typeof t&&(he[e]=he[e]||[],T(he[e],t))},o.removeHook=function(e){if(he[e])return b(he[e])},o.removeHooks=function(e){he[e]&&(he[e]=[])},o.removeAllHooks=function(){he={}},o}()}()}}]);
//# sourceMappingURL=4.1505dd03.chunk.js.map