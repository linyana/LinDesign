import{H as i}from"./index.377ff17b.js";import{u as c,j as n,a as l,O as u,r as s,b as m,F as d}from"./index.acd5236e.js";let r=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,a)=>(a&=63,a<36?e+=a.toString(36):a<62?e+=(a-26).toString(36).toUpperCase():a>62?e+="-":e+="_",e),"");const p=[{name:"\u5E03\u5C40",smallName:"Layout",to:"layout"},{name:"\u5185\u5BB9",smallName:"Content",to:"content"},{name:"\u6309\u94AE",smallName:"Button",to:"button"},{name:"\u8F93\u5165\u6846",smallName:"Input",to:"input"},{name:"\u5361\u7247",smallName:"Card",to:"card"},{name:"\u6807\u9898",smallName:"Title",to:"title"}];const f=()=>{const t=c();return n("div",{className:"left_menu",children:p.map(e=>l("div",{className:"left_menu_line left_padding",onClick:()=>{t(e.to,{replace:!1})},children:[e.name,n("span",{children:e.smallName})]},r()))})};const g=()=>n("div",{className:"middle_content middle_padding",children:n(u,{})});const h=t=>{if(window.console.log(t),t){let e=document.getElementById(t);e&&e.scrollIntoView(),window.console.log(e)}},_=()=>{const[t,e]=s.exports.useState([]),a=m();return s.exports.useEffect(()=>{e([...document.querySelectorAll(".compontent_title")])},[a]),n("div",{className:"right_content right_padding",children:t.map(o=>n("div",{className:"right_menu_line",onClick:()=>h(o.id),children:o.innerHTML},r()))})};const v=()=>l(d,{children:[n(i,{}),l("div",{className:"main_content flex_between",children:[n(f,{}),n(g,{}),n(_,{})]})]});export{v as default};
