let juso;       // 전체 주소 : juso2023
let si;         // 시 
let gu;         // 구
let dong;       // 동

// 시설유형
let equptype = {
    "노인시설":"001", // 옵션의 텍스트:value 값
    "복지회관":"002",
    "마을회관":"003", 
    "보건소":"004",
    "주민센터":"005",
    "면동사모소":"006",
    "종교시설":"007",
    "금융기관":"008", 
    "정자":"009", 
    "공원":"010", 
    "정자 파고라":"011",
    "공원":"012", 
    "교량하부":"013", 
    "나무그늘":"014", 
    "하천둔치":"015", 
    "기타":"099"
}; 

// Object 순회
console.log("--Object--");
console.log(equptype); // object -> key:value로 이루어져 있는 json형태의 데이터
console.log(equptype["노인시설"]);  // key값 쓰기 1, 배열의 인덱스처럼 사용
console.log(equptype.노인시설);     // key값 쓰기 2, '.'연산자로 접근

// Object는 전체순회할 때 forEach 사용하지 않음 -> array만 가능
// Object 순회
for(let k in equptype) { // in 하면 인덱스/key값이 나옴
    console.log(k,"=>", equptype[k]);
}

// Object 순회
for(let [k,v] of Object.entries(equptype)){ // Object.entries()를 key, value로 구조분해 -> 배열이 된다
    console.log(k,"=>", v);
}

// 주소데이터 가져오기
fetch('juso2023.json')
.then((resp) => resp.json()) // json으로 바꾸면
.then((data) => { // json으로 바뀐 데이터를 juso에 저장 -> 배열로 저장
    juso = data // 배열
    console.log(juso); // 패치를 먼저하고 콘솔에 출력

    // [ si 만들기 ]
    si = {}; // object로 만들고 싶다
    // juso 배열
    juso.forEach(element => {
        // console.log(element); // 전체가 나옴, 내가 필요한건 시도명칭, 시도코드
        let {시도명칭, 시도코드} = element; // 구조분해 
        if(!si[시도명칭]){ // si에 시도명칭 key가 없을 때
            console.log(시도명칭, 시도코드);
            si[시도명칭] = 시도코드;
        }
    });

    console.log(si);
})
.catch((err) => console.log(err));

console.log(juso); // 패치하는 동안 콘솔에 먼저 출력하기 때문에 undefined 찍힘
