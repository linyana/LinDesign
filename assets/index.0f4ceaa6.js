import{j as e,N as l,b as d,a}from"./index.c2b45265.js";const i=n=>e(l,{...n,className:({isActive:s})=>"nav"+(s?" nav_on":"")}),c="/LinUI-page/assets/logo.b826d1ce.svg",o="/LinUI-page/assets/github.b918db42.svg";const r=()=>{const n=d(),{pathname:s}=n;return a("div",{className:"header",children:[e("div",{className:"header_left left_padding",children:a("div",{className:"logo flex_between",children:[e("img",{src:c,alt:"logo",className:"header_logo"})," ",e("span",{children:"LinUI"})]})}),a("div",{className:"header_middle middle_padding flex_between",children:[e("div",{className:"search"}),e("div",{className:"nav",children:a("ul",{className:"nav_ul flex_between",children:[e("li",{children:e(i,{to:"/home",children:"\u9996\u9875"})}),e("li",{children:s==="/home"?e(i,{to:"/components/overview",children:" \u7EC4\u4EF6"}):e(i,{to:"/components",children:" \u7EC4\u4EF6"})})]})})]}),e("div",{className:"header_right right_padding",children:e("img",{src:o,alt:"github",className:"header_logo",onClick:()=>{window.open("https://github.com/linyana/LinUI-page")}})})]})};export{r as H};
