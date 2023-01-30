import{r as o,a as c,F as r,j as t}from"./index.fadf089c.js";import{S as a}from"./index.a28ccd5e.js";import{w as l}from"./wrong.13f6fc9b.js";import{r as n}from"./right.acc19ff3.js";/* empty css              */const x=()=>{const s={element:()=>t(u,{}),HTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
</div>`,CSSCode:(i,w,_,d)=>`
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
  background-color: ${w};
}

${i===""?"div":i} .is_switch_box .switch_circle {
  left: 20px;
}
        `,JSCode:()=>`const switchBox = document.querySelector(".switch_box");
let isSwitch = false;
switchBox.addEventListener("click", () => {
  if (isSwitch) {
    switchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    switchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,VueHTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
	<div
		:class="isSwitch ? 'is_switch_box switch_box' : 'switch_box'"
		@click="changeSwitch"
	>
		<div class="switch_circle"></div>
	</div>
</div>`,VueJSCode:()=>`import { ref } from "vue";
const isSwitch = ref(false);

const changeSwitch = () => {
	isSwitch.value = !isSwitch.value;
};`,ReactHTMLCode:i=>`<div${i.trim()?` className="${i.replace(".","")}"`:""}>
  <div
    className={isSwitch ? "is_switch_box switch_box" : "switch_box"}
    onClick={() => {
      setIsSwitch(!isSwitch);
    }}
  >
    <div className="switch_circle"></div>
  </div>
</div>`,ReactJSCode:()=>"const [isSwitch, setIsSwitch] = useState(false);",TSCode:()=>`const switchBox = document.querySelector(".switch_box");
let isSwitch: boolean = false;
switchBox.addEventListener("click", ():void => {
  if (isSwitch) {
    switchBox.className = "switch_box";
    isSwitch = !isSwitch;
  } else {
    switchBox.className = "is_switch_box switch_box";
    isSwitch = !isSwitch;
  }
});`,VueTSCode:()=>`import { ref } from "vue";
const isSwitch = ref<boolean>(false);

const changeSwitch = (): void => {
	isSwitch.value = !isSwitch.value;
};`,ReactTSCode:()=>"const [isSwitch, setIsSwitch] = useState<boolean>(false);"},[e,h]=o.exports.useState(!1);return c(r,{children:[t("div",{className:"compontent_title",id:"switch-anchor1",children:"\u5F00\u5173"}),c("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:n,alt:""})]}),c("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:l,alt:""})]}),c("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:l,alt:""})]}),c("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:t("div",{className:"switch_component1_content",children:t("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{h(!e)},children:t("div",{className:"switch_circle"})})})}),t(a,{code:s})]})]})},u=()=>{const[s,e]=o.exports.useState(!1);return t("div",{className:"switch_component1_content",children:t("div",{className:s?"is_switch_box switch_box":"switch_box",onClick:()=>{e(!s)},children:t("div",{className:"switch_circle"})})})};const S=()=>{const s={element:()=>t(v,{}),HTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
  <div class="switch_text is_switch_text">\u7537</div>
  <div class="switch_box">
    <div class="switch_circle"></div>
  </div>
  <div class="switch_text">\u5973</div>
</div>`,CSSCode:(i,w,_,d)=>`
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
  background-color: ${w}
}

${i===""?"div":i}  .is_switch_box .switch_circle {
  left: 20px;
}

${i===""?"div":i} .switch_text {
  transition: all 0.3s;
}

${i===""?"div":i}  .is_switch_text {
  color: ${d}
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
});`,VueHTMLCode:i=>`<div${i.trim()?` class="${i.replace(".","")}"`:""}>
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
};`,ReactHTMLCode:i=>`<div${i.trim()?` className="${i.replace(".","")}"`:""}>
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
};`,ReactTSCode:()=>"const [isSwitch, setIsSwitch] = useState<boolean>(false);"},[e,h]=o.exports.useState(!1);return c(r,{children:[t("div",{className:"compontent_title",id:"switch-anchor2",children:"\u6587\u5B57\u5F00\u5173"}),c("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",t("img",{src:n,alt:""})]}),c("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",t("img",{src:l,alt:""})]}),c("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",t("img",{src:n,alt:""})]}),c("div",{className:"component_box",children:[t("div",{className:"compontent_box_content",children:c("div",{className:"switch_component2_content",children:[t("div",{className:e?"switch_text":"is_switch_text switch_text",children:"\u7537"}),t("div",{className:e?"is_switch_box switch_box":"switch_box",onClick:()=>{h(!e)},children:t("div",{className:"switch_circle"})}),t("div",{className:e?"is_switch_text switch_text":"switch_text",children:"\u5973"})]})}),t(a,{code:s})]})]})},v=()=>{const[s,e]=o.exports.useState(!1);return c("div",{className:"switch_component2_content",children:[t("div",{className:s?"switch_text":"is_switch_text switch_text",children:"\u7537"}),t("div",{className:s?"is_switch_box switch_box":"switch_box",onClick:()=>{e(!s)},children:t("div",{className:"switch_circle"})}),t("div",{className:s?"is_switch_text switch_text":"switch_text",children:"\u5973"})]})},g=()=>c("div",{children:[c("div",{className:"component_big_title",children:["\u5F00\u5173 ",t("span",{children:"Switch"})]}),t(x,{}),t(S,{})]});export{g as default};
