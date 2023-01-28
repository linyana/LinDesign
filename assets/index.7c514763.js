import{r as h,a as c,F as l,j as t}from"./index.30abe735.js";import{S as a}from"./index.2532593b.js";import{w as o}from"./wrong.13f6fc9b.js";import{r as d}from"./right.acc19ff3.js";/* empty css              */const _=()=>{const e={element:()=>t(x,{}),HTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
</div>`,CSSCode:(i,r,w,u)=>`
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
  background-color: ${r};
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
}`,ReactTSCode:()=>"const [isSwitch, setIsSwitch] = useState<boolean>(false);"},[s,n]=h.exports.useState(!1);return c(l,{children:[t("div",{className:"compontent_title",id:"switch-anchor1",children:"\u5F00\u5173"}),c("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:d,alt:""})]}),c("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:o,alt:""})]}),c("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:o,alt:""})]}),c("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:t("div",{className:"switch_component1_content",children:t("div",{className:s?"is_switch_box switch_box":"switch_box",onClick:()=>{n(!s)},children:t("div",{className:"switch_circle"})})})}),t(a,{code:e})]})]})},x=()=>{const[e,s]=h.exports.useState(!1);return t("div",{className:"switch_component1_content",children:t("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{s(!e)},children:t("div",{className:"switch_circle"})})})};const S=()=>{const e={element:()=>t("div",{className:"layout_component1_content1",children:"content"}),HTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  content
</div>`,CSSCode:(i,r,w,u)=>`${i===""?"div":i} {
  margin: auto;
  min-height: 200px;
  background-color: rgb(225, 227, 238);
  padding: 10px;
}
        `,JSCode:()=>"\u6682\u65E0",VueHTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  content
</div>`,VueJSCode:()=>"\u6682\u65E0",ReactHTMLCode:i=>`<div${i.trim()?` className="${i.replace(".","")}"`:""}>
  content
</div>`,ReactJSCode:()=>"\u6682\u65E0",TSCode:()=>"\u6682\u65E0",VueTSCode:()=>"\u6682\u65E0",ReactTSCode:()=>"\u6682\u65E0"},[s,n]=h.exports.useState(!1);return c(l,{children:[t("div",{className:"compontent_title",id:"switch-anchor1",children:"\u5F00\u5173"}),c("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:d,alt:""})]}),c("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:o,alt:""})]}),c("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:o,alt:""})]}),c("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:t("div",{className:"switch_component1_content1",children:t("div",{className:s?"is_switch_box switch_box":"switch_box",onClick:()=>{n(!s)},children:t("div",{className:"switch_circle"})})})}),t(a,{code:e})]})]})},f=()=>c("div",{children:[c("div",{className:"component_big_title",children:["\u5F00\u5173 ",t("span",{children:"Switch"})]}),t(_,{}),t(S,{})]});export{f as default};
