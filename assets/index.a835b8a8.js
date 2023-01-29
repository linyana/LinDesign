import{r,a as u,F as i,j as e}from"./index.01a3d623.js";import{S as m}from"./index.1ba002ef.js";import{w as o}from"./wrong.13f6fc9b.js";/* empty css              */const l="/LinUI-page/assets/tip-right.07c5321f.png";const d=()=>{const n={element:()=>u("div",{className:"message_component1_content",children:[u("div",{className:s,children:[e("img",{src:l,alt:""}),"\u767B\u5F55\u6210\u529F"]}),e("button",{onClick:()=>{t()},children:"\u6210\u529F"})]}),HTMLCode:c=>`<div${c.trim()?` class="${c.replace(".","")}"`:""}>
  <div class="popup_message success_message">
    <img src="" alt="" />
    \u767B\u5F55\u6210\u529F
  </div>
  <button onclick="showSuccessMessage()">\u6210\u529F</button>
</div>`,CSSCode:(c,_,h,C)=>`
${c===""?"div":c} .popup_message {
	padding: 0 48px;
	height: 40px;
	position: fixed;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 6px;
	z-index: 999999999;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: 40px;
	backdrop-filter: blur(20px);
	font-size: 14px;
  display: none;
}

${c===""?"div":c} .popup_message img {
	width: 16px;
	height: 16px;
	margin-right: 10px;
}

${c===""?"div":c} .success_message {
	background-color: rgba(186, 233, 180, 0.6);
	box-shadow: 0 0 10px rgba(132, 207, 122, 0.3);
	color: rgb(113, 182, 127);
}

${c===""?"div":c} .show_message {
  display: block;
	animation: showMessage 0.3s;
}

${c===""?"div":c} .hidden_message {
  display: block;
	animation: hiddenMessage 0.3s;
}

@keyframes showMessage {
	from {
		transform: translateY(-50px) translateX(-50%);
		opacity: 0;
	}
	to {
		transform: translateY(0) translateX(-50%);
		opacity: 1;
	}
}

@keyframes hiddenMessage {
	from {
		transform: translateY(0) translateX(-50%);
		opacity: 1;
	}
	to {
		transform: translateY(-50px) translateX(-50%);
		opacity: 0;
	}
}
`,JSCode:()=>`const successMessage = document.querySelector(".success_message");

const showSuccessMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessage.className = "popup_message success_message show_message";
    setTimeout(() => {
      successMessage.className =
        "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessage.className = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,VueHTMLCode:c=>`<div${c.trim()?` class="${c.replace(".","")}"`:""}>
  <div :class="successMessageClass">
    <img src="" alt="" />
    \u767B\u5F55\u6210\u529F
  </div>
  <button @click="showSuccessMessage">\u6210\u529F</button>
</div>`,VueJSCode:()=>`import { ref } from "vue";
const successMessageClass = ref("popup_message success_message");

const showSuccessMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessageClass.value = "popup_message success_message show_message";
    setTimeout(() => {
      successMessageClass.value = "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessageClass.value = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,ReactHTMLCode:c=>`<div${c.trim()?` className="${c.replace(".","")}"`:""}>
  <div className={successMessageClass}>
    <img src={tipRightSrc} alt="" />
    \u767B\u5F55\u6210\u529F
  </div>
  <button
    onClick={() => {
      showSuccessMessage();
    }}
  >
    \u6210\u529F
  </button>
</div>`,ReactJSCode:()=>`	const [successMessageClass, setSuccessMessageClass] = useState<string>(
  "popup_message success_message"
);

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setSuccessMessageClass("popup_message success_message show_message");
    setTimeout(() => {
      setSuccessMessageClass("popup_message success_message hidden_message");
      setTimeout(() => {
        setSuccessMessageClass("popup_message success_message");
      }, 280);
    }, 1200);
  }
};
    `,TSCode:()=>`const successMessage = document.querySelector(".success_message");

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessage.className = "popup_message success_message show_message";
    setTimeout(() => {
      successMessage.className =
        "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessage.className = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,VueTSCode:()=>`import { ref } from "vue";
const successMessageClass = ref<string>("popup_message success_message");

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    successMessageClass.value = "popup_message success_message show_message";
    setTimeout(() => {
      successMessageClass.value = "popup_message success_message hidden_message";
      setTimeout(() => {
        successMessageClass.value = "popup_message success_message";
      }, 280);
    }, 1200);
  }
};`,ReactTSCode:()=>`	const [successMessageClass, setSuccessMessageClass] = useState<string>(
  "popup_message success_message"
);

const showSuccessMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setSuccessMessageClass("popup_message success_message show_message");
    setTimeout(() => {
      setSuccessMessageClass("popup_message success_message hidden_message");
      setTimeout(() => {
        setSuccessMessageClass("popup_message success_message");
      }, 280);
    }, 1200);
  }
};
    `},[s,a]=r.exports.useState("popup_message success_message"),t=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(a("popup_message success_message show_message"),setTimeout(()=>{a("popup_message success_message hidden_message"),setTimeout(()=>{a("popup_message success_message")},280)},1200))};return u(i,{children:[e("div",{className:"compontent_title",id:"message-anchor1",children:"\u6210\u529F\u63D0\u793A"}),u("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("div",{className:"component_box",children:[e("div",{className:"compontent_box_content",children:u("div",{className:"message_component1_content",children:[u("div",{className:s,children:[e("img",{src:l,alt:""}),"\u767B\u5F55\u6210\u529F"]}),e("button",{onClick:()=>{t()},children:"\u6210\u529F"})]})}),e(m,{code:n})]})]})};const g=()=>u(i,{children:[e("div",{className:"compontent_title",id:"message-anchor2",children:"\u8B66\u544A\u63D0\u793A"}),u("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("div",{className:"component_box",children:[e("div",{className:"compontent_box_content",children:e("div",{className:"layout_component1_content1",children:e("button",{children:"\u8B66\u544A"})})}),e(m,{code:{element:()=>e("div",{className:"layout_component1_content1",children:"content"}),HTMLCode:s=>`<div${s.trim()?` class="${s.replace(".","")}"`:""}>
  content
</div>`,CSSCode:(s,a,t,c)=>`${s===""?"div":s} {
  margin: auto;
  min-height: 200px;
  background-color: rgb(225, 227, 238);
  padding: 10px;
}
        `,JSCode:()=>"\u6682\u65E0",VueHTMLCode:s=>`<div${s.trim()?` class="${s.replace(".","")}"`:""}>
  content
</div>`,VueJSCode:()=>"\u6682\u65E0",ReactHTMLCode:s=>`<div${s.trim()?` className="${s.replace(".","")}"`:""}>
  content
</div>`,ReactJSCode:()=>"\u6682\u65E0",TSCode:()=>"\u6682\u65E0",VueTSCode:()=>"\u6682\u65E0",ReactTSCode:()=>"\u6682\u65E0"}})]})]});const p=()=>u(i,{children:[e("div",{className:"compontent_title",id:"message-anchor3",children:"\u5931\u8D25\u63D0\u793A"}),e("p",{className:"compontent_p",children:"\u5229\u7528margin\u6765\u8FDB\u884C\u5C45\u4E2D,\u5EFA\u8BAE\u81EA\u884C\u8BBE\u7F6E\u5BBD\u5EA6\u3002"}),u("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",e("img",{src:o,alt:""})]}),u("div",{className:"component_box",children:[e("div",{className:"compontent_box_content",children:e("div",{className:"layout_component1_content1",children:e("button",{children:"\u5931\u8D25"})})}),e(m,{code:{element:()=>e("div",{className:"layout_component1_content1",children:"content"}),HTMLCode:s=>`<div${s.trim()?` class="${s.replace(".","")}"`:""}>
  content
</div>`,CSSCode:(s,a,t,c)=>`${s===""?"div":s} {
  margin: auto;
  min-height: 200px;
  background-color: rgb(225, 227, 238);
  padding: 10px;
}
        `,JSCode:()=>"\u6682\u65E0",VueHTMLCode:s=>`<div${s.trim()?` class="${s.replace(".","")}"`:""}>
  content
</div>`,VueJSCode:()=>"\u6682\u65E0",ReactHTMLCode:s=>`<div${s.trim()?` className="${s.replace(".","")}"`:""}>
  content
</div>`,ReactJSCode:()=>"\u6682\u65E0",TSCode:()=>"\u6682\u65E0",VueTSCode:()=>"\u6682\u65E0",ReactTSCode:()=>"\u6682\u65E0"}})]})]}),f=()=>u("div",{children:[u("div",{className:"component_big_title",children:["\u6D88\u606F\u63D0\u793A ",e("span",{children:"Message"})]}),e(d,{}),e(g,{}),e(p,{})]});export{f as default};
