import{r as o,a as c,F as a,j as t}from"./index.587cd7a6.js";import{S as w}from"./index.6a001461.js";import{w as r}from"./wrong.13f6fc9b.js";import{r as l}from"./right.acc19ff3.js";/* empty css              */const _=()=>{const s={element:()=>t(x,{}),HTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
</div>`,CSSCode:(i,n,u,d)=>`
${i===""?"div":i} .switch_box {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgb(187, 183, 183);
  background-color: #bfbfbf;
  transition: all 0.3s;
}

${i===""?"div":i} .switch_circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
}

${i===""?"div":i} .is_switch_box {
  background-color: ${n};
}

${i===""?"div":i} .is_switch_box .switch_circle {
  left: 20px;
}
        `,JSCode:()=>`const SwitchBox = document.querySelector(".switch_box");
let isSwitch = false;
SwitchBox.addEventListener("click", () => {
  if (isSwitch) {
    SwitchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    SwitchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,VueHTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  content
</div>`,VueJSCode:()=>`import { ref } from "vue";
const switchClass = ref("switch_box");

const changeSwitch = () => {
  if(switchClass.value === "switch_box"){
    switchClass.value = "switch_box is_switch_box"
  }else {
    switchClass.value = "switch_box"
  }
}`,ReactHTMLCode:i=>`<div${i.trim()?` className="${i.replace(".","")}"`:""}>
  <div
    className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
    onClick={() => {
      setIsSwitch(!isSwitch);
    }}
  >
    <div className="switch_circle"></div>
  </div>
</div>`,ReactJSCode:()=>"const [isSwitch, setIsSwitch] = useState(false);",TSCode:()=>`const SwitchBox = document.querySelector(".switch_box");
let isSwitch: boolean = false;
SwitchBox.addEventListener("click", ():void => {
  if (isSwitch) {
    SwitchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    SwitchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,VueTSCode:()=>`import { ref } from "vue";
const switchClass = ref<string>("switch_box");

const changeSwitch = (): void => {
  if(switchClass.value === "switch_box"){
    switchClass.value = "switch_box is_switch_box"
  }else {
    switchClass.value = "switch_box"
  }
}`,ReactTSCode:()=>"const [isSwitch, setIsSwitch] = useState<boolean>(false);"},[e,h]=o.exports.useState(!1);return c(a,{children:[t("div",{className:"compontent_title",id:"switch-anchor1",children:"\u5F00\u5173"}),c("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:l,alt:""})]}),c("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:r,alt:""})]}),c("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:r,alt:""})]}),c("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:t("div",{className:"switch_component1_content",children:t("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{h(!e)},children:t("div",{className:"switch_circle"})})})}),t(w,{code:s})]})]})},x=()=>{const[s,e]=o.exports.useState(!1);return t("div",{className:"switch_component1_content",children:t("div",{className:s?"is_switch_box switch_box":"switch_box",onClick:()=>{e(!s)},children:t("div",{className:"switch_circle"})})})};const p=()=>{const s={element:()=>t(v,{}),HTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  content
</div>`,CSSCode:(i,n,u,d)=>`
${i===""?"div":i}  {
  display: flex;
}

${i===""?"div":i}  {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgb(187, 183, 183);
  background-color: #bfbfbf;
  transition: all 0.3s;
  margin: 0 16px;
}

${i===""?"div":i}  .switch_circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
}

${i===""?"div":i}  .is_switch_box {
  background-color: ${n}
}

${i===""?"div":i}  .is_switch_box .switch_circle {
  left: 20px;
}

${i===""?"div":i}  .is_switch_text {
  color: ${d}
}
        `,JSCode:()=>"\u6682\u65E0",VueHTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  content
</div>`,VueJSCode:()=>"\u6682\u65E0",ReactHTMLCode:i=>`<div${i.trim()?` className="${i.replace(".","")}"`:""}>
  content
</div>`,ReactJSCode:()=>"\u6682\u65E0",TSCode:()=>"\u6682\u65E0",VueTSCode:()=>"\u6682\u65E0",ReactTSCode:()=>"\u6682\u65E0"},[e,h]=o.exports.useState(!1);return c(a,{children:[t("div",{className:"compontent_title",id:"switch-anchor1",children:"\u6587\u5B57\u5F00\u5173"}),c("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:l,alt:""})]}),c("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:r,alt:""})]}),c("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:l,alt:""})]}),c("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:c("div",{className:"switch_component2_content",children:[t("div",{className:e?"switch_text":"is_switch_text switch_text",children:"\u7537"}),t("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{h(!e)},children:t("div",{className:"switch_circle"})}),t("div",{className:e?"is_switch_text switch_text":"switch_text",children:"\u5973"})]})}),t(w,{code:s})]})]})},v=()=>{const[s,e]=o.exports.useState(!1);return c("div",{className:"switch_component2_content",children:[t("div",{className:s?"switch_text":"is_switch_text switch_text",children:"\u7537"}),t("div",{className:s?"is_switch_box switch_box":"switch_box",onClick:()=>{e(!s)},children:t("div",{className:"switch_circle"})}),t("div",{className:s?"is_switch_text switch_text":"switch_text",children:"\u5973"})]})},$=()=>c("div",{children:[c("div",{className:"component_big_title",children:["\u5F00\u5173 ",t("span",{children:"Switch"})]}),t(_,{}),t(p,{})]});export{$ as default};
