let juso;       // 전체 주소 : juso2023
let si;         // 시 
let gu;         // 구
let dong;       // 동

// 시설유형
let equptype = {
    "노인시설":"001",
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

const show = async(areaCd, equptypeCd, h2) =>{
    const viewTb = document.querySelector("#viewTb");
    let conTag =`<table><thead><tr>
        <th>시설이름</th>    
        <th>주소</th>  
        <th>전화번호</th>
        <th>사용 가능 여부</th>
    </tr></thead><tbody>`;

    let url = "https://apis.data.go.kr/1741000/HeatWaveShelter2/getHeatWaveShelterList2";
    let apikey = "TXiX77HLlCsqLjm0KKb3WvOUucoIxj55VKolbgCr51UgnxyfhLwJgQkvGnmB6XWUp14OZc42Lejma%2FHo26mVzw%3D%3D";
    let pageNo = 1;
    let numOfRows = 10;
    let type = "json";
    let year = 2023;

    url = url + `?serviceKey=${apikey}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=${type}&year=${year}&areaCd=${areaCd}&equptype=${equptypeCd}`;
    console.log(url);
    const resp = await fetch(url);
    let info = await resp.json();

   
    if(info.RESULT){ 
        h2.innerHTML = `<strong class='h2Sel1'>${info.RESULT.resultMsg}</strong>`;
        viewTb.innerHTML = "";
        return;
    }
    h2.innerHTML = "";
    h2.innerHTML = h2.innerHTML + `totalCount: ${info["HeatWaveShelter"][0]["head"][0]["totalCount"]}`;
    let resultInfo = info.HeatWaveShelter[1].row; // 접근할 때 -> 배열 [], 오브젝트 '.'/[""]
    console.log(resultInfo);
    resultInfo.forEach(item =>{
        conTag = conTag+`<tr>
        <td>${item.restname}</td>
        <td>${item.restaddr}</td>
        <td>${item.mngdptCd}</td>
        <td>${item.useYn}</td></tr>`

        console.log(item.restname); // 시설이름
        console.log(item.restaddr); // 주소
        console.log(item.mngdptCd) // 전화번호
        console.log(item.useYn); // 사용가능 여부
    })
    viewTb.innerHTML = conTag + "</tbody></table>";
    
}

// select box 채우기
const addOption = (d, s) => { // d: data , s: select box
    for (let [k,v] of Object.entries(d)){
        // console.log(k, v);
        const option = document.createElement("option");
        option.value = v;
        option.text = k;
        s.appendChild(option);
    }
}

const deleteOption = (s, firstS) => {
    while(s.hasChildNodes()){
        s.removeChild(s.firstChild);
    }
    const option = document.createElement("option");
        option.value = 0;
        option.text = firstS;
        s.appendChild(option);
}

const getDong = (num1, num2) => {
    dong = {};
    juso.filter(item => item["시도코드"] == num1 && item["시군구코드"] == num2).forEach(item => {
        let {읍면동코드, 읍면동명칭} = item;
        if(!dong[읍면동명칭]) dong[읍면동명칭] = 읍면동코드;
    })
    addOption(dong, sel3);

}

const getGu = (num) => {  
    gu = {};
    juso.filter(item => item["시도코드"] == num).forEach(item => {
        let {시군구코드, 시군구명칭} = item;
        if(!gu[시군구명칭]) gu[시군구명칭] = 시군구코드;
    });

    addOption(gu, sel2);
    
}

// 주소 정보 가져오기
const getJuso = async(sel1) => { // 비동기함수 async 
    const resp = await fetch("juso2023.json");  // fetch .then .then과 같은 코드인데 async - await 구문으로 작성한 것
    // const data = await resp.json();
    // juso = data; 이렇게도 가능
    juso = await resp.json(); // 위의 두 줄 이렇게도 가능
    console.log(juso);
    
    si = {};
    juso.forEach(element => {
        let {시도명칭, 시도코드} = element; 
        if(!si[시도명칭]){
            console.log(시도명칭, 시도코드);
            si[시도명칭] = 시도코드;
        }
    });
    addOption(si, sel1);
}




document.addEventListener("DOMContentLoaded", ()=>{
    // 컴포넌트 가져오기
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const sel3 = document.querySelector("#sel3");
    const sel4 = document.querySelector("#sel4");
    const bt = document.querySelector("#bt");
    const myh2 = document.querySelector("h2");
    

    // 시 정보
    getJuso(sel1);    

    // 구 정보
    sel1.addEventListener('change',()=>{
        deleteOption(sel2, "--구선택--");
        deleteOption(sel3, "--동선택--");
        
        myh2.innerHTML = "";
        getGu(sel1.value);
    });

    sel2.addEventListener('change', () =>{
        deleteOption(sel3, "--동선택--");

        myh2.innerHTML = "";
        getDong(sel1.value, sel2.value);
    });

    addOption(equptype, sel4);
   
    bt.addEventListener('click', (e)=>{
        e.preventDefault();
        if(sel1.value==0 ||sel2.value==0 ||sel3.value==0 || sel4.value == 0){
            myh2.innerHTML = `<span class='h2Sel1'>옵션을 선택해주세요.</span>`;
            return;
        }
         else{
            let areaCd = sel1.value+sel2.value+sel3.value+"00";
            let equptypeCd = sel4.value;
            console.log(areaCd);
            console.log(equptypeCd);
            show(areaCd, equptypeCd, myh2);

        }
        
        
    });
})

