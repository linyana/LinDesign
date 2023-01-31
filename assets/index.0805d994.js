var b=Object.defineProperty;var S=(t,e,s)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var v=(t,e,s)=>(S(t,typeof e!="symbol"?e+"":e,s),s);import{r as x,a as n,F as m,j as i,R as C}from"./index.015480fd.js";import{S as g}from"./index.03825f75.js";import{w as a}from"./wrong.13f6fc9b.js";/* empty css              */const B=()=>{const t={element:()=>i(E,{}),HTMLCode:d=>`<div${d.trim()?` class="${d.replace(".","")}"`:""}>
  <div class="slide_box active">1</div>
  <div class="slide_box next">2</div>
  <div class="slide_box">3</div>
  <div class="slide_box">4</div>
  <div class="slide_box pre">5</div>
</div>`,CSSCode:(d,h,I,u)=>`${d===""?"div":d} {
  position: relative;
  width: 100%;
  height: 400px;
  min-width: 100px; 
  overflow: hidden;
}

${d===""?"div":d} .slide_box {
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 30px;
  flex-shrink: 0;
}

${d===""?"div":d} .slide_box img {
  width: 100%;
  height: 100%;
}

${d===""?"div":d} .active,
${d===""?"div":d} .pre,
${d===""?"div":d} .next {
  display: flex;
  transition: all 0.8s;
}

${d===""?"div":d} .active {
  left: 0;
}

${d===""?"div":d} .pre {
  left: -100%;
}

${d===""?"div":d} .next {
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
    `,VueHTMLCode:d=>`<div${d.trim()?` class="${d.replace(".","")}"`:""}>
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
  
  setTime();`,ReactHTMLCode:d=>`<div${d.trim()?` className="${d.replace(".","")}"`:""}>
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
  `},[e,s]=x.exports.useState(["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]),[r,o]=x.exports.useState(0),l=x.exports.useRef(r);l.current=r;const c=5;return x.exports.useEffect(()=>{const d=setInterval(()=>{o(_=>_+1),l.current===c-1&&o(0),s([e[l.current]="slide_box active",...e]);const h=l.current===0?c-1:l.current-1;s([e[h]="slide_box pre",...e]);const I=h===0?c-1:h-1;s([e[I]="slide_box",...e]);const u=l.current===c-1?0:l.current+1;s([e[u]="slide_box next",...e])},3e3);return()=>clearInterval(d)},[]),n(m,{children:[i("div",{className:"compontent_title",id:"slide-anchor3",children:"\u65E0\u7F1D\u6EDA\u52A8"}),i("p",{className:"compontent_p",children:"\u5728\u9996\u5C3E\u5207\u6362\u65F6\u65E0\u7F1D\u6EDA\u52A8,\u53EF\u4EE5\u628A\u91CC\u9762\u7684\u6570\u5B57\u66FF\u6362\u4E3A\u56FE\u7247\uFF0C\u672C\u7EC4\u4EF6\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272\u3002"}),n("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",i("img",{src:a,alt:""})]}),n("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",i("img",{src:a,alt:""})]}),n("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",i("img",{src:a,alt:""})]}),n("div",{className:"component_box",children:[i("div",{className:"compontent_box_content",children:n("div",{className:"slide_component3_content",children:[i("div",{className:e[5]?e[5]:"slide_box active",children:"1"}),i("div",{className:e[1],children:"2"}),i("div",{className:e[2],children:"3"}),i("div",{className:e[3],children:"4"}),i("div",{className:e[4],children:"5"})]})}),i(g,{code:t})]})]})},E=()=>{const[t,e]=x.exports.useState(["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]),[s,r]=x.exports.useState(0),o=x.exports.useRef(s);o.current=s;const l=5;return x.exports.useEffect(()=>{const c=setInterval(()=>{r(u=>u+1),o.current===l-1&&r(0),e([t[o.current]="slide_box active",...t]);const d=o.current===0?l-1:o.current-1;e([t[d]="slide_box pre",...t]);const h=d===0?l-1:d-1;e([t[h]="slide_box",...t]);const I=o.current===l-1?0:o.current+1;e([t[I]="slide_box next",...t])},3e3);return()=>clearInterval(c)},[]),i(m,{children:n("div",{className:"slide_component3_content",children:[i("div",{className:t[5]?t[5]:"slide_box active",children:"1"}),i("div",{className:t[1],children:"2"}),i("div",{className:t[2],children:"3"}),i("div",{className:t[3],children:"4"}),i("div",{className:t[4],children:"5"})]})})},p="data:image/png;base64,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";const f=()=>n(m,{children:[i("div",{className:"compontent_title",id:"slide-anchor4",children:"\u65E0\u7F1D\u6EDA\u52A8 + \u63A7\u5236\u5668"}),i("p",{className:"compontent_p",children:"\u5728\u9996\u5C3E\u5207\u6362\u65F6\u65E0\u7F1D\u6EDA\u52A8,\u53EF\u4EE5\u7528\u5DE6\u7BAD\u5934\u548C\u53F3\u7BAD\u5934\u8FDB\u884C\u8C03\u6574\uFF0C\u53EF\u4EE5\u628A\u91CC\u9762\u7684\u6570\u5B57\u66FF\u6362\u4E3A\u56FE\u7247\uFF0C\u672C\u7EC4\u4EF6\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272\u3002"}),n("p",{className:"function_p",children:["\u80CC\u666F\u989C\u8272\uFF1A",i("img",{src:a,alt:""})]}),n("p",{className:"function_p",children:["\u5B57\u4F53\u989C\u8272\uFF1A",i("img",{src:a,alt:""})]}),n("p",{className:"function_p",children:["\u60AC\u6D6E\u989C\u8272\uFF1A",i("img",{src:a,alt:""})]}),n("div",{className:"component_box",children:[i("div",{className:"compontent_box_content",children:i(A,{})}),i(g,{code:{element:()=>i(A,{}),HTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div class="slide_box active">1</div>
  <div class="slide_box next">2</div>
  <div class="slide_box">3</div>
  <div class="slide_box">4</div>
  <div class="slide_box pre">5</div>
</div>`,CSSCode:(e,s,r,o)=>`
${e===""?"div":e} {
  position: relative;
  width: 100%;
  height: 400px;
  min-width: 100px; 
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
  z-index: 3;
  left: 0;
}

${e===""?"div":e} .pre {
  left: -100%;
}

${e===""?"div":e} .next {
  left: 100%;
}

${e===""?"div":e} .slide_buttons {
  z-index: 8;
  width: 100px;
  height: 30px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

${e===""?"div":e} .slide_button {
  cursor: pointer;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #495057;
}

${e===""?"div":e} .slide_button_focus {
  background-color: #495057;
}

${e===""?"div":e} .slide_left {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  width: 30px;
}

${e===""?"div":e} .slide_right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  width: 30px;
}


${e===""?"div":e} .slide_left img {
  cursor: pointer;
  width: 100%;
}

${e===""?"div":e} .slide_right img {
  cursor: pointer;
  width: 100%;
  transform: rotate(180deg);
}`,JSCode:()=>`const slideBox = document.querySelectorAll(".slide_box");
const slideButton = document.querySelectorAll(".slide_button");
const slideLeft = document.querySelector(".slide_left");
const slideRight = document.querySelector(".slide_right");
let timer;
let index = 0;

const length = slideBox.length;

const slideIncrement = () => {
  index++;
  index = index === length ? 0 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const slideDecrement = () => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const changeSlideButton = () => {
  slideButton.forEach((item) => {
    item.className = "slide_button";
  });
  slideButton[index].className = "slide_button slide_button_focus";
}

const setTime = () => {
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
};

slideRight.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideIncrement()
});

slideLeft.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideDecrement()
});

setTime();
    
    `,VueHTMLCode:e=>`<div${e.trim()?` class="${e.replace(".","")}"`:""}>
  <div :class="slideArr[0]">1</div>
  <div :class="slideArr[1]">2</div>
  <div :class="slideArr[2]">3</div>
  <div :class="slideArr[3]">4</div>
  <div :class="slideArr[4]">5</div>
  <div class="slide_buttons">
    <div
      :class="
        index === currentIndex
          ? 'slide_button slide_button_focus'
          : 'slide_button'
      "
      v-for="(_, currentIndex) in slideArr"
    ></div>
  </div>
  <div class="slide_left" @click="handldeSlideLeft">
    <img src="./left.png" alt="" />
  </div>
  <div class="slide_right" @click="handldeSlideRight">
    <img src="./left.png" alt="" />
  </div>
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
    slideIncrement()
  }, 3000);
};

const slideIncrement = () => {
  index++;
  index = index === length ? 0 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const slideDecrement = () => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const handldeSlideRight = () => {
  clearInterval(timer)
  slideIncrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

const handldeSlideLeft = () => {
  clearInterval(timer)
  slideDecrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

setTime();`,ReactHTMLCode:e=>`<div${e.trim()?` className="${e.replace(".","")}"`:""}>
  <div className={this.slideArr[0]}>1</div>
  <div className={this.slideArr[1]}>2</div>
  <div className={this.slideArr[2]}>3</div>
  <div className={this.slideArr[3]}>4</div>
  <div className={this.slideArr[4]}>5</div>
  <div className="slide_buttons">
    {this.slideArr.map((_, index) => {
      return (
        <div
          className={
            this.slideIndex === index
              ? "slide_button slide_button_focus"
              : "slide_button"
          }
          key={index}
        ></div>
      );
    })}
  </div>
  <div className="slide_left" onClick={() => {this.handleClickLeft()}}>
    <img src={img} alt="" />
  </div>
  <div className="slide_right" onClick={() => {this.handleClickRight()}}>
    <img src={img} alt="" />
  </div>
</div>`,ReactJSCode:()=>`
class Component extends React.Component {
  private timer;
  private slideIndex = 0;
  private slideArr = [
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ];

  constructor(props) {
    super(props);
    this.state = {
      slideArr: this.slideArr,
    };
  }

  slideIncrement() {
    const slideDelete =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.updateSlide();
  }

  slideDecrement()= {
    const slideDelete =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.updateSlide();
  }

  updateSlide()= {
    this.slideArr[this.slideIndex] = "slide_box active";
    const slideNext =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    const slidePre =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideNext] = "slide_box next";
    this.slideArr[slidePre] = "slide_box pre";
    this.setState({});
  }

  componentDidMount()= {
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  componentWillUnmount()= {
    clearInterval(this.timer);
  }

  handleClickLeft() {
    clearInterval(this.timer)
    this.slideDecrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  handleClickRight(): void {
    clearInterval(this.timer)
    this.slideIncrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="slide_component4_content">
          <div className={this.slideArr[0]}>1</div>
          <div className={this.slideArr[1]}>2</div>
          <div className={this.slideArr[2]}>3</div>
          <div className={this.slideArr[3]}>4</div>
          <div className={this.slideArr[4]}>5</div>
          <div className="slide_buttons">
            {this.slideArr.map((_, index) => {
              return (
                <div
                  className={
                    this.slideIndex === index
                      ? "slide_button slide_button_focus"
                      : "slide_button"
                  }
                  key={index}
                ></div>
              );
            })}
          </div>
          <div className="slide_left" onClick={() => {this.handleClickLeft()}}>
            <img src={img} alt="" />
          </div>
          <div className="slide_right" onClick={() => {this.handleClickRight()}}>
            <img src={img} alt="" />
          </div>
        </div>
      </>
    );
  }
}
  `,TSCode:()=>`const slideBox = document.querySelectorAll(".slide_box");
const slideButton = document.querySelectorAll(".slide_button");
const slideLeft = document.querySelector(".slide_left");
const slideRight = document.querySelector(".slide_right");
let timer: NodeJS.Timer | undefined;
let index: number = 0;

const length: number = slideBox.length;

const slideIncrement = (): void => {
  index++;
  index = index === length ? 0 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const slideDecrement = (): void => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideBox[index].className = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideBox[preIndex].className = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideBox[preIndex2].className = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideBox[nextIndex].className = "slide_box next";
  changeSlideButton()
}

const changeSlideButton = (): void => {
  slideButton.forEach((item) => {
    item.className = "slide_button";
  });
  slideButton[index].className = "slide_button slide_button_focus";
}

const setTime = (): void => {
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
};

slideRight.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideIncrement()
});

slideLeft.addEventListener("click", () => {
  clearInterval(timer);
  setTime();
  slideDecrement()
});

setTime();
    
    `,VueTSCode:()=>`import { reactive } from "vue";

const slideArr: string[] = reactive([
  "slide_box active",
  "slide_box next",
  "slide_box",
  "slide_box",
  "slide_box pre",
]);

let timer: number | undefined;
let index: number = 0;

const length: number = slideArr.length;

const setTime = (): void => {
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
};

const slideIncrement = (): void => {
  index++;
  index = index === length ? 0 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const slideDecrement = (): void => {
  index--;
  index = index === -1 ? length - 1 : index;
  slideArr[index] = "slide_box active";
  const preIndex = index === 0 ? length - 1 : index - 1;
  slideArr[preIndex] = "slide_box pre";
  const preIndex2 = preIndex === 0 ? length - 1 : preIndex - 1;
  slideArr[preIndex2] = "slide_box";
  const nextIndex = index === length - 1 ? 0 : index + 1;
  slideArr[nextIndex] = "slide_box next";
};

const handldeSlideRight = (): void => {
  clearInterval(timer)
  slideIncrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

const handldeSlideLeft = (): void => {
  clearInterval(timer)
  slideDecrement()
  timer = setInterval(() => {
    slideIncrement()
  }, 3000);
}

setTime();`,ReactTSCode:()=>`
class Component extends React.Component {
  private timer: NodeJS.Timer | undefined;
  private slideIndex: number = 0;
  private slideArr: string[] = [
    "slide_box active",
    "slide_box next",
    "slide_box",
    "slide_box",
    "slide_box pre",
  ];

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      slideArr: this.slideArr,
    };
  }

  slideIncrement(): void {
    const slideDelete =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.updateSlide();
  }

  slideDecrement(): void {
    const slideDelete =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    this.slideArr[slideDelete] = "slide_box";
    this.slideIndex =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.updateSlide();
  }

  updateSlide(): void {
    this.slideArr[this.slideIndex] = "slide_box active";
    const slideNext =
      this.slideIndex === this.slideArr.length - 1 ? 0 : this.slideIndex + 1;
    const slidePre =
      this.slideIndex === 0 ? this.slideArr.length - 1 : this.slideIndex - 1;
    this.slideArr[slideNext] = "slide_box next";
    this.slideArr[slidePre] = "slide_box pre";
    this.setState({});
  }

  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
  }

  handleClickLeft(): void {
    clearInterval(this.timer)
    this.slideDecrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  handleClickRight(): void {
    clearInterval(this.timer)
    this.slideIncrement()
    this.timer = setInterval(() => {
      this.slideIncrement();
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="slide_component4_content">
          <div className={this.slideArr[0]}>1</div>
          <div className={this.slideArr[1]}>2</div>
          <div className={this.slideArr[2]}>3</div>
          <div className={this.slideArr[3]}>4</div>
          <div className={this.slideArr[4]}>5</div>
          <div className="slide_buttons">
            {this.slideArr.map((_, index) => {
              return (
                <div
                  className={
                    this.slideIndex === index
                      ? "slide_button slide_button_focus"
                      : "slide_button"
                  }
                  key={index}
                ></div>
              );
            })}
          </div>
          <div className="slide_left" onClick={() => {this.handleClickLeft()}}>
            <img src={img} alt="" />
          </div>
          <div className="slide_right" onClick={() => {this.handleClickRight()}}>
            <img src={img} alt="" />
          </div>
        </div>
      </>
    );
  }
}
  `}})]})]});class A extends C.Component{constructor(s){super(s);v(this,"timer");v(this,"slideIndex",0);v(this,"slideArr",["slide_box active","slide_box next","slide_box","slide_box","slide_box pre"]);this.state={slideArr:this.slideArr}}slideIncrement(){const s=this.slideIndex===0?this.slideArr.length-1:this.slideIndex-1;this.slideArr[s]="slide_box",this.slideIndex=this.slideIndex===this.slideArr.length-1?0:this.slideIndex+1,this.updateSlide()}slideDecrement(){const s=this.slideIndex===this.slideArr.length-1?0:this.slideIndex+1;this.slideArr[s]="slide_box",this.slideIndex=this.slideIndex===0?this.slideArr.length-1:this.slideIndex-1,this.updateSlide()}updateSlide(){this.slideArr[this.slideIndex]="slide_box active";const s=this.slideIndex===this.slideArr.length-1?0:this.slideIndex+1,r=this.slideIndex===0?this.slideArr.length-1:this.slideIndex-1;this.slideArr[s]="slide_box next",this.slideArr[r]="slide_box pre",this.setState({})}componentDidMount(){this.timer=setInterval(()=>{this.slideIncrement()},3e3)}componentWillUnmount(){clearInterval(this.timer)}handleClickLeft(){clearInterval(this.timer),this.slideDecrement(),this.timer=setInterval(()=>{this.slideIncrement()},3e3)}handleClickRight(){clearInterval(this.timer),this.slideIncrement(),this.timer=setInterval(()=>{this.slideIncrement()},3e3)}render(){return i(m,{children:n("div",{className:"slide_component4_content",children:[i("div",{className:this.slideArr[0],children:"1"}),i("div",{className:this.slideArr[1],children:"2"}),i("div",{className:this.slideArr[2],children:"3"}),i("div",{className:this.slideArr[3],children:"4"}),i("div",{className:this.slideArr[4],children:"5"}),i("div",{className:"slide_buttons",children:this.slideArr.map((s,r)=>i("div",{className:this.slideIndex===r?"slide_button slide_button_focus":"slide_button"},r))}),i("div",{className:"slide_left",onClick:()=>{this.handleClickLeft()},children:i("img",{src:p,alt:""})}),i("div",{className:"slide_right",onClick:()=>{this.handleClickRight()},children:i("img",{src:p,alt:""})})]})})}}const N=()=>n("div",{children:[n("div",{className:"component_big_title",children:["\u8F6E\u64AD\u56FE ",i("span",{children:"Slide"})]}),i(B,{}),i(f,{})]});export{N as default};
