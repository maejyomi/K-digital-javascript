// DOM 생성
const domCreate = () => {
    /*
    console.log("dom 생성");
    const myh2 = document.createElement("h2");
    const myh2Txt = document.createTextNode("자바스크립트 생성");

    myh2.appendChild(myh2Txt);
    document.getElementById("adiv").append(myh2);
    */

    // 버튼 생성
    const mybutton = document.createElement("button");
    const mybuttonTxt = document.createTextNode("사과");

    mybutton.appendChild(mybuttonTxt);
    document.getElementById("adiv").append(mybutton);
}

// DOM 읽기
const domRead = () => {
    const myh1 = document.querySelector("h1");

    console.log("innerHTML => ", document.querySelector("h1").innerHTML);
    console.log("innerText => ", document.querySelector("h1").innerText);
    console.log("textContent => ", document.querySelector("h1").textContent);
}

// DOM 수정
const domUpdate = () => {
    /*
    const myh2 = document.querySelector("h2");
    if (myh2) {
        myh2.innerHTML = "<h3>자바스크립트 수정</h3>";
        //myh2.textContent = "<h3>자바스크립트 수정</h3>";
    }
    */
   
    // 버튼 수정
    const mybutton2 = document.querySelector("button");
    if (mybutton2) {
        mybutton2.textContent = "바나나";
    }

}

// DOM 삭제
const domDelete = () => {
    /*
    const myh2 = document.querySelector("h2");
    if (myh2) {
        console.log("myh2", myh2);
        myh2.remove();
    }
    */

    // 버튼 삭제
    const mybutton = document.querySelector("button");
    if (mybutton) {
        mybutton.remove();
    }

}