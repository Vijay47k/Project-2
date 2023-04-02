const btns=document.querySelectorAll(".btn");
const boxs=document.querySelectorAll(".box");
const search=document.querySelector("#search");


search.addEventListener("keyup",(e)=>{

    const searchText=e.target.value.toLowerCase().trim(); //get userinput
    // search product
    boxs.forEach((box)=>{
        const data=box.dataset.item; // filter box item value
        if(data.includes(searchText)){
            box.style.display="block";
        }
        else{
            box.style.display="none";
        }
    })
    
    btns.forEach((btn)=>{
        btn.classList.remove("btn-clicked");
    })
    btns[0].classList.add("btn-clicked");
});


btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        setActive(e);

     const btnfilter=e.target.dataset.filter;  
     boxs.forEach((box)=>{
        if(btnfilter=="all"){
            box.style.display="block";;
        }
        else{
            const boxfilter=box.dataset.item;
            if(btnfilter==boxfilter){
                box.style.display="block";;
            }
            else{
                box.style.display="none";;
            }
        }
     })
    })
})
// setActive
function setActive(e){
    btns.forEach((btn)=>{
        btn.classList.remove("btn-clicked"); //remove all the btns "clicked state"
    })
    e.target.classList.add("btn-clicked");
}

// Gif Loader
setTimeout(()=>{
    document.querySelector(".loader").style.top="-10000px"
},4000)

// carousal 

const carousalItems = document.querySelectorAll(".item")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let slidePosition = 0;
let totalsliders = carousalItems.length;

function upadteposition() {
    carousalItems.forEach((slide) => {
            slide.classList.remove("active")
            slide.classList.add("hidden")
        })

    carousalItems[slidePosition].classList.add("active")
}

prevBtn.addEventListener("click", () => {

    upadteposition();
    if (slidePosition == 0) {
        slidePosition = totalsliders - 1;
    } else {
        slidePosition--;
    }
})
nextBtn.addEventListener("click", next())

function next() {
    upadteposition();
    if (slidePosition == totalsliders - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
}
setInterval(() => {
    next()
}, 3000);
