document.addEventListener("DOMContentLoaded", () => {
   /* index2.html js코드
    // 버튼 가져오기
    const bts = document.querySelectorAll("button");
    console.log(bts);

    // 각 버튼에 이벤트 달기
    bts.forEach((item) => {
        console.log(item);
        item.addEventListener('click', () =>{ // 이벤트리스너 추가, 클릭하면 함수 호출
            dice2(parseInt(item.textContent)); // text타입이랑 dice2(seln)의 seln은 타입이 달라서 무조건 틀림 -> 형변환 필요
        })
    }) 
    */

    // index3.html js 코드 - radio 버튼 활용
    // 확인버튼 가져오기
    const bt = document.querySelector("button");
    const radios = document.querySelectorAll("input[type=radio]");
    bt.addEventListener('click', ()=>{
        for(let item of radios) {
            if(item.checked){
                // console.log(item.value);// check된 value만 출력
                dice2(parseInt(item.value));
                break; 
            }
        }
    })

});

// 주사위 보기
const dice = () => {
    let n = Math.floor((Math.random()*6)+1);
    console.log(n);

    const adiv = document.querySelector("#adiv");
    adiv.innerHTML = `<img src='./images/${n}.png'>`;
}

// 버튼 클릭시 주사위 보기, onclick, id 사용
const dice2 = (seln) => {
    // 주사위 숫자 1~6
    let n = Math.floor(Math.random()*6)+1;

    // 주사위 이미지 위치
    // const adiv = document.getElementById("adiv");
    const adiv = document.querySelector('#adiv');
    adiv.innerHTML = `<img src='./images/${n}.png'>`;
    // HTML 태그를 안에 넣기
    // 변수를 넣어서 HTML 넣고 싶을 때 백틱 ``

    // 결과 출력을 위한 위치
    const h2 = document.querySelector("hgroup > h2");
    
    if(n === seln) {
        h2.style.color = "red"; // css 제어
        h2.textContent = "맞음(승)";
    }
    else {
        h2.style.color = "blue";
        h2.textContent = "틀림(패)";
    }
}
