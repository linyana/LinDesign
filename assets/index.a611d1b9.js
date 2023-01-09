import{r as c,a as x,F as a,j as i}from"./index.f07b4cbf.js";import{S as p}from"./index.7cecbc74.js";const _=()=>{const n={element:()=>i(I,{}),HTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div class="slide_box active">1</div>
  <div class="slide_box next">2</div>
  <div class="slide_box">3</div>
  <div class="slide_box">4</div>
  <div class="slide_box pre">5</div>
</div>`,CSSCode:(e,o,v,b)=>`${e===""?"div":e} {
  position: relative;
  width: 100%;
  height: 400px;
  min-width: 500px; 
  overflow: hidden;
}

${e===""?"div":e} .slide_box {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 30px;
  flex-shrink: 0;
}

${e===""?"div":e} .slide_box img {
  width: 100%;
  height: 100%;
}

${e===""?"div":e} .active,
${e===""?"div":e} .pre,
${e===""?"div":e} .next {
  display: flex;
  transition: all 0.8s;
}

${e===""?"div":e} .active {
  left: 0;
}

${e===""?"div":e} .pre {
  left: -100%;
}

${e===""?"div":e} .next {
  left: 100%;
}`,JSCode:()=>`const slideBox = document.querySelectorAll(".slide_box");
  let timer;
  let index = 0;
  
  const length = slideBox.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideBox[index].className = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideBox[preIndex].className = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideBox[preIndex2].className = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideBox[nextIndex].className = "slide_box next";
    }, 3000);
  };
  
  setTime();
    `,VueHTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div :class="slideArr[0]">1</div>
  <div :class="slideArr[1]">2</div>
  <div :class="slideArr[2]">3</div>
  <div :class="slideArr[3]">4</div>
  <div :class="slideArr[4]">5</div>
</div>`,VueJSCode:()=>`import { reactive } from "vue";

  const slideArr = reactive([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ]);
  
  let timer;
  let index = 0;
  
  const length = slideArr.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideArr[index] = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideArr[preIndex] = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideArr[preIndex2] = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideArr[nextIndex] = "slide_box next";
    }, 3000);
  };
  
  setTime();`,ReactHTMLCode:e=>`<div${e.trim()?` className="${e.replace(".","")}"`:""}>
  <div className={slideArr[5] ? slideArr[5] : "slide_box active"}>1</div>
  <div className={slideArr[1]}>2</div>
  <div className={slideArr[2]}>3</div>
  <div className={slideArr[3]}>4</div>
  <div className={slideArr[4]}>5</div>
</div>`,ReactJSCode:()=>`
  const [slideArr, setSlideArr] = useState<Array<string>>([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
]);  

const length = slideArr.length;
let slideIndex = 4;
let timer;
useEffect(() => {
  if (timer) {
    return; 
  } else {
    timer = setInterval(() => {
      slideIndex++;
      slideIndex = slideIndex === length ? 0 : slideIndex;
      setSlideArr([(slideArr[slideIndex] = "slide_box active"), ...slideArr]);
      const preIndex = slideIndex === 0 ? length - 1 : slideIndex - 1;
      setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
      const nextIndex = slideIndex === length - 1 ? 0 : slideIndex + 1;
      setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
    }, 3000);
  }
}, []);
  `,TSCode:()=>`const slideBox = document.querySelectorAll(".slide_box");
  let timer;
  let index = 0;
  
  const length = slideBox.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideBox[index].className = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideBox[preIndex].className = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideBox[preIndex2].className = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideBox[nextIndex].className = "slide_box next";
    }, 3000);
  };
  
  setTime();
    `,VueTSCode:()=>`import { reactive } from "vue";

  const slideArr: string[] = reactive([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ]);
  
  let timer: NodeJS.Timer;
  let index: number = 0;
  
  const length: number = slideArr.length;
  
  const setTime = () => {
    timer = setInterval(() => {
      index++;
      index = index === length ? 0 : index;
      slideArr[index] = "slide_box active";
      const preIndex = index === 0 ? length - 1 : index - 1;
      slideArr[preIndex] = "slide_box pre";
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      slideArr[preIndex2] = "slide_box";
      const nextIndex = index === length - 1 ? 0 : index + 1;
      slideArr[nextIndex] = "slide_box next";
    }, 3000);
  };
  
  setTime();`,ReactTSCode:()=>`
const [slideArr, setSlideArr] = useState<Array<string>>([
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
]);  
const length: number = slideArr.length;
let slideIndex: number = 4;
let timer: NodeJS.Timer;
useEffect(() => {
  if (timer) {
    return;
  } else {
    timer = setInterval(() => {
      slideIndex++;
      slideIndex = slideIndex === length ? 0 : slideIndex;
      setSlideArr([(slideArr[slideIndex] = "slide_box active"), ...slideArr]);
      const preIndex = slideIndex === 0 ? length - 1 : slideIndex - 1;
      setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
      const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
      setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
      const nextIndex = slideIndex === length - 1 ? 0 : slideIndex + 1;
      setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
    }, 3000);
  }
}, []);
  `},[d,t]=c.exports.useState(["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]),s=d.length;let l=4,r;return c.exports.useEffect(()=>{r||(r=setInterval(()=>{l++,l=l===s?0:l,t([d[l]="slide_box active",...d]);const e=l===0?s-1:l-1;t([d[e]="slide_box pre",...d]);const o=e===0?s-1:e-1;t([d[o]="slide_box",...d]);const v=l===s-1?0:l+1;t([d[v]="slide_box next",...d])},3e3))},[]),x(a,{children:[i("div",{className:"compontent_title",id:"slide-anchor3",children:"\u65E0\u7F1D\u6EDA\u52A8"}),i("p",{className:"compontent_p",children:"\u5728\u9996\u5C3E\u5207\u6362\u65F6\u65E0\u7F1D\u6EDA\u52A8,\u53EF\u4EE5\u628A\u91CC\u9762\u7684\u6570\u5B57\u66FF\u6362\u4E3A\u56FE\u7247\uFF0C\u672C\u7EC4\u4EF6\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272\u3002"}),x("div",{className:"component_box",children:[i("div",{className:"compontent_box_content",children:x("div",{className:"slide_component3_content",children:[i("div",{className:d[5]?d[5]:"slide_box active",children:"1"}),i("div",{className:d[1],children:"2"}),i("div",{className:d[2],children:"3"}),i("div",{className:d[3],children:"4"}),i("div",{className:d[4],children:"5"})]})}),i(p,{code:n})]})]})},I=()=>{const[n,d]=c.exports.useState(["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]),t=n.length;let s=4,l;return c.exports.useEffect(()=>{l||(l=setInterval(()=>{s++,s=s===t?0:s,d([n[s]="slide_box active",...n]);const r=s===0?t-1:s-1;d([n[r]="slide_box pre",...n]);const e=r===0?t-1:r-1;d([n[e]="slide_box",...n]);const o=s===t-1?0:s+1;d([n[o]="slide_box next",...n])},3e3))},[]),i(a,{children:x("div",{className:"slide_component3_content",children:[i("div",{className:n[5]?n[5]:"slide_box active",children:"1"}),i("div",{className:n[1],children:"2"}),i("div",{className:n[2],children:"3"}),i("div",{className:n[3],children:"4"}),i("div",{className:n[4],children:"5"})]})})},A=()=>x("div",{children:[x("div",{className:"component_big_title",children:["\u8F6E\u64AD\u56FE ",i("span",{children:"Slide"})]}),i(_,{})]});export{A as default};
