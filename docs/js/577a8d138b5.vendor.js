"use strict";(self.webpackChunktodo_pinia_ts=self.webpackChunktodo_pinia_ts||[]).push([[577],{3577:(e,t,n)=>{function r(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.r(t),n.d(t,{EMPTY_ARR:()=>D,EMPTY_OBJ:()=>U,NO:()=>B,NOOP:()=>L,PatchFlagNames:()=>o,camelize:()=>fe,capitalize:()=>he,def:()=>ke,escapeHtml:()=>F,escapeHtmlComment:()=>P,extend:()=>G,genPropsAccessExp:()=>Ae,generateCodeFrame:()=>s,getGlobalThis:()=>we,hasChanged:()=>ye,hasOwn:()=>H,hyphenate:()=>ge,includeBooleanAttr:()=>d,invokeArrayFns:()=>be,isArray:()=>K,isBooleanAttr:()=>p,isBuiltInDirective:()=>ce,isDate:()=>X,isFunction:()=>Z,isGloballyWhitelisted:()=>a,isHTMLTag:()=>O,isIntegerKey:()=>se,isKnownHtmlAttr:()=>y,isKnownSvgAttr:()=>b,isMap:()=>W,isModelListener:()=>q,isNoUnitNumericStyleProp:()=>m,isObject:()=>te,isOn:()=>$,isPlainObject:()=>ae,isPromise:()=>ne,isReservedProp:()=>le,isSSRSafeAttrName:()=>g,isSVGTag:()=>M,isSet:()=>J,isSpecialBooleanAttr:()=>c,isString:()=>Q,isSymbol:()=>ee,isVoidTag:()=>N,looseEqual:()=>_,looseIndexOf:()=>j,makeMap:()=>r,normalizeClass:()=>A,normalizeProps:()=>T,normalizeStyle:()=>k,objectToString:()=>re,parseStringStyle:()=>w,propsToAttrMap:()=>h,remove:()=>V,slotFlagsText:()=>i,stringifyStyle:()=>S,toDisplayString:()=>z,toHandlerKey:()=>me,toNumber:()=>xe,toRawType:()=>ie,toTypeString:()=>oe});const o={1:"TEXT",2:"CLASS",4:"STYLE",8:"PROPS",16:"FULL_PROPS",32:"HYDRATE_EVENTS",64:"STABLE_FRAGMENT",128:"KEYED_FRAGMENT",256:"UNKEYED_FRAGMENT",512:"NEED_PATCH",1024:"DYNAMIC_SLOTS",2048:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},i={1:"STABLE",2:"DYNAMIC",3:"FORWARDED"},a=r("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");function s(e,t=0,n=e.length){let r=e.split(/(\r?\n)/);const o=r.filter(((e,t)=>t%2==1));r=r.filter(((e,t)=>t%2==0));let i=0;const a=[];for(let e=0;e<r.length;e++)if(i+=r[e].length+(o[e]&&o[e].length||0),i>=t){for(let s=e-2;s<=e+2||n>i;s++){if(s<0||s>=r.length)continue;const l=s+1;a.push(`${l}${" ".repeat(Math.max(3-String(l).length,0))}|  ${r[s]}`);const c=r[s].length,p=o[s]&&o[s].length||0;if(s===e){const e=t-(i-(c+p)),r=Math.max(1,n>i?c-e:n-t);a.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(s>e){if(n>i){const e=Math.max(Math.min(n-i,c),1);a.push("   |  "+"^".repeat(e))}i+=c+p}}break}return a.join("\n")}const l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c=r(l),p=r(l+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function d(e){return!!e||""===e}const f=/[>/="'\u0009\u000a\u000c\u0020]/,u={};function g(e){if(u.hasOwnProperty(e))return u[e];const t=f.test(e);return t&&console.error(`unsafe attribute name: ${e}`),u[e]=!t}const h={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},m=r("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width"),y=r("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),b=r("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function k(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Q(r)?w(r):k(r);if(o)for(const e in o)t[e]=o[e]}return t}return Q(e)||te(e)?e:void 0}const x=/;(?![^(]*\))/g,v=/:(.+)/;function w(e){const t={};return e.split(x).forEach((e=>{if(e){const n=e.split(v);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function S(e){let t="";if(!e||Q(e))return t;for(const n in e){const r=e[n],o=n.startsWith("--")?n:ge(n);(Q(r)||"number"==typeof r&&m(o))&&(t+=`${o}:${r};`)}return t}function A(e){let t="";if(Q(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=A(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function T(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Q(t)&&(e.class=A(t)),n&&(e.style=k(n)),e}const O=r("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),M=r("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),N=r("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"),C=/["'&<>]/;function F(e){const t=""+e,n=C.exec(t);if(!n)return t;let r,o,i="",a=0;for(o=n.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}a!==o&&(i+=t.slice(a,o)),a=o+1,i+=r}return a!==o?i+t.slice(a,o):i}const E=/^-?>|<!--|-->|--!>|<!-$/g;function P(e){return e.replace(E,"")}function _(e,t){if(e===t)return!0;let n=X(e),r=X(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=ee(e),r=ee(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=_(e[r],t[r]);return n}(e,t);if(n=te(e),r=te(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!_(e[n],t[n]))return!1}}return String(e)===String(t)}function j(e,t){return e.findIndex((e=>_(e,t)))}const z=e=>Q(e)?e:null==e?"":K(e)||te(e)&&(e.toString===re||!Z(e.toString))?JSON.stringify(e,R,2):String(e),R=(e,t)=>t&&t.__v_isRef?R(e,t.value):W(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:J(t)?{[`Set(${t.size})`]:[...t.values()]}:!te(t)||K(t)||ae(t)?t:String(t),U={},D=[],L=()=>{},B=()=>!1,I=/^on[^a-z]/,$=e=>I.test(e),q=e=>e.startsWith("onUpdate:"),G=Object.assign,V=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Y=Object.prototype.hasOwnProperty,H=(e,t)=>Y.call(e,t),K=Array.isArray,W=e=>"[object Map]"===oe(e),J=e=>"[object Set]"===oe(e),X=e=>"[object Date]"===oe(e),Z=e=>"function"==typeof e,Q=e=>"string"==typeof e,ee=e=>"symbol"==typeof e,te=e=>null!==e&&"object"==typeof e,ne=e=>te(e)&&Z(e.then)&&Z(e.catch),re=Object.prototype.toString,oe=e=>re.call(e),ie=e=>oe(e).slice(8,-1),ae=e=>"[object Object]"===oe(e),se=e=>Q(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,le=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ce=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),pe=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},de=/-(\w)/g,fe=pe((e=>e.replace(de,((e,t)=>t?t.toUpperCase():"")))),ue=/\B([A-Z])/g,ge=pe((e=>e.replace(ue,"-$1").toLowerCase())),he=pe((e=>e.charAt(0).toUpperCase()+e.slice(1))),me=pe((e=>e?`on${he(e)}`:"")),ye=(e,t)=>!Object.is(e,t),be=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ke=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ve;const we=()=>ve||(ve="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:{}),Se=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function Ae(e){return Se.test(e)?`__props.${e}`:`__props[${JSON.stringify(e)}]`}}}]);