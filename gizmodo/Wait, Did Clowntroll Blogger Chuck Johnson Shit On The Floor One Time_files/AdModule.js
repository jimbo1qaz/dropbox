webpackJsonp([55],{"./public/javascripts/lib/amd-wrapped/postscribe.js":function(a,b,c){var d;(function(){d=function(){return function(){function a(a,h){a=a||"",h=h||{};for(var i in b)b.hasOwnProperty(i)&&(h.autoFix&&(h["fix_"+i]=!0),h.fix=h.fix||h["fix_"+i]);var j=[],k=document.createElement("div"),l=function(a){return"string"==typeof a&&-1!==a.indexOf("&")?(k.innerHTML=a,k.textContent||k.innerText||a):a},m=function(b){a+=b},n=function(b){a=b+a},o={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("-->");return b>=0?{content:a.substr(4,b),length:b+3}:void 0},endTag:function(){var b=a.match(d);return b?{tagName:b[1],length:b[0].length}:void 0},atomicTag:function(){var b=p.startTag();if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,attrs:b.attrs,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.indexOf(">");if(-1===b)return null;var d=a.match(c);if(d){var g={};return d[2].replace(e,function(a,b){var c=arguments[2]||arguments[3]||arguments[4]||f.test(b)&&b||null;g[b]=l(c)}),{tagName:d[1],attrs:g,unary:!!d[3],length:d[0].length}}},chars:function(){var b=a.indexOf("<");return{length:b>=0?b:a.length}}},q=function(){for(var b in o)if(o[b].test(a)){g&&console.log("suspected "+b);var c=p[b]();return c?(g&&console.log("parsed "+b,c),c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}},r=function(a){for(var b;b=q();)if(a[b.type]&&a[b.type](b)===!1)return},s=function(){var b=a;return a="",b},t=function(){return a};return h.fix&&!function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.last=function(){return this[this.length-1]},d.lastTagNameEq=function(a){var b=this.last();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()},d.containsTagName=function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){return a&&"startTag"===a.type&&(a.unary=b.test(a.tagName)||a.unary),a},f=q,g=function(){var b=a,c=e(f());return a=b,c},i=function(){var a=d.pop();n("</"+a.tagName+">")},j={startTag:function(a){var b=a.tagName;"TR"===b.toUpperCase()&&d.lastTagNameEq("TABLE")?(n("<TBODY>"),l()):h.fix_selfClose&&c.test(b)&&d.containsTagName(b)?d.lastTagNameEq(b)?i():(n("</"+a.tagName+">"),l()):a.unary||d.push(a)},endTag:function(a){var b=d.last();b?h.fix_tagSoup&&!d.lastTagNameEq(a.tagName)?i():d.pop():h.fix_tagSoup&&k()}},k=function(){f(),l()},l=function(){var a=g();a&&j[a.type]&&j[a.type](a)};q=function(){return l(),e(f())}}(),{append:m,readToken:q,readTokens:r,clear:s,rest:t,stack:j}}var b=function(){var a={},b,c=this.document.createElement("div");return b="<P><I></P></I>",c.innerHTML=b,a.tagSoup=c.innerHTML!==b,c.innerHTML="<P><i><P></P></i></P>",a.selfClose=2===c.childNodes.length,a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,g=!1;a.supports=b,a.tokenToString=function(a){var b={comment:function(a){return"<--"+a.content+"-->"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return console.log(a),b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName;for(var c in a.attrs){var d=a.attrs[c];b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.unary?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)},a.escapeAttributes=function(a){var b={};for(var c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.browserHasFlaw=a.browserHasFlaw||!b[h]&&h;this.htmlParser=a}(),function(){function a(){}function b(a){return a!==m&&null!==a}function c(a){return"function"==typeof a}function d(a,b,c){var d,e=a&&a.length||0;for(d=0;e>d;d++)b.call(c,a[d],d)}function e(a,b,c){var d;for(d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function f(a,b){return e(b,function(b,c){a[b]=c}),a}function g(a,c){return a=a||{},e(c,function(c,d){b(a[c])||(a[c]=d)}),a}function h(a){try{return o.call(a)}catch(b){var c=[];return d(a,function(a){c.push(a)}),c}}function i(a){return a&&"tagName"in a?!!~a.tagName.toLowerCase().indexOf("script"):!1}function j(a){return a&&"tagName"in a?!!~a.tagName.toLowerCase().indexOf("style"):!1}var k={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,beforeEnqueue:a,beforeWrite:function(a){return a},done:a,error:function(a){throw a},releaseAsync:!1},l=this,m=void 0;if(!l.postscribe){var n=!1,o=Array.prototype.slice,p=function(a){return a[a.length-1]},q=function(){function a(a,c,d){var e=k+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;f(this,{root:b,options:c,win:d.defaultView||d.parentWindow,doc:d,parser:htmlParser("",{autoFix:!0}),actuals:[b],proxyHistory:"",proxyRoot:d.createElement(b.nodeName),scriptStack:[],writeQueue:[]}),a(this.proxyRoot,"proxyof",0)}var k="data-ps-";return g.prototype.write=function(){[].push.apply(this.writeQueue,arguments);for(var a;!this.deferredRemote&&this.writeQueue.length;)a=this.writeQueue.shift(),c(a)?this.callFunction(a):this.writeImpl(a)},g.prototype.callFunction=function(a){var b={type:"function",value:a.name||a.toString()};this.onScriptStart(b),a.call(this.win,this.doc),this.onScriptDone(b)},g.prototype.writeImpl=function(a){this.parser.append(a);for(var b,c=[],d,e;(b=this.parser.readToken())&&!(d=i(b))&&!(e=j(b));)c.push(b);this.writeStaticTokens(c),d&&this.handleScriptToken(b),e&&this.handleStyleToken(b)},g.prototype.writeStaticTokens=function(a){var b=this.buildChunk(a);if(b.actual)return b.html=this.proxyHistory+b.actual,this.proxyHistory+=b.proxy,this.proxyRoot.innerHTML=b.html,n&&(b.proxyInnerHTML=this.proxyRoot.innerHTML),this.walkChunk(),n&&(b.actualInnerHTML=this.root.innerHTML),b},g.prototype.buildChunk=function(a){var b=this.actuals.length,c=[],e=[],f=[];return d(a,function(a){if(c.push(a.text),a.attrs){if(!/^noscript$/i.test(a.tagName)){var d=b++;e.push(a.text.replace(/(\/?>)/," "+k+"id="+d+" $1")),"ps-script"!==a.attrs.id&&"ps-style"!==a.attrs.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" "+k+"proxyof="+d+(a.unary?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")}),{tokens:a,raw:c.join(""),actual:e.join(""),proxy:f.join("")}},g.prototype.walkChunk=function(){for(var c,d=[this.proxyRoot];b(c=d.shift());){var e=1===c.nodeType,f=e&&a(c,"proxyof");if(!f){e&&(this.actuals[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");g&&this.actuals[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}},g.prototype.handleScriptToken=function(a){var b=this.parser.clear();b&&this.writeQueue.unshift(b),a.src=a.attrs.src||a.attrs.SRC,a.src&&this.scriptStack.length?this.deferredRemote=a:this.onScriptStart(a);var c=this;this.writeScriptToken(a,function(){c.onScriptDone(a)})},g.prototype.handleStyleToken=function(a){var b=this.parser.clear();b&&this.writeQueue.unshift(b),a.type=a.attrs.type||a.attrs.TYPE||"text/css",this.writeStyleToken(a),b&&this.write()},g.prototype.writeStyleToken=function(a){var b=this.buildStyle(a);this.insertStyle(b),a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.doc.createTextNode(a.content)))},g.prototype.buildStyle=function(a){var b=this.doc.createElement(a.tagName);return b.setAttribute("type",a.type),e(a.attrs,function(a,c){b.setAttribute(a,c)}),b},g.prototype.insertStyle=function(a){this.writeImpl('<span id="ps-style"/>');var b=this.doc.getElementById("ps-style");b.parentNode.replaceChild(a,b)},g.prototype.onScriptStart=function(a){a.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(a)},g.prototype.onScriptDone=function(a){return a!==this.scriptStack[0]?void this.options.error({message:"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,a.outerWrites),void(!this.scriptStack.length&&this.deferredRemote&&(this.onScriptStart(this.deferredRemote),this.deferredRemote=null)))},g.prototype.writeScriptToken=function(a,b){var c=this.buildScript(a),d=this.shouldRelease(c),e=this.options.afterAsync;a.src&&(c.src=a.src,this.scriptLoadHandler(c,d?e:function(){b(),e()}));try{this.insertScript(c),a.src&&!d||b()}catch(f){this.options.error(f),b()}},g.prototype.buildScript=function(a){var b=this.doc.createElement(a.tagName);return e(a.attrs,function(a,c){b.setAttribute(a,c)}),a.content&&(b.text=a.content),b},g.prototype.insertScript=function(a){this.writeImpl('<span id="ps-script"/>');var b=this.doc.getElementById("ps-script");b.parentNode.replaceChild(a,b)},g.prototype.scriptLoadHandler=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}function d(){c(),b()}function e(a){c(),g(a),b()}var g=this.options.error;f(a,{onload:function(){d()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&d()},onerror:function(){e({message:"remote script failed "+a.src})}})},g.prototype.shouldRelease=function(a){var b=/^script$/i.test(a.nodeName);return!b||!!(this.options.releaseAsync&&a.src&&a.hasAttribute("async"))},g}();l.postscribe=function(){function b(){var a=j.shift(),b;a&&(b=p(a),b.afterDequeue(),a.stream=d.apply(null,a),b.afterStreamStart())}function d(c,d,g){function j(a){a=g.beforeWrite(a),m.write(a),g.afterWrite(a)}m=new q(c,g),m.id=i++,m.name=g.name||m.id,e.streams[m.name]=m;var k=c.ownerDocument,l={close:k.close,open:k.open,write:k.write,writeln:k.writeln};f(k,{close:a,open:a,write:function(){return j(h(arguments).join(""))},writeln:function(){return j(h(arguments).join("")+"\n")}});var n=m.win.onerror||a;return m.win.onerror=function(a,b,c){g.error({msg:a+" - "+b+":"+c}),n.apply(m.win,arguments)},m.write(d,function o(){f(k,l),m.win.onerror=n,g.done(),m=null,b()}),m}function e(d,e,f){c(f)&&(f={done:f}),f=g(f,k),d=/^#/.test(d)?l.document.getElementById(d.substr(1)):d.jquery?d[0]:d;var h=[d,e,f];return d.postscribe={cancel:function(){h.stream?h.stream.abort():h[1]=a}},f.beforeEnqueue(h),j.push(h),m||b(),d.postscribe}var i=0,j=[],m=null;return f(e,{streams:{},queue:j,WriteStream:q})}()}}(),this.postscribe}.call(b,c,b,a),!(void 0!==d&&(a.exports=d))}).call(window),a.exports=postscribe},"./public/javascripts/module/ads/standalone/ad.module.js":function(a,b){!function(a){"use strict";var b=a.kinja.meta,c=b.blog,d=b.blogSales,e=b.pageType,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w=!1,x=0,y=function(b){var c=b||a,d=c.cxApi?c.cxApi.getChosenVariation(c.gaExperimentId):null;return null!==d&&d>=0&&26>d?String.fromCharCode(d+65):null},z=function(b){var c=b||a;return void 0!==c.gaExperimentId?c.gaExperimentId:null},A=null!==y()&&null!==z()?z()+"_"+y():null,B=function(a){var b,c;for(b=a.length-1;b>=0;b--)if(c=a[b].split("="),"adzone"===c[0])return c[1];return!1}(a.location.search.substr(1).split("&")),C=function(a,b){var c=b.tags,d=/why your team sucks|wyts/.test(c),e=/nsfw|gamergate/.test(c),f=!d&&e?"collapse":null,g=b.post,h=g?g.adZone:null;return a||f||h}(B,b),D=C&&"collapse"===C?"collapse":"frontpage"===e?"front":e,E;m={isOn:function(a){return"on"===n()[a]},value:function(a){return n()[a]}},n=function(){if(!l){var b=a.document.body.classList||[];b=Array.prototype.slice.call(b,0),l={},b.map(function(a){var b=a.match(/^f_([a-zA-Z0-9_\-]*)_([a-zA-Z0-9\-]*)$/);b&&b.length&&(l[b[1]]=b[2])})}return l},a.kinjaads=a.kinjaads||{},a.kinjaads.queue=a.kinjaads.queue||[],a.kinjaads.cmd=a.kinjaads.cmd||[],a.kinjaads.queue.push=function(b){Array.prototype.push.apply(this,arguments);var c=b.zoneType,d=b.onRenderEnded,e=f.slotTypes[c],g="zonerender."+c,h,i;return e?(i=a.document.querySelector(e.selector),void(null===i||i.classList.contains("rendered")?d():(h=function(){t(i,g,h),d()},s(i,g,h)))):void a.console.error(c+" is not a valid zone type")},a.kinjaads.cmd.push=function(a){w?a.call(this):Array.prototype.push.call(this,a)},E=function(){for(;a.kinjaads.cmd.length;){var b=a.kinjaads.cmd.shift();b.call()}w=!0},a.markUserTime("frontend.ad_module.standalone.start"),v=a.document.body.className.match(/f_superhero_resize_([0-9]{1,3})/),x=0,v&&v.length>1&&(x=a.parseInt(v[1],10)),f={slotTypes:{SPLASHYTOP:{selector:'.js_ad-container[data-zone-type="SPLASHYTOP"]',containerSelector:"#splashy-ad-container-top",zoneType:"SPLASHYTOP",gptSizes:[[1280,720],[970,415]],maxWidth:"100%",maxHeight:720,viewportVOffset:x?x:175,fallbackSize:"970x415",renderEnded:function(b,c){var d=f.getConfig(b),e=d.containerSelector?a.document.querySelector(d.containerSelector):void 0,g=c.size[0],h=c.size[1],i=g+"x"+h,j,k,l;i===d.fallbackSize?(l=h+"px",b.classList.add("centered"),b.parentNode.classList.add("static-fallback"),b.style.width=g+"px",b.style.height=h+"px"):(b.style.width=d.maxWidth,l=Math.min(d.maxHeight,a.innerHeight-d.viewportVOffset)+"px",b.parentNode.style.height=l,b.parentNode.style.overflow="hidden"),j=b.getElementsByTagName("div"),j&&j.length>0&&(j[0].style.height=l),k=b.getElementsByTagName("iframe"),k&&k.length>0&&(k[0].style.width="100%",k[0].style.height=l),e&&(e.style.display="block",m.isOn("networknav")||e.classList.add("bottom-border")),b.classList.remove("hide"),b.style.display="block",a.markUserTime("frontend.ad_module.slot_"+d.zoneType+".rendered")}},SPLASHYBOTTOM:{selector:'.js_ad-container[data-zone-type="SPLASHYBOTTOM"]',containerSelector:"#splashy-ad-container-bottom",zoneType:"SPLASHYBOTTOM",gptSizes:[[1280,721]],isResponsive:!0,shouldSlideDown:!1,viewportVOffset:175,maxHeight:720,maxWidth:"100%",renderEnded:function(b){var c=f.getConfig(b),d=c.containerSelector?a.document.querySelector(c.containerSelector):void 0,e,g,h=Math.min(c.maxHeight,a.innerHeight-c.viewportVOffset)+"px";b.style.width=c.maxWidth,b.style.height=h,b.classList.remove("hide"),b.style.display="block",e=b.getElementsByTagName("div"),e&&e.length>0&&(e[0].style.height=h),g=b.getElementsByTagName("iframe"),g&&g.length>0&&(g[0].style.width="100%",g[0].style.height=h),d&&(d.style.display="block",d.style.width=c.maxWidth,d.style.height=h),a.markUserTime("frontend.ad_module.slot_"+c.zoneType+".rendered")}},WELCOME:{selector:'.js_ad-container[data-zone-type="WELCOME"]',gptSizes:[[300,251]],zoneType:"WELCOME",initialMessage:"seconds to",continueMessage:"continue to",showNavBar:"false",countdownTime:5,targetingPairs:{pos:"welcome",exp_variation:A},initCountdown:function(b,c,d,e){function g(){d.parentNode.removeChild(d),a.markUserTime("frontend.ad_module.slot_"+f.getConfig(d)+".closed")}function h(){10>i?c.innerHTML="0"+i:c.innerHTML=i,0===i&&(a.clearInterval(k),c.innerHTML='<svg class="svg-chevron"><use xlink:href="#iconset-chevron-right"></use></svg>',c.className="welcome-countdown active sitecolored sitecolored-fill",b.innerHTML=j,e.addEventListener("click",g)),i--}var i=f.slotTypes.WELCOME.countdownTime,j=f.slotTypes.WELCOME.continueMessage,k;h(),k=a.setInterval(h.bind(this),1e3)},createWelcome:function(b){var c,d,e=f.getConfig(b),g=a.kinja.meta.blog.blogGroup,h=document.createElement("p"),i=document.createDocumentFragment(),j=document.createElement("div"),k=document.createElement("div"),l=document.createElement("div"),m=document.createElement("div"),n=document.createElement("div");b.className=b.className+" primary",c=b.getElementsByTagName("div")[0],d=b.getElementsByTagName("iframe")[0],d&&(h.innerHTML="ADVERTISEMENT",c.className="ad-iframe-container",c.insertBefore(h,d)),k.className="welcome-branding",l.className="welcome-continue-text",l.innerHTML=e.initialMessage,m.className="welcome-site-logo",m.innerHTML='<svg class="gmg-logo gmg-logo--'+g+'" width="346" height="50" viewBox="0 0 346 50"><use xlink:href="#'+g+'-svgid"></use></svg>',n.className="welcome-countdown",j.className="welcome-wrapper",j.appendChild(n),k.appendChild(l),k.appendChild(m),j.appendChild(k),i.appendChild(j),b.insertBefore(i,c),this.initCountdown(l,n,b,j),a.markUserTime("frontend.ad_module.slot_"+e.zoneType+".rendered")},renderEnded:function(b){b.classList.remove("hide"),b.style.display="block",this.createWelcome(b),a.markUserTime("frontend.ad_module.welcome.renderended")}}},getConfig:function(a){return f.slotTypes[a.getAttribute("data-zone-type").toUpperCase()]}},g={isInitialized:!1,isLoaded:!1,isReady:!1,loadInterval:0,readyInterval:0,_readySlots:[],getStatus:function(){var b=a.googletag,c,d,e;return c=function(){return b&&b.hasOwnProperty("pubads")},d=function(){return a.amznads&&a.amznads.hasOwnProperty("getAds")},e=function(){return c()&&b.pubadsReady},{exists:c(),amazon:d(),ready:e()}},initialize:function(){if(!g.isInitialized){var d=a.googletag;d.cmd.push(function(){var e=d.pubads();m.isOn("disable_gpt_collapse")||e.collapseEmptyDivs(),e.enableAsyncRendering(),e.setTargeting("tags",(b.tags||"").split(",")),e.setTargeting("blogName",c.name),e.setTargeting("ksg",a.Krux.segments),e.setTargeting("kuid",a.Krux.user),m.isOn("amazon_matchbuy")&&(a.amznads.setTargetingForGPTAsync("amznslots"),a.markUserTime("frontend.ad_module.amazon.set_targeting")),e.disableInitialLoad(),d.enableServices(),E()}),g.isInitialized=!0,a.markUserTime("frontend.ad_module.gpt.initialized")}},createSlot:function(b,c){var e=d.adNetworkId||4246,h="/"+[e,d.adSiteName,D].join("/"),i=b.id,j=f.getConfig(b),k=a.googletag,l;k.cmd.push(function(){function d(a){for(m in a)a.hasOwnProperty(m)&&n.setTargeting(m,a[m])}var e=o(b),f,m,n=k.defineSlot(h,j.gptSizes,i);d(e),c&&d(c),n.addService(k.pubads()),f=n.renderEnded,n.renderEnded=function(c){g.isAdZoneEmpty(b,c)?j&&j.containerSelector&&(l=a.document.querySelector(j.containerSelector),l&&(l.style.display="none",l.style.height=0,l.style.width=0,l.style.overflow="hidden"),a.markUserTime("frontend.ad_module.gpt_"+j.zoneType+".empty")):j.renderEnded(b,c),b.className=b.className+" rendered",u(b,"zonerender."+j.zoneType),f(),a.markUserTime("frontend.ad_module.gpt_"+j.zoneType+".rendered")},k.display(i),a.markUserTime("frontend.ad_module.gpt_"+j.zoneType+".display"),g.refreshSlots([n]),a.markUserTime("frontend.ad_module.gpt_"+j.zoneType+".refresh")}),b.className=b.className+" initialized"},refreshSlots:function(b){b.length&&(g.isReady?a.googletag.cmd.push(function(){a.googletag.pubads().refresh(g._readySlots,{changeCorrelator:!1})}):g._readySlots=g._readySlots.concat(b))},isAdZoneEmpty:function(a,b){if(b.isEmpty)return!0;var c=a.getElementsByTagName("iframe"),d,e,f,g,h=/817-(grey|grey_|blank|blank_)\.gif/,i=/ads\/collapser.gif/;return c&&c.length>0?(d=c[0],e=d.contentDocument||d.contentWindow.document,f=e.getElementsByTagName("body"),f&&f.length>0?(f=f[0],f.childElementCount>0?(g=f.querySelectorAll("[src]"),!!(g&&g.length>0&&(g=Array.prototype.slice.call(g),g=g.filter(function(a){return!(!a||!a.src||!a.src.match(h)&&!a.src.match(i))}),g.length>0))):!0):!0):!0},onLoad:function(){function b(){-1!==["interactive","complete","loaded"].indexOf(a.document.readyState.toLowerCase())?i():a.document.addEventListener("DOMContentLoaded",i),g.readyInterval=a.setInterval(function(){g.getStatus().ready&&g.onReady()},500)}if(a.markUserTime("frontend.ad_module.onLoad.called"),g.isLoaded=!0,a.clearInterval(g.loadInterval),a.googletag.cmd=a.googletag.cmd||[],m.isOn("amazon_matchbuy"))try{a.postscribe("#matchbuy-placeholder",function(){try{a.amznads.getAds("3076"),a.markUserTime("frontend.ad_module.amazon.config")}catch(b){a.markUserTime("frontend.ad_module.amazon.config_error"),a.console.log(b.message)}},{done:b})}catch(c){a.console.log(c.message)}else b()},onReady:function(){g.isReady=!0,a.clearInterval(g.readyInterval),g._readySlots&&g.refreshSlots(g._readySlots)}},r=function(a){return"on"+(a.charAt(0).toUpperCase()+a.slice(1))},s=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a[r(b)]=c},u=function(b,c){var d=a.document,e={};e=d.createEvent("HTMLEvents"),e.initEvent(c,!0,!0),e.eventName=c,b.dispatchEvent?b.dispatchEvent(e):b[c]?b[c]():b[r(c)]&&b[r(c)]()},t=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a[r(b)]=null},o=function(){var c=b.post,d=a.kinja.postContentRatings||[],e,f,g,h,i;e={brandMap:{"t.co":"twitter"},scanForSocialReferrers:function(){var b=(a.document.referrer||"").match(/\b(?:facebook|instagram|pinterest|reddit|twitter|tumblr|t\.co)\b/i);return b&&(b=b[0].toLowerCase()),e.brandMap[b]||b}},f={keywordsFromPage:function(c){var d,e,f,g={};return d=function(a,b){g.hasOwnProperty(a)?g[a].push(b):g[a]=[b]},e=function(){d("page",b.pageType),d("pd",p),b.post&&"permalink"===b.pageType&&(d("post_type",b.post.isFeatured?"featured":"default"),!b.post.isFeatured||!m.isOn("featured_post")||m.isOn("disable_featured_video_post")&&b.post.hasFeaturedVideo||d("featured_post_on","1")),"default"!==c.slot&&d("slot",c.slot)},f=function(){var b=a.crtg_content?a.crtg_content.split(";"):[];b.forEach(function(a){var b=a.split("=");2===b.length&&d(b[0],b[1])})},e(),f(),g}},g={postId:c?c.id:null,forcedAdZone:C||!1,socialReferrer:e.scanForSocialReferrers()},d.reduce(function(a,b){return a[b.scale]=b.level,a},g),h=f.keywordsFromPage({slot:"default"});for(i in h)h.hasOwnProperty(i)&&(g[i]=h[i]);return g},j=function(){var b=(a.document.referrer||"").match(/\b(?:facebook|instagram|pinterest|reddit|twitter|tumblr|t\.co)\b/i);return!!b},q=function(){var b=(a.document.cookie+"").split("; ")||[],c=-1;return b.forEach(function(b){var d,e,f;d=b.split("="),e=a.decodeURIComponent(d.shift()),f=a.decodeURIComponent(d.shift()),"pageDepth"===e&&(c=a.parseInt(f,10))}),-1===c?c=1:5>c&&(c+=1),a.document.cookie="pageDepth="+c+"; expires=1; path=/",a.parseInt(c,10)},k=function(){return!(!m.isOn("forcemobileviewport")&&a.matchMedia("(min-width:639px)").matches)},i=function(){var c,e,h,i=d&&d.adsEnabled,l=i?d.adSlotsDisabled:[],n=b.post&&"collapse"===b.post.adZone,o;a.markUserTime("frontend.ad_module.onDomLoaded.called"),!i||n&&m.isOn("superhero_collapse")||-1!==l.indexOf("blarf")||(p=q(),g.initialize(),c=a.document.querySelector(f.slotTypes.SPLASHYTOP.selector),c&&g.createSlot(c),e=a.document.querySelector(f.slotTypes.SPLASHYBOTTOM.selector),e&&g.createSlot(e),m.isOn("welcome_ad")&&k()&&(a.markUserTime("frontend.ad_module.welcome.couldrender"),j()||n||(h=a.document.querySelector(f.slotTypes.WELCOME.selector),o=f.slotTypes.WELCOME.targetingPairs,h&&(g.createSlot(h,o),h.className=h.className+" prerender",a.markUserTime("frontend.ad_module.welcome.prerender")))))},h=function(){var a=g.getStatus();return a.exists&&!m.isOn("amazon_matchbuy")||a.amazon?(g.onLoad(),!0):!1},h()||(g.loadInterval=a.setInterval(h,100))}(window)},0:function(a,b,c){c("./public/javascripts/lib/amd-wrapped/postscribe.js"),a.exports=c("./public/javascripts/module/ads/standalone/ad.module.js")}});
//# sourceMappingURL=AdModule.a948583f133f0b16b8f3.en-US.js.map