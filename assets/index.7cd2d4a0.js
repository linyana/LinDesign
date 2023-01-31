import{S as c}from"./index.03825f75.js";import{t as n}from"./top.61adeb18.js";import{w as i}from"./wrong.13f6fc9b.js";import{a as r,F as e,j as t}from"./index.015480fd.js";/* empty css              */const d=()=>r(e,{children:[t("div",{className:"compontent_title",id:"backtop-anchor1",children:"\u57FA\u672C\u6837\u5F0F"}),t("p",{className:"compontent_p",children:"\u9F20\u6807\u7ECF\u8FC7\u65F6\u4F1A\u6709\u4E00\u5C0F\u6BB5\u79FB\u52A8\u3002"}),r("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:i,alt:""})]}),r("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:i,alt:""})]}),r("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:i,alt:""})]}),r("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:t("div",{className:"backtop_component1_content",children:t("div",{className:"to_top",onClick:()=>{window.scrollTo(0,0)},children:t("img",{src:n,alt:""})})})}),t(c,{code:{element:()=>t("div",{className:"backtop_component1_content",children:t("div",{className:"to_top",onClick:()=>{window.scrollTo(0,0)},children:t("img",{src:n,alt:""})})}),HTMLCode:o=>`<div${o.trim()?` class="${o.replace(".","")}"`:""} onclick="BackTop()">
  <img src={topSrc} alt="" />
</div>`,CSSCode:(o,l,s,p)=>`${o===""?"div":o} {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgb(221, 219, 219);
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  background-color: #fff;
  text-align: center;
  transition: all 0.3s;
}

${o===""?"div":o}:hover {
  animation: hoverToTop 0.8s;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

${o===""?"div":o}:hover img {
  width: 60%;
  margin-top: 20%;
}

@keyframes hoverToTop {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
}

${o===""?"div":o} img {
  transition: all 0.3s;
  width: 50%;
  margin-top: 25%;
}
        `,JSCode:()=>`const BackTop = () => {
  window.scrollTo(0,0);
}`,VueHTMLCode:o=>`<div${o.trim()?` class="${o.replace(".","")}"`:""} @click="BackTop()">
  <img src={topSrc} alt="" />
</div>`,VueJSCode:()=>`const BackTop = () => {
  window.scrollTo(0,0);
}`,ReactHTMLCode:o=>`<div${o.trim()?` className="${o.replace(".","")}"`:""} onClick={() => {
  window.scrollTo(0, 0);
}}>
  content
</div>`,ReactJSCode:()=>"\u6682\u65E0",TSCode:()=>`const BackTop = (): void => {
  window.scrollTo(0,0);
}`,VueTSCode:()=>`const BackTop = (): void => {
  window.scrollTo(0,0);
}`,ReactTSCode:()=>"\u6682\u65E0"}})]})]}),T=()=>r("div",{children:[r("div",{className:"component_big_title",children:["\u8FD4\u56DE\u9876\u90E8 ",t("span",{children:"BackTop"})]}),t(d,{})]});export{T as default};
