document.addEventListener("DOMContentLoaded", ()=>{
// 내가 짠 코드
    const bt = document.querySelector("button");
    const divs = document.querySelectorAll(".row > div");

    let arr = [];
    let flag = false;
    let flag2 = true;
    
    bt.addEventListener('click', (e) =>{
        arr.length = 0;
        
        flag = false;
        if(flag2){
            for(let i=0; i<divs.length; i++){
                divs[i].innerHTML = i+1;
                let n = Math.floor((Math.random()*2)); // 0, 1값 생성
                if(n==0){
                    arr.push(0);
                } else{
                    flag == true? arr.push(0) : arr.push(1);
                    flag = true;
                }
            }
            flag2 = false;
            console.log(arr);
        }
        
    })
    
    let count = 0;
    divs.forEach((item) =>{
        item.addEventListener('click', (e) => {
            let idx = parseInt(item.textContent)-1;
            if(arr[idx] == 1 && flag2==false){
                item.innerHTML = "<img src='./images/boom.png'>";
                flag2 = true;
                
            } else if(arr[idx] == 0 && flag2==false) {
                item.innerHTML = "<img src='./images/hart.png'>";
                count++;
                
               
            }
        })
    })

});