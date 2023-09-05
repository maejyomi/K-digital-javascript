// 회문처리
const palindrome = (str) => {
    // 문자열 처리
    console.log("문자열 길이:",str.length);
    
    // 문자열이 없을 경우
    if(str.length == 0) return;

    // 회문 확인 case:1
    /*
    s="";
    for(let i=str.length-1; i>=0; i--){
        s+=str[i];
    }
    if(str === s) txt2.value = "회문입니다.";
    else txt2.value = "회문이 아닙니다.";
    */

    // 회문 확인 case:2
    s = str.split("").reverse().join("");

    if(s === str) txt2.value = "회문입니다."
    else txt2.value = "회문이 아닙니다."
}

// 숫자합계
const numSum = (item) => {
    let result = 0;

    for(i of item){
        if(!isNaN(i)) result += parseInt(i);
    }
    txt2.value = result;
    
}


document.addEventListener("DOMContentLoaded", () => {
    let arr = []; // 배열 선언

    const bts = document.querySelectorAll("input[type=button]");
    const txt1 = document.querySelector("#txt1");
    const rbt = document.querySelector("input[type=reset]");
    rbt.addEventListener('click', ()=>{
        // 배열 내용 지우기
        arr.length = 0;
        // arr = []; 
    });
    
    txt1.addEventListener('click', () => {
        txt1.value="";
        txt2.value="";
    })

    bts.forEach((item) =>{
        item.addEventListener('click', ()=>{
            if(item.value == "회문확인") palindrome(txt1.value);
            else numSum(txt1.value);
        })
    });

    // 배열 확인
    
    const bt1s = document.querySelectorAll(".bt1");
    bt1s.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // 새로고침이 안 되게 하는 것
            
            switch(item.textContent){
                case '사과' : arr.push('🍎'); break;
                case '바나나' : arr.push('🍌'); break;
                case '당근' : arr.push('🥕'); break;
                case '수박' : arr.push('🍉'); break;
            }
            txt1.value = arr.join(',');
        });
    });

    const bt2s = document.querySelectorAll(".bt2");
    bt2s.forEach((item)=> {
        item.addEventListener('click', (e) =>{
            e.preventDefault();
            switch(item.textContent){
                case '사과삭제' : 
                    arr = arr.filter((item)=> item != '🍎'); // 골라내주는 것 != 이니까 사과가 아닌것만 골라줌
                    break;
                case '바나나삭제' : 
                    arr = arr.filter((item) => item != '🍌'); 
                    break;
                case '당근삭제' : 
                    arr = arr.filter((item) => item != '🥕');
                    break;
                case '수박삭제' : 
                    arr = arr.filter((item) => item!='🍉'); break;
            }
            console.log(arr.join());
            txt1.value = arr.join(',');
        });
    });

    const bt3s = document.querySelectorAll(".bt3");
    bt3s.forEach((item)=> {
        item.addEventListener('click', (e) =>{
            e.preventDefault();
            switch(item.textContent.slice(0,2)){
                case '사과' : 
                    arr = arr.map((item)=> item === '🍎' ? '🥒' : item); 
                    break;
                case '바나' : 
                    arr = arr.map((item) => item === '🍌'? '🥦':item); 
                    break;
                case '당근' : 
                    arr = arr.map((item) => item === '🥕'?'🍊': item);
                    break;
                case '수박' : 
                    arr = arr.map((item) => item ==='🍉'?'🍇': item); 
                    break;
            }
            console.log(arr.join());
            txt1.value = arr.join(',');
        });
    });
});