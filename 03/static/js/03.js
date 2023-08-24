document.addEventListener("DOMContentLoaded", () => {

    const bt1 = document.querySelector("#bt1");
    console.log(bt1.textContent);
    // const bt1 = document.getElementByID("#bt1");

    const bt2 = document.querySelector("footer > div");
    console.log(bt2);
    console.log(bt2.textContent);

    const bt = document.querySelectorAll("footer button");
    console.log(bt);

    // 변수 선언
    // 기존 선언 방법
    console.log(x);
    var x = 10;
    console.log(x);

    // 최근 변수 선언방법
    // console.log(esx); 오류
    let esx = 10;
    console.log(esx);


    // nodelist 순회
    // 1. 전통적인 for
    console.log("1. 전통적인 for")
    for (let i = 0; i < bt.length; i++) {
        console.log(bt[i]);
    }

    // 2. for..in : 키순회
    console.log("2.for..in : 키순회")
    for (let i in bt) {
        console.log(i, bt[i]);
    }

    // 3. arr순회
    console.log("3. arr순회");
    bt.forEach((i) => console.log(i))
    bt.forEach((i, idx) => console.log(idx, i))

    // 4. for .. of 순회
    console.log("4. for..of 순회");
    for (let i of bt) {
        console.log(i); // i 자체가 컴포넌트
    }

    for (let [idx, i] of bt.entries()) { // 엔트리가 가지고 있는 값을 두 개로 나눠서 저장
        console.log(idx, i); // 인덱스랑 컴포넌트 함께 출력
    }

    console.log("버튼의 캡션 값 가져오기");
    let s = "<ul>";

    for (let i of bt) {
        s = s + "<li>" + i.getAttribute("id") + " : " + i.textContent + "</li>" + " ";
    }
    console.log(s);
    document.querySelector("#adiv").innerHTML = s + "</ul>";

});