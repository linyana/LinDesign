import{r as o,a as s,F as r,j as i}from"./index.cbee7bb9.js";import{S as d}from"./index.221e0dab.js";import{w as l}from"./wrong.13f6fc9b.js";import{r as n}from"./right.acc19ff3.js";/* empty css              */const x=()=>{const c={element:()=>i(u,{}),HTMLCode:t=>`<div${t.trim()?` class="${t.replace(".","")}"`:""}>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
</div>`,CSSCode:(t,w,_,a)=>`
${t===""?"div":t} .switch_box {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid rgb(187, 183, 183);
  background-color: #bfbfbf;
  transition: all 0.3s;
}

${t===""?"div":t} .switch_circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
}

${t===""?"div":t} .is_switch_box {
  background-color: ${w};
}

${t===""?"div":t} .is_switch_box .switch_circle {
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
});`,VueHTMLCode:t=>`<div${t.trim()?` class="${t.replace(".","")}"`:""}>
  content
</div>`,VueJSCode:()=>`import { ref } from "vue";
const switchClass = ref("switch_box");

const changeSwitch = () => {
  if(switchClass.value === "switch_box"){
    switchClass.value = "switch_box is_switch_box"
  }else {
    switchClass.value = "switch_box"
  }
}`,ReactHTMLCode:t=>`<div${t.trim()?` className="${t.replace(".","")}"`:""}>
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
}`,ReactTSCode:()=>"const [isSwitch, setIsSwitch] = useState<boolean>(false);"},[e,h]=o.exports.useState(!1);return s(r,{children:[i("div",{className:"compontent_title",id:"switch-anchor1",children:"\u5F00\u5173"}),s("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",i("img",{src:n,alt:""})]}),s("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",i("img",{src:l,alt:""})]}),s("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",i("img",{src:l,alt:""})]}),s("div",{className:"component_box",children:[i("div",{className:"compontent_box_content",children:i("div",{className:"switch_component1_content",children:i("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{h(!e)},children:i("div",{className:"switch_circle"})})})}),i(d,{code:c})]})]})},u=()=>{const[c,e]=o.exports.useState(!1);return i("div",{className:"switch_component1_content",children:i("div",{className:c?"is_switch_box switch_box":"switch_box",onClick:()=>{e(!c)},children:i("div",{className:"switch_circle"})})})};const S=()=>{const c={element:()=>i(v,{}),HTMLCode:t=>`<div${t.trim()?` class="${t.replace(".","")}"`:""}>
  <div class="switch_text is_switch_text">\u7537</div>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
  <div class="switch_text">\u5973</div>
</div>`,CSSCode:(t,w,_,a)=>`
${t===""?"div":t}  {
  display: flex;
}

${t===""?"div":t}  {
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

${t===""?"div":t}  .switch_circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
}

${t===""?"div":t}  .is_switch_box {
  background-color: ${w}
}

${t===""?"div":t}  .is_switch_box .switch_circle {
  left: 20px;
}

${t===""?"div":t} .switch_text {
  transition: all 0.3s;
}

${t===""?"div":t}  .is_switch_text {
  color: ${a}
}
        `,JSCode:()=>`	const switchBox = document.querySelector(".switch_box");
const switchText = document.querySelectorAll(".switch_text");
let isSwitch = false;
switchBox.addEventListener("click", () => {
  if (isSwitch) {
    switchBox.className = "switch_box";
    switchText[0].className = "switch_text is_switch_text"
    switchText[1].className = "switch_text"
    isSwitch = !isSwitch;
  } else {
    switchBox.className = "is_switch_box switch_box";
    switchText[1].className = "switch_text is_switch_text"
    switchText[0].className = "switch_text"
    isSwitch = !isSwitch;
  }
});`,VueHTMLCode:t=>`<div${t.trim()?` class="${t.replace(".","")}"`:""}>
  <div :class="isSwitch? 'switch_text' : 'is_switch_text switch_text'">\u7537</div>
  <div
    :class="isSwitch ? 'is_switch_box switch_box' : 'switch_box'"
    @click="changeSwitch"
  >
    <div class="switch_circle"></div>
  </div>
  <div :class="isSwitch? 'is_switch_text switch_text' : 'switch_text'">\u5973</div>
</div>`,VueJSCode:()=>`import { ref } from "vue";
const isSwitch = ref(false);

const changeSwitch = () => {
  isSwitch.value = !isSwitch.value;
};`,ReactHTMLCode:t=>`<div${t.trim()?` className="${t.replace(".","")}"`:""}>
  <div className={isSwitch ? "switch_text" : "is_switch_text switch_text"}>
    \u7537
  </div>
  <div
    className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
    onClick={() => {
      setIsSwitch(!isSwitch);
    }}
  >
    <div className="switch_circle"></div>
  </div>
  <div className={isSwitch ? "is_switch_text switch_text" : "switch_text"}>
    \u5973
  </div>
</div>`,ReactJSCode:()=>"const [isSwitch, setIsSwitch] = useState(false);",TSCode:()=>`	const switchBox = document.querySelector(".switch_box");
const switchText = document.querySelectorAll(".switch_text");
let isSwitch: boolean = false;
switchBox.addEventListener("click", (): void => {
  if (isSwitch) {
    switchBox.className = "switch_box";
    switchText[0].className = "switch_text is_switch_text"
    switchText[1].className = "switch_text"
    isSwitch = !isSwitch;
  } else {
    switchBox.className = "is_switch_box switch_box";
    switchText[1].className = "switch_text is_switch_text"
    switchText[0].className = "switch_text"
    isSwitch = !isSwitch;
  }
});`,VueTSCode:()=>`import { ref } from "vue";
const isSwitch = ref<boolean>(false);

const changeSwitch = (): void => {
  isSwitch.value = !isSwitch.value;
};`,ReactTSCode:()=>"const [isSwitch, setIsSwitch] = useState<boolean>(false);"},[e,h]=o.exports.useState(!1);return s(r,{children:[i("div",{className:"compontent_title",id:"switch-anchor1",children:"\u6587\u5B57\u5F00\u5173"}),s("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",i("img",{src:n,alt:""})]}),s("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",i("img",{src:l,alt:""})]}),s("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",i("img",{src:n,alt:""})]}),s("div",{className:"component_box",children:[i("div",{className:"compontent_box_content",children:s("div",{className:"switch_component2_content",children:[i("div",{className:e?"switch_text":"is_switch_text switch_text",children:"\u7537"}),i("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{h(!e)},children:i("div",{className:"switch_circle"})}),i("div",{className:e?"is_switch_text switch_text":"switch_text",children:"\u5973"})]})}),i(d,{code:c})]})]})},v=()=>{const[c,e]=o.exports.useState(!1);return s("div",{className:"switch_component2_content",children:[i("div",{className:c?"switch_text":"is_switch_text switch_text",children:"\u7537"}),i("div",{className:c?"is_switch_box switch_box":"switch_box",onClick:()=>{e(!c)},children:i("div",{className:"switch_circle"})}),i("div",{className:c?"is_switch_text switch_text":"switch_text",children:"\u5973"})]})},g=()=>s("div",{children:[s("div",{className:"component_big_title",children:["\u5F00\u5173 ",i("span",{children:"Switch"})]}),i(x,{}),i(S,{})]});export{g as default};
