const toggle = (v1, v2, v3, v4) => {
    txt1.value = "";
    txt2.value = "";
    sel1.value = v1;
    sel2.value = v2;
    div1.textContent = v3;
    div2.textContent = v4;
}

const cTof = (num) => {
    txt2.value = (num*(9/5))+32;
}

const fToc = (num) => {
    txt2.value = (num-32)*(5/9);
}

document.addEventListener("DOMContentLoaded", () =>{
    // 내가 제어해야하는 컴포넌트
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    
    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    // select box1 제어
    sel1.addEventListener('change', () => {
        if(sel1.value === "C") toggle("C","F","℃","℉");
        else toggle("F","C","℉","℃"); 
    });

    // select box2 제어
    sel2.addEventListener('change', () => {
        if(sel2.value === "C") toggle("F","C","℉","℃");
        else toggle("C","F","℃","℉");
    });

    // 온도 입력
    txt1.addEventListener('input', () =>{
        if(sel1.value === "C") cTof(parseFloat(txt1.value));
        else fToc(parseFloat(txt1.value));
    })
});