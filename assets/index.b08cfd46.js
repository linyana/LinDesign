import{r as s,a as c,F as p,j as i}from"./index.cbc58aa6.js";import{S as _}from"./index.213b7d0c.js";const b=()=>{const n={element:()=>i(h,{}),HTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div class="slide_box active">1</div>
  <div class="slide_box next">2</div>
  <div class="slide_box">3</div>
  <div class="slide_box">4</div>
  <div class="slide_box pre">5</div>
</div>`,CSSCode:(e,o,a,v)=>`${e===""?"div":e} {
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
const [slideArr, setSlideArr] = useState([
  "slide_box active",
  "slide_box next",
  "slide_box",
  "slide_box",
  "slide_box pre",
]);
const [slideIndex, setSlideIndex] = useState(0);
const SlideRef = useRef(slideIndex);
SlideRef.current = slideIndex;

const length = 5;  
useEffect(() => { 
  const timer = setInterval(() => {
    setSlideIndex(slideIndex => slideIndex + 1); 
    if(SlideRef.current === length - 1){
      setSlideIndex(0);
    }
    setSlideArr([(slideArr[SlideRef.current] = "slide_box active"), ...slideArr]);
    const preIndex = SlideRef.current === 0 ? length - 1 : SlideRef.current - 1;
    setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
    const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
    setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
    const nextIndex = SlideRef.current === length - 1 ? 0 : SlideRef.current + 1;
    setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
  }, 1000);  
  return () => clearInterval(timer)     
},[]) );
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
const [slideIndex, setSlideIndex] = useState<number>(0);
const SlideRef = useRef(slideIndex);
SlideRef.current = slideIndex;

const length: number = 5;  
useEffect(() => { 
  const timer = setInterval(() => {
    setSlideIndex(slideIndex => slideIndex + 1); 
    if(SlideRef.current === length - 1){
      setSlideIndex(0);
    }
    setSlideArr([(slideArr[SlideRef.current] = "slide_box active"), ...slideArr]);
    const preIndex = SlideRef.current === 0 ? length - 1 : SlideRef.current - 1;
    setSlideArr([(slideArr[preIndex] = "slide_box pre"), ...slideArr]);
    const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
    setSlideArr([(slideArr[preIndex2] = "slide_box"), ...slideArr]);
    const nextIndex = SlideRef.current === length - 1 ? 0 : SlideRef.current + 1;
    setSlideArr([(slideArr[nextIndex] = "slide_box next"), ...slideArr]);
  }, 1000);  
  return () => clearInterval(timer)     
},[]) 
  `},[d,l]=s.exports.useState(["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]),[u,r]=s.exports.useState(0),t=s.exports.useRef(u);t.current=u;const x=5;return s.exports.useEffect(()=>{const e=setInterval(()=>{r(I=>I+1),t.current===x-1&&r(0),l([d[t.current]="slide_box active",...d]);const o=t.current===0?x-1:t.current-1;l([d[o]="slide_box pre",...d]);const a=o===0?x-1:o-1;l([d[a]="slide_box",...d]);const v=t.current===x-1?0:t.current+1;l([d[v]="slide_box next",...d])},3e3);return()=>clearInterval(e)},[]),c(p,{children:[i("div",{className:"compontent_title",id:"slide-anchor3",children:"\u65E0\u7F1D\u6EDA\u52A8"}),i("p",{className:"compontent_p",children:"\u5728\u9996\u5C3E\u5207\u6362\u65F6\u65E0\u7F1D\u6EDA\u52A8,\u53EF\u4EE5\u628A\u91CC\u9762\u7684\u6570\u5B57\u66FF\u6362\u4E3A\u56FE\u7247\uFF0C\u672C\u7EC4\u4EF6\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272\u3002"}),c("div",{className:"component_box",children:[i("div",{className:"compontent_box_content",children:c("div",{className:"slide_component3_content",children:[i("div",{className:d[5]?d[5]:"slide_box active",children:"1"}),i("div",{className:d[1],children:"2"}),i("div",{className:d[2],children:"3"}),i("div",{className:d[3],children:"4"}),i("div",{className:d[4],children:"5"})]})}),i(_,{code:n})]})]})},h=()=>{const[n,d]=s.exports.useState(["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]),[l,u]=s.exports.useState(0),r=s.exports.useRef(l);r.current=l;const t=5;return s.exports.useEffect(()=>{const x=setInterval(()=>{u(v=>v+1),r.current===t-1&&u(0),d([n[r.current]="slide_box active",...n]);const e=r.current===0?t-1:r.current-1;d([n[e]="slide_box pre",...n]);const o=e===0?t-1:e-1;d([n[o]="slide_box",...n]);const a=r.current===t-1?0:r.current+1;d([n[a]="slide_box next",...n])},3e3);return()=>clearInterval(x)},[]),i(p,{children:c("div",{className:"slide_component3_content",children:[i("div",{className:n[5]?n[5]:"slide_box active",children:"1"}),i("div",{className:n[1],children:"2"}),i("div",{className:n[2],children:"3"}),i("div",{className:n[3],children:"4"}),i("div",{className:n[4],children:"5"})]})})},S=()=>c("div",{children:[c("div",{className:"component_big_title",children:["\u8F6E\u64AD\u56FE ",i("span",{children:"Slide"})]}),i(b,{})]});export{S as default};
