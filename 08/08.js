const getData = (dt, divCon, sel1) => {
    // 데이터 가져오기

    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let tDt = dt.value.replaceAll('-', ""); // replace만 하면 하나만 변경 

    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    url = url + `?key=${apikey}`;
    url = url + `&targetDt=${tDt}`;

    console.log(sel1.value);
    if(sel1.value !== 'T') url = url + `&multiMovieYn=${sel1.value}`;

    fetch(url)
        .then((resp) => resp.json()) // 가지고 온 데이터를 json타입으로 변경 
        .then((data) => {
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList; // prototype 배열
            console.log(dailyBoxOfficeList);
            let conTag = `<table>
            <thead>
                <tr>
                    <th scope="col">순위</th>
                    <th scope="col">영화명</th>
                    <th scope="col">개봉일</th>
                    <th scope="col" class="right">매출액</th>
                    <th scope="col" class="right">누적매출액</th>
                    <th scope="col" class="right">누적관객수</th>
                </tr>
            </thead>
        <tbody>`;

            for (let item of dailyBoxOfficeList) {
                let salesAmt = parseInt(item.salesAmt).toLocaleString();
                let salesAcc = parseInt(item.salesAcc).toLocaleString();
                let audiAcc = parseInt(item.audiAcc).toLocaleString();

                let addTxt = ""
                let num = item.rankInten;
                
                if (num == 0) {
                    addTxt = "(―)";
                } else if (num > 0) {
                    addTxt = "(▲)";
                } else {
                    addTxt = "(▼)";
                }

                conTag = conTag + `<tr>
            <td><span class="rankimg">${addTxt}</span>${item.rank}</td>
            <td><a onclick="show(${item.movieCd});" href="#">${item.movieNm}</a></td>
            <td>${item.openDt}</td>
            <td><span class="num">${salesAmt}</span></td>
            <td><span class="num">${salesAcc}</span></td>
            <td><span class="num">${audiAcc}</span></td></tr>`;
            }

            divCon.innerHTML = conTag + "</tbody></table>";

            

        })
        .catch((err) => console.log(err)); // then then에서 오류가 났을때 처리
}

const show = (cd) =>{
    const divDetail = document.querySelector(".detail");
    console.log(cd);
    
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json"
    url = url + `?key=${apikey}`
    url = url + `&movieCd=${cd}`;

   
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        let movieInfoResult = data.movieInfoResult;
        console.log(movieInfoResult.movieInfo);
        
        let mInfo = movieInfoResult.movieInfo;
        conTag = `<hgroup><h2>${mInfo.movieNm}</h2>${mInfo.movieNmEn}<h3></h3><hgroup>
        <div>
        <p></p>    
        <p><strong>코드</strong> : ${mInfo.movieCd}</p>
            <p><strong>장르</strong> : `;

        mInfo.genres.forEach((item) => {
            conTag+=item.genreNm + " | ";
        }); // 장르
        conTag = conTag+`<p><strong>감독</strong> : `;

        mInfo.directors.forEach((item)=>{
           conTag+=item.peopleNm + " | ";
        })
        conTag = conTag + "</p><p><strong>배우</strong> : ";
        mInfo.actors.forEach((item)=>{
            conTag += item.peopleNm + " | ";
        })

        divDetail.innerHTML = conTag + `</p></p><p><strong>개봉일</strong> : ${mInfo.openDt}</p></div>`;
    })
    
}

document.addEventListener("DOMContentLoaded", () => {
    const dt = document.querySelector("#dt1");
    const divCon = document.querySelector("#divCon");
    const sel1 = document.querySelector("#sel1");
    

    // 날짜 변경시 날짜 가져오기
    dt.addEventListener('change', () => {
        getData(dt, divCon, sel1);
    });

    // 영화구분
    sel1.addEventListener('change', ()=>{
        if(dt.value){
            getData(dt, divCon, sel1);
            console.log(dt.log);
        }
    });
});