import{r as c,a as o,F as g,j as s}from"./index.5aa6e69e.js";import{S as i}from"./index.15852d0a.js";import{w as u}from"./wrong.13f6fc9b.js";/* empty css              */const d="/LinDesign/assets/tip-right.07c5321f.png";const C=()=>{const r={element:()=>s(M,{}),HTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div class="popup_message success_message">
    <img src="" alt="" />
    \u767B\u5F55\u6210\u529F
  </div>
  <button onclick="showSuccessMessage()">\u6210\u529F</button>
</div>`,CSSCode:(e,m,p,l)=>`
${e===""?"div":e} .popup_message {
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

${e===""?"div":e} .popup_message img {
	width: 16px;
	height: 16px;
	margin-right: 10px;
	transform: translateY(3px);
}

${e===""?"div":e} .success_message {
	background-color: rgba(186, 233, 180, 0.6);
	box-shadow: 0 0 10px rgba(132, 207, 122, 0.3);
	color: rgb(113, 182, 127);
}

${e===""?"div":e} .show_message {
  display: block;
	animation: showMessage 0.3s;
}

${e===""?"div":e} .hidden_message {
  display: block;
	animation: hiddenMessage 0.3s;
}

${e===""?"div":e} .message_component1_content button {
	cursor: pointer;
	padding: 0 30px;
	height: 36px;
	background-color: transparent;
	border: 1px solid rgb(104, 185, 132, 0.1);
	outline: none;
	border-radius: 6px;
	box-shadow: 0 0 3px rgb(104, 185, 132, 0.3);
	transition: all 0.5s;
	color: rgb(104, 185, 132);
	background-color: rgb(104, 185, 132, 0.1);
}
  
${e===""?"div":e} .message_component1_content button:hover {
	border: 1px solid rgb(170, 218, 138);
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
};`,VueHTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
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
};`,ReactHTMLCode:e=>`<div${e.trim()?` className="${e.replace(".","")}"`:""}>
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
    `},[a,t]=c.exports.useState("popup_message success_message"),n=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(t("popup_message success_message show_message"),setTimeout(()=>{t("popup_message success_message hidden_message"),setTimeout(()=>{t("popup_message success_message")},280)},1200))};return o(g,{children:[s("div",{className:"compontent_title",id:"message-anchor1",children:"\u6210\u529F\u63D0\u793A"}),o("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("div",{className:"component_box",children:[s("div",{className:"compontent_box_content",children:o("div",{className:"message_component1_content",children:[o("div",{className:a,children:[s("img",{src:d,alt:""}),"\u767B\u5F55\u6210\u529F"]}),s("button",{onClick:()=>{n()},children:"\u6210\u529F"})]})}),s(i,{code:r})]})]})},M=()=>{const[r,a]=c.exports.useState("popup_message success_message"),t=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(a("popup_message success_message show_message"),setTimeout(()=>{a("popup_message success_message hidden_message"),setTimeout(()=>{a("popup_message success_message")},280)},1200))};return o("div",{className:"message_component1_content",children:[o("div",{className:r,children:[s("img",{src:d,alt:""}),"\u767B\u5F55\u6210\u529F"]}),s("button",{onClick:()=>{t()},children:"\u6210\u529F"})]})},_="/LinDesign/assets/tip-notice.7bfd43f0.png";const v=()=>{const r={element:()=>s(S,{}),HTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div class="popup_message notice_message">
    <img src="" alt="" />
    \u5BC6\u7801\u5B89\u5168\u6027\u8F83\u4F4E
  </div>
  <button onclick="showNoticeMessage()">\u8B66\u544A</button>
</div>`,CSSCode:(e,m,p,l)=>`
${e===""?"div":e} .popup_message {
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

${e===""?"div":e} .popup_message img {
	width: 16px;
	height: 16px;
	margin-right: 10px;
	transform: translateY(3px);
}

${e===""?"div":e} .notice_message {
	background-color: rgba(186, 233, 180, 0.6);
	box-shadow: 0 0 10px rgba(132, 207, 122, 0.3);
	color: rgb(113, 182, 127);
}

${e===""?"div":e} .show_message {
  display: block;
	animation: showMessage 0.3s;
}

${e===""?"div":e} .hidden_message {
  display: block;
	animation: hiddenMessage 0.3s;
}

${e===""?"div":e} .message_component2_content  button {
	cursor: pointer;
	padding: 0 30px;
	height: 36px;
	background-color: transparent;
	border: 1px solid rgb(232,156,69, 0.1);
	outline: none;
	border-radius: 6px;
	box-shadow: 0 0 3px rgb(232,156,69, 0.3);
	transition: all 0.5s;
	color: rgb(232,156,69);
	background-color: rgb(232,156,69, 0.1);
}
  
${e===""?"div":e} .message_component2_content  button:hover {
	border: 1px solid rgb(243, 183, 148);
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
`,JSCode:()=>`const noticeMessage = document.querySelector(".notice_message");

const showNoticeMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessage.className = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessage.className =
        "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessage.className = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,VueHTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div :class="noticeMessageClass">
    <img src="" alt="" />
    \u5BC6\u7801\u5B89\u5168\u6027\u8F83\u4F4E
  </div>
  <button @click="showNoticeMessage">\u8B66\u544A</button>
</div>`,VueJSCode:()=>`import { ref } from "vue";
const noticeMessageClass = ref("popup_message notice_message");

const showNoticeMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessageClass.value = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessageClass.value = "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessageClass.value = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,ReactHTMLCode:e=>`<div${e.trim()?` className="${e.replace(".","")}"`:""}>
  <div className={noticeMessageClass}>
    <img src={tipRightSrc} alt="" />
    \u5BC6\u7801\u5B89\u5168\u6027\u8F83\u4F4E
  </div>
  <button
    onClick={() => {
      showNoticeMessage();
    }}
  >
    \u8B66\u544A
  </button>
</div>`,ReactJSCode:()=>`	const [noticeMessageClass, setNoticeMessageClass] = useState<string>(
  "popup_message notice_message"
);

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setNoticeMessageClass("popup_message notice_message show_message");
    setTimeout(() => {
      setNoticeMessageClass("popup_message notice_message hidden_message");
      setTimeout(() => {
        setNoticeMessageClass("popup_message notice_message");
      }, 280);
    }, 1200);
  }
};
    `,TSCode:()=>`const noticeMessage = document.querySelector(".notice_message");

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessage.className = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessage.className =
        "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessage.className = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,VueTSCode:()=>`import { ref } from "vue";
const noticeMessageClass = ref<string>("popup_message notice_message");

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    noticeMessageClass.value = "popup_message notice_message show_message";
    setTimeout(() => {
      noticeMessageClass.value = "popup_message notice_message hidden_message";
      setTimeout(() => {
        noticeMessageClass.value = "popup_message notice_message";
      }, 280);
    }, 1200);
  }
};`,ReactTSCode:()=>`	const [noticeMessageClass, setNoticeMessageClass] = useState<string>(
  "popup_message notice_message"
);

const showNoticeMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setNoticeMessageClass("popup_message notice_message show_message");
    setTimeout(() => {
      setNoticeMessageClass("popup_message notice_message hidden_message");
      setTimeout(() => {
        setNoticeMessageClass("popup_message notice_message");
      }, 280);
    }, 1200);
  }
};
    `},[a,t]=c.exports.useState("popup_message notice_message"),n=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(t("popup_message notice_message show_message"),setTimeout(()=>{t("popup_message notice_message hidden_message"),setTimeout(()=>{t("popup_message notice_message")},280)},1200))};return o(g,{children:[s("div",{className:"compontent_title",id:"message-anchor2",children:"\u8B66\u544A\u63D0\u793A"}),o("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("div",{className:"component_box",children:[s("div",{className:"compontent_box_content",children:o("div",{className:"message_component2_content",children:[o("div",{className:a,children:[s("img",{src:_,alt:""}),"\u5BC6\u7801\u5B89\u5168\u6027\u8F83\u4F4E"]}),s("button",{onClick:()=>{n()},children:"\u8B66\u544A"})]})}),s(i,{code:r})]})]})},S=()=>{const[r,a]=c.exports.useState("popup_message success_message"),t=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(a("popup_message notice_message show_message"),setTimeout(()=>{a("popup_message notice_message hidden_message"),setTimeout(()=>{a("popup_message notice_message")},280)},1200))};return s(g,{children:o("div",{className:"message_component2_content",children:[o("div",{className:r,children:[s("img",{src:_,alt:""}),"\u5BC6\u7801\u5B89\u5168\u6027\u8F83\u4F4E"]}),s("button",{onClick:()=>{t()},children:"\u8B66\u544A"})]})})},h="/LinDesign/assets/tip-error.88cdb3e6.png";const f=()=>{const r={element:()=>s(b,{}),HTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div class="popup_message error_message">
    <img src="" alt="" />
    \u5BC6\u7801\u8F93\u5165\u9519\u8BEF
  </div>
  <button onclick="showErrorMessage()">\u9519\u8BEF</button>
</div>`,CSSCode:(e,m,p,l)=>`
${e===""?"div":e} .popup_message {
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

${e===""?"div":e} .popup_message img {
	width: 16px;
	height: 16px;
	margin-right: 10px;
}

${e===""?"div":e} .error_message {
	background-color: rgba(186, 233, 180, 0.6);
	box-shadow: 0 0 10px rgba(132, 207, 122, 0.3);
	color: rgb(113, 182, 127);
	transform: translateY(3px);
}

${e===""?"div":e} .show_message {
  display: block;
	animation: showMessage 0.3s;
}

${e===""?"div":e} .hidden_message {
  display: block;
	animation: hiddenMessage 0.3s;
}

${e===""?"div":e} .message_component3_content button {
	cursor: pointer;
	padding: 0 30px;
	height: 36px;
	background-color: transparent;
	border: 1px solid rgb(219,15,66, 0.1);
	outline: none;
	border-radius: 6px;
	box-shadow: 0 0 3px rgb(219,15,66, 0.3);
	transition: all 0.5s;
	color: rgb(219,15,66);
	background-color: rgb(219,15,66, 0.1);
}
  
${e===""?"div":e} .message_component3_content button:hover {
	border: 1px solid rgb(224,224,224);
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
`,JSCode:()=>`const errorMessage = document.querySelector(".error_message");

const showErrorMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessage.className = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessage.className =
        "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessage.className = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,VueHTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div :class="errorMessageClass">
    <img src="" alt="" />
    \u5BC6\u7801\u8F93\u5165\u9519\u8BEF
  </div>
  <button @click="showErrorMessage">\u9519\u8BEF</button>
</div>`,VueJSCode:()=>`import { ref } from "vue";
const errorMessageClass = ref("popup_message error_message");

const showErrorMessage = () => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessageClass.value = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessageClass.value = "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessageClass.value = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,ReactHTMLCode:e=>`<div${e.trim()?` className="${e.replace(".","")}"`:""}>
  <div className={errorMessageClass}>
    <img src={tipRightSrc} alt="" />
    \u5BC6\u7801\u8F93\u5165\u9519\u8BEF
  </div>
  <button
    onClick={() => {
      showErrorMessage();
    }}
  >
    \u9519\u8BEF
  </button>
</div>`,ReactJSCode:()=>`	const [errorMessageClass, setErrorMessageClass] = useState<string>(
  "popup_message error_message"
);

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setErrorMessageClass("popup_message error_message show_message");
    setTimeout(() => {
      setErrorMessageClass("popup_message error_message hidden_message");
      setTimeout(() => {
        setErrorMessageClass("popup_message error_message");
      }, 280);
    }, 1200);
  }
};
    `,TSCode:()=>`const errorMessage = document.querySelector(".error_message");

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessage.className = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessage.className =
        "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessage.className = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,VueTSCode:()=>`import { ref } from "vue";
const errorMessageClass = ref<string>("popup_message error_message");

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    errorMessageClass.value = "popup_message error_message show_message";
    setTimeout(() => {
      errorMessageClass.value = "popup_message error_message hidden_message";
      setTimeout(() => {
        errorMessageClass.value = "popup_message error_message";
      }, 280);
    }, 1200);
  }
};`,ReactTSCode:()=>`	const [errorMessageClass, setErrorMessageClass] = useState<string>(
  "popup_message error_message"
);

const showErrorMessage = (): void => {
  if (
    document.querySelector(".show_message") === null &&
    document.querySelector(".hidden_message") === null
  ) {
    setErrorMessageClass("popup_message error_message show_message");
    setTimeout(() => {
      setErrorMessageClass("popup_message error_message hidden_message");
      setTimeout(() => {
        setErrorMessageClass("popup_message error_message");
      }, 280);
    }, 1200);
  }
};
    `},[a,t]=c.exports.useState("popup_message error_message"),n=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(t("popup_message error_message show_message"),setTimeout(()=>{t("popup_message error_message hidden_message"),setTimeout(()=>{t("popup_message error_message")},280)},1200))};return o(g,{children:[s("div",{className:"compontent_title",id:"message-anchor3",children:"\u9519\u8BEF\u63D0\u793A"}),o("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",s("img",{src:u,alt:""})]}),o("div",{className:"component_box",children:[s("div",{className:"compontent_box_content",children:o("div",{className:"message_component3_content",children:[o("div",{className:a,children:[s("img",{src:h,alt:""}),"\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"]}),s("button",{onClick:()=>{n()},children:"\u9519\u8BEF"})]})}),s(i,{code:r})]})]})},b=()=>{const[r,a]=c.exports.useState("popup_message success_message"),t=()=>{document.querySelector(".show_message")===null&&document.querySelector(".hidden_message")===null&&(a("popup_message error_message show_message"),setTimeout(()=>{a("popup_message error_message hidden_message"),setTimeout(()=>{a("popup_message error_message")},280)},1200))};return s(g,{children:o("div",{className:"message_component3_content",children:[o("div",{className:r,children:[s("img",{src:h,alt:""}),"\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"]}),s("button",{onClick:()=>{t()},children:"\u9519\u8BEF"})]})})},T=()=>o("div",{children:[o("div",{className:"component_big_title",children:["\u6D88\u606F\u63D0\u793A ",s("span",{children:"Message"})]}),s(C,{}),s(v,{}),s(f,{})]});export{T as default};
