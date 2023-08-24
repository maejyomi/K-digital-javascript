document.addEventListener("DOMContentLoaded", () => {

});

const dice = () => {
    let n = Math.floor((Math.random()*6)+1);
    console.log(n);

    const imgdiv = document.querySelector("#imgdiv");
    imgdiv.innerHTML = `<img src='./images/${n}.png'>`;
}