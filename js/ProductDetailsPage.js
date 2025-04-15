let mainImg = document.querySelector(".prod-imges .main-img img")
let subImgs = document.querySelectorAll(".prod-imges .sub-imgs img")
let colors = document.querySelectorAll(".colors span")
let memoryTabs = document.querySelectorAll(".memory-tabs p")



// handle active class function
function handleActiveclasses (eles){
    eles.forEach(ele => {
        ele.addEventListener('click', function(){
            eles.forEach(e => e.classList.remove('active'));
            ele.classList.add('active');
        })
    });
}
handleActiveclasses(colors)
handleActiveclasses(memoryTabs)

// handle sub imgs and slider
function slider(){
    handleActiveclasses(subImgs)
    subImgs.forEach(img => {
        img.addEventListener("click" , ()=>{
            mainImg.src = img.src 
        })
    });
}

slider()