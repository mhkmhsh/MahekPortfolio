document.getElementById("menu-btn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let button = document.getElementById("menu-btn");
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
});



document.addEventListener("DOMContentLoaded", ()=>{
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time)=>{
        lenis.raf(time*1000);

    });
    gsap.ticker.lagSmoothing(0);

const cardPositions = [
{top:"30%" , left:"55%"}
{top:"20%" , left:"25%"}
{top:"50%" , left:"10%"}
{top:"60%" , left:"40%"}
{top:"30%" , left:"30%"}
{top:"60%" , left:"60%"}
{top:"20%" , left:"50%"}
{top:"60%" , left:"10%"}
{top:"20%" , left:"40%"}
{top:"45%" , left:"55%"}
];
const imageContainer = document.querySelector(".images");
for(let i = 1; i<=10; i++){
    const card = document.createElement("div");
    card.className=`card card-${i}`;

    const img=document.createElement("img");
    img.src = `./assets/img${i}.jpeg`
}

})
https://www.youtube.com/watch?v=sRcH2BUatyQ