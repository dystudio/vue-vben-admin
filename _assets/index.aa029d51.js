import{k as t,x as e,W as s,a,q as o,ay as n,v as r,i as l,o as i,j as c,R as p,X as f,az as u,f as d,aA as b,a3 as m,aB as g,a4 as h,y as x,m as y,z as v}from"./index.dc2474c5.js";import{R as O}from"./RightOutlined.69404973.js";var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};function C(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var j=function(a,o){var n=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),a.forEach((function(e){C(t,e,s[e])}))}return t}({},a,o.attrs);return t(s,e(n,{icon:w}),null)};j.displayName="InfoCircleOutlined",j.inheritAttrs=!1;var z=a({name:"BasicArrow",components:{RightOutlined:O},props:{expand:o.bool,top:o.bool,bottom:o.bool,inset:o.bool},setup(t){const{prefixCls:e}=n("basic-arrow");return{getClass:r((()=>{const{expand:s,top:a,bottom:o,inset:n}=t;return[e,{[`${e}--active`]:s,top:a,inset:n,bottom:o}]}))}}});const S=p("data-v-d16c6c14")(((e,s,a,o,n,r)=>{const p=l("RightOutlined");return i(),c("span",{class:e.getClass},[t(p)],2)}));z.render=S,z.__scopeId="data-v-d16c6c14";var _=a({name:"BasicHelp",components:{Tooltip:f},props:{maxWidth:o.string.def("600px"),showIndex:o.bool,color:o.string.def("#ffffff"),fontSize:o.string.def("14px"),placement:o.string.def("right"),absolute:o.bool,text:{type:[Array,String]},position:{type:[Object],default:()=>({position:"absolute",left:0,bottom:0})}},setup(t,{slots:e}){const{prefixCls:s}=n("basic-help"),a=r((()=>({maxWidth:t.maxWidth}))),o=r((()=>({color:t.color,fontSize:t.fontSize}))),l=r((()=>t.absolute?t.position:{})),i=()=>{const e=t.text;return m(e)?u("p",e):g(e)?e.map(((e,s)=>u("p",{key:e},[t.showIndex?`${s+1}. `:"",e]))):null};return()=>u(f,{title:u("div",{style:d(o)},[i()]),overlayClassName:`${s}__wrap`,autoAdjustOverflow:!0,overlayStyle:d(a),placement:t.placement,getPopupContainer:()=>b()},{default:()=>u("span",{class:s,style:d(l)},h(e)||u(j))})}}),B=a({name:"BasicTitle",components:{BasicHelp:_},props:{helpMessage:{type:[String,Array],default:""},span:o.bool},setup(){const{prefixCls:t}=n("basic-title");return{prefixCls:t}}});const A=p("data-v-01b1d106")(((t,e,s,a,o,n)=>{const r=l("BasicHelp");return i(),c("span",{class:[t.prefixCls,{"show-span":t.span&&t.$slots.default}]},[x(t.$slots,"default"),t.helpMessage?(i(),c(r,{key:0,class:`${t.prefixCls}__help`,text:t.helpMessage},null,8,["class","text"])):y("",!0)],2)}));B.render=A,B.__scopeId="data-v-01b1d106",v(z,_,B);export{B as a,_ as b,z as s};