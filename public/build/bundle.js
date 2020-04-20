!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,a={f:c&&!u.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:u},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,s=function(t){return f.call(t).slice(8,-1)},p="".split,g=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?p.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},y=function(t){return g(h(t))},d=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,e){if(!d(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!d(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!d(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!d(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,S=function(t,e){return m.call(t,e)},b=r.document,E=d(b)&&d(b.createElement),x=!i&&!o((function(){return 7!=Object.defineProperty((t="div",E?b.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),w=Object.getOwnPropertyDescriptor,T={f:i?w:function(t,e){if(t=y(t),e=v(e,!0),x)try{return w(t,e)}catch(t){}if(S(t,e))return l(!a.f.call(t,e),t[e])}},O=function(t){if(!d(t))throw TypeError(String(t)+" is not an object");return t},L=Object.defineProperty,A={f:i?L:function(t,e,n){if(O(t),e=v(e,!0),O(n),x)try{return L(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},R=i?function(t,e,n){return A.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},P=function(t,e){try{R(r,t,e)}catch(n){r[t]=e}return e},_=r["__core-js_shared__"]||P("__core-js_shared__",{}),C=Function.toString;"function"!=typeof _.inspectSource&&(_.inspectSource=function(t){return C.call(t)});var I,j,M,k,N=_.inspectSource,D=r.WeakMap,F="function"==typeof D&&/native code/.test(N(D)),U=e((function(t){(t.exports=function(t,e){return _[t]||(_[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),G=0,H=Math.random(),V=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++G+H).toString(36)},B=U("keys"),q={},$=r.WeakMap;if(F){var K=new $,W=K.get,Y=K.has,z=K.set;I=function(t,e){return z.call(K,t,e),e},j=function(t){return W.call(K,t)||{}},M=function(t){return Y.call(K,t)}}else{var X=B[k="state"]||(B[k]=V(k));q[X]=!0,I=function(t,e){return R(t,X,e),e},j=function(t){return S(t,X)?t[X]:{}},M=function(t){return S(t,X)}}var J,Q,Z={set:I,get:j,has:M,enforce:function(t){return M(t)?j(t):I(t,{})},getterFor:function(t){return function(e){var n;if(!d(e)||(n=j(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},tt=e((function(t){var e=Z.get,n=Z.enforce,o=String(String).split("String");(t.exports=function(t,e,i,u){var c=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof e||S(i,"name")||R(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(c?!l&&t[e]&&(a=!0):delete t[e],a?t[e]=i:R(t,e,i)):a?t[e]=i:P(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||N(this)}))})),et=r,nt=function(t){return"function"==typeof t?t:void 0},rt=function(t,e){return arguments.length<2?nt(et[t])||nt(r[t]):et[t]&&et[t][e]||r[t]&&r[t][e]},ot=Math.ceil,it=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?it:ot)(t)},ct=Math.min,at=function(t){return t>0?ct(ut(t),9007199254740991):0},lt=Math.max,ft=Math.min,st=function(t){return function(e,n,r){var o,i=y(e),u=at(i.length),c=function(t,e){var n=ut(t);return n<0?lt(n+e,0):ft(n,e)}(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},pt={includes:st(!0),indexOf:st(!1)}.indexOf,gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),ht={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=y(t),o=0,i=[];for(n in r)!S(q,n)&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~pt(i,n)||i.push(n));return i}(t,gt)}},yt={f:Object.getOwnPropertySymbols},dt=rt("Reflect","ownKeys")||function(t){var e=ht.f(O(t)),n=yt.f;return n?e.concat(n(t)):e},vt=function(t,e){for(var n=dt(e),r=A.f,o=T.f,i=0;i<n.length;i++){var u=n[i];S(t,u)||r(t,u,o(e,u))}},mt=/#|\.prototype\./,St=function(t,e){var n=Et[bt(t)];return n==wt||n!=xt&&("function"==typeof e?o(e):!!e)},bt=St.normalize=function(t){return String(t).replace(mt,".").toLowerCase()},Et=St.data={},xt=St.NATIVE="N",wt=St.POLYFILL="P",Tt=St,Ot=T.f,Lt=function(t,e){var n,o,i,u,c,a=t.target,l=t.global,f=t.stat;if(n=l?r:f?r[a]||P(a,{}):(r[a]||{}).prototype)for(o in e){if(u=e[o],i=t.noTargetGet?(c=Ot(n,o))&&c.value:n[o],!Tt(l?o:a+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;vt(u,i)}(t.sham||i&&i.sham)&&R(u,"sham",!0),tt(n,o,u,t)}},At=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Rt=Array.isArray||function(t){return"Array"==s(t)},Pt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),_t=Pt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ct=U("wks"),It=r.Symbol,jt=_t?It:It&&It.withoutSetter||V,Mt=function(t){return S(Ct,t)||(Pt&&S(It,t)?Ct[t]=It[t]:Ct[t]=jt("Symbol."+t)),Ct[t]},kt=Mt("species"),Nt=function(t,e){var n;return Rt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Rt(n.prototype)?d(n)&&null===(n=n[kt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Dt=[].push,Ft=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=5==t||i;return function(c,a,l,f){for(var s,p,y=Object(h(c)),d=g(y),v=function(t,e,n){if(At(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}(a,l,3),m=at(d.length),S=0,b=f||Nt,E=e?b(c,m):n?b(c,0):void 0;m>S;S++)if((u||S in d)&&(p=v(s=d[S],S,y),t))if(e)E[S]=p;else if(p)switch(t){case 3:return!0;case 5:return s;case 6:return S;case 2:Dt.call(E,s)}else if(o)return!1;return i?-1:r||o?o:E}},Ut={forEach:Ft(0),map:Ft(1),filter:Ft(2),some:Ft(3),every:Ft(4),find:Ft(5),findIndex:Ft(6)},Gt=rt("navigator","userAgent")||"",Ht=r.process,Vt=Ht&&Ht.versions,Bt=Vt&&Vt.v8;Bt?Q=(J=Bt.split("."))[0]+J[1]:Gt&&(!(J=Gt.match(/Edge\/(\d+)/))||J[1]>=74)&&(J=Gt.match(/Chrome\/(\d+)/))&&(Q=J[1]);var qt=Q&&+Q,$t=Mt("species"),Kt=function(t){return qt>=51||!o((function(){var e=[];return(e.constructor={})[$t]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Wt=Object.defineProperty,Yt={},zt=function(t){throw t},Xt=function(t,e){if(S(Yt,t))return Yt[t];e||(e={});var n=[][t],r=!!S(e,"ACCESSORS")&&e.ACCESSORS,u=S(e,0)?e[0]:zt,c=S(e,1)?e[1]:void 0;return Yt[t]=!!n&&!o((function(){if(r&&!i)return!0;var t={length:-1};r?Wt(t,1,{enumerable:!0,get:zt}):t[1]=1,n.call(t,u,c)}))},Jt=Ut.filter,Qt=Kt("filter"),Zt=Xt("filter");Lt({target:"Array",proto:!0,forced:!Qt||!Zt},{filter:function(t){return Jt(this,t,arguments.length>1?arguments[1]:void 0)}});var te,ee,ne=Ut.forEach,re=!!(ee=[]["forEach"])&&o((function(){ee.call(null,te||function(){throw 1},1)})),oe=Xt("forEach"),ie=re&&oe?[].forEach:function(t){return ne(this,t,arguments.length>1?arguments[1]:void 0)};Lt({target:"Array",proto:!0,forced:[].forEach!=ie},{forEach:ie});var ue=Ut.map,ce=Kt("map"),ae=Xt("map");Lt({target:"Array",proto:!0,forced:!ce||!ae},{map:function(t){return ue(this,t,arguments.length>1?arguments[1]:void 0)}});var le=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return O(n),function(t){if(!d(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),fe=Mt("match"),se=function(t){var e;return d(t)&&(void 0!==(e=t[fe])?!!e:"RegExp"==s(t))},pe=function(){var t=O(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function ge(t,e){return RegExp(t,e)}var he={UNSUPPORTED_Y:o((function(){var t=ge("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:o((function(){var t=ge("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ye=Mt("species"),de=A.f,ve=ht.f,me=Z.set,Se=Mt("match"),be=r.RegExp,Ee=be.prototype,xe=/a/g,we=/a/g,Te=new be(xe)!==xe,Oe=he.UNSUPPORTED_Y;if(i&&Tt("RegExp",!Te||Oe||o((function(){return we[Se]=!1,be(xe)!=xe||be(we)==we||"/a/i"!=be(xe,"i")})))){for(var Le=function(t,e){var n,r=this instanceof Le,o=se(t),i=void 0===e;if(!r&&o&&t.constructor===Le&&i)return t;Te?o&&!i&&(t=t.source):t instanceof Le&&(i&&(e=pe.call(t)),t=t.source),Oe&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var u,c,a,l,f,s=(u=Te?new be(t,e):be(t,e),c=r?this:Ee,a=Le,le&&"function"==typeof(l=c.constructor)&&l!==a&&d(f=l.prototype)&&f!==a.prototype&&le(u,f),u);return Oe&&n&&me(s,{sticky:n}),s},Ae=function(t){t in Le||de(Le,t,{configurable:!0,get:function(){return be[t]},set:function(e){be[t]=e}})},Re=ve(be),Pe=0;Re.length>Pe;)Ae(Re[Pe++]);Ee.constructor=Le,Le.prototype=Ee,tt(r,"RegExp",Le)}!function(t){var e=rt(t),n=A.f;i&&e&&!e[ye]&&n(e,ye,{configurable:!0,get:function(){return this}})}("RegExp");var _e=RegExp.prototype.exec,Ce=String.prototype.replace,Ie=_e,je=function(){var t=/a/,e=/b*/g;return _e.call(t,"a"),_e.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),Me=he.UNSUPPORTED_Y||he.BROKEN_CARET,ke=void 0!==/()??/.exec("")[1];(je||ke||Me)&&(Ie=function(t){var e,n,r,o,i=this,u=Me&&i.sticky,c=pe.call(i),a=i.source,l=0,f=t;return u&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(a="(?: "+a+")",f=" "+f,l++),n=new RegExp("^(?:"+a+")",c)),ke&&(n=new RegExp("^"+a+"$(?!\\s)",c)),je&&(e=i.lastIndex),r=_e.call(u?n:i,f),u?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:je&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),ke&&r&&r.length>1&&Ce.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var Ne=Ie;Lt({target:"RegExp",proto:!0,forced:/./.exec!==Ne},{exec:Ne});var De=RegExp.prototype,Fe=De.toString,Ue=o((function(){return"/a/b"!=Fe.call({source:"a",flags:"b"})})),Ge="toString"!=Fe.name;(Ue||Ge)&&tt(RegExp.prototype,"toString",(function(){var t=O(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in De)?pe.call(t):n)}),{unsafe:!0});var He=Mt("species"),Ve=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Be="$0"==="a".replace(/./,"$0"),qe=Mt("replace"),$e=!!/./[qe]&&""===/./[qe]("a","$0"),Ke=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),We=Mt("species"),Ye=function(t){return function(e,n){var r,o,i=String(h(e)),u=ut(n),c=i.length;return u<0||u>=c?t?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):r:t?i.slice(u,u+2):o-56320+(r-55296<<10)+65536}},ze={codeAt:Ye(!1),charAt:Ye(!0)}.charAt,Xe=function(t,e,n){return e+(n?ze(t,e).length:1)},Je=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return Ne.call(t,e)},Qe=[].push,Ze=Math.min,tn=!o((function(){return!RegExp(4294967295,"y")}));!function(t,e,n,r){var i=Mt(t),u=!o((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),c=u&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[He]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!u||!c||"replace"===t&&(!Ve||!Be||$e)||"split"===t&&!Ke){var a=/./[i],l=n(i,""[t],(function(t,e,n,r,o){return e.exec===Ne?u&&!o?{done:!0,value:a.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Be,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:$e}),f=l[0],s=l[1];tt(String.prototype,t,f),tt(RegExp.prototype,i,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)})}r&&R(RegExp.prototype[i],"sham",!0)}("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(h(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!se(t))return e.call(r,t,o);for(var i,u,c,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=Ne.call(s,r))&&!((u=s.lastIndex)>f&&(a.push(r.slice(f,i.index)),i.length>1&&i.index<r.length&&Qe.apply(a,i.slice(1)),c=i[0].length,f=u,a.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!c&&s.test("")||a.push(""):a.push(r.slice(f)),a.length>o?a.slice(0,o):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=h(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var u=O(t),c=String(this),a=function(t,e){var n,r=O(t).constructor;return void 0===r||null==(n=O(r)[We])?e:At(n)}(u,RegExp),l=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(tn?"y":"g"),s=new a(tn?u:"^(?:"+u.source+")",f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===c.length)return null===Je(s,c)?[c]:[];for(var g=0,h=0,y=[];h<c.length;){s.lastIndex=tn?h:0;var d,v=Je(s,tn?c:c.slice(h));if(null===v||(d=Ze(at(s.lastIndex+(tn?0:h)),c.length))===g)h=Xe(c,h,l);else{if(y.push(c.slice(g,h)),y.length===p)return y;for(var m=1;m<=v.length-1;m++)if(y.push(v[m]),y.length===p)return y;h=g=d}}return y.push(c.slice(g)),y}]}),!tn);for(var en in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var nn=r[en],rn=nn&&nn.prototype;if(rn&&rn.forEach!==ie)try{R(rn,"forEach",ie)}catch(t){rn.forEach=ie}}var on=[].slice,un=function(t){return function(e,n){var r=arguments.length>2,o=r?on.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};function cn(t,e){var n=document.querySelectorAll(t);return[].filter.call(n,(function(t){return RegExp(e).test(t.textContent)}))}function an(){null!=cn("a",fn)&&cn("a",fn).map((function(t,e,n){var r=t.closest("div[title]"),o=t.innerHTML.split(fn)[2],i=function(t){return t.split(fn)[3]}(t.innerHTML),u=t.innerHTML.split(fn)[4];if(t.innerHTML=ln(t.innerHTML),null!=r){if(r.querySelector("a[onclick]").setAttribute("onclick",""),null!=u&&r.querySelector("a[href]").setAttribute("href",u),r.setAttribute("title",ln(r.getAttribute("title"))),null!=o){var c=r.getAttribute("style");r.setAttribute("style",c+"; background-color: "+o)}if(null!=i){var a=t.getAttribute("style");t.setAttribute("style",a+"; color: "+i+" !important")}r.setAttribute("display","block")}}))}function ln(t){return t.split(fn)[0]}Lt({global:!0,bind:!0,forced:/MSIE .\./.test(Gt)},{setTimeout:un(r.setTimeout),setInterval:un(r.setInterval)});var fn="|||";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.WaitForCalendarToLoad=function(){document.querySelectorAll(".ms-acal-item").forEach((function(t){t.style.display="none"})),LoadSodByKey("SP.UI.ApplicationPages.Calendar.js",(function(){setInterval(an,50)}))},window.ColorCalendar=an,_spBodyOnLoadFunctionNames.push("WaitForCalendarToLoad")}();
//# sourceMappingURL=bundle.js.map