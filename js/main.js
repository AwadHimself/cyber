let nav= document.querySelector(".header .nav");
let burger = document.querySelector(".burger");
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let newArrivalPag = document.querySelectorAll(".new-arrival-icon");
let newArrivalContainer = document.querySelector(".new-arrival-container");
let bullets = document.querySelectorAll(".bullet");
let featuredContainer = document.querySelector(".featured-container")
let dealContainer = document.querySelector(".deal");
let dealInfoContainer = document.querySelector(".deal-info-container");
let dealInfo = document.querySelectorAll(".deal-info");
let dealpicContainer = document.querySelector(".deal-img");
let dealpics = Array.from(dealpicContainer.children);




function navTogler() {
    nav.classList.toggle("extend")
  }


fetch("js/date.json")
  .then(response => response.json())
  .then(myData => {
    let numsOfProd = myData.products.length
    document.documentElement.style.setProperty('--numOfProd', myData.products.length);
    for(i=0; i<myData.products.length; i++){
        let item = document.createElement('div');
        item.classList.add("item");
        
        let img = document.createElement('img');
        img.src=(myData.products[i].image);
        
        let introduce = document.createElement('div');
        introduce.classList.add("introduce");

        let title = document.createElement('div');
        title.classList.add("title")
        let titleText = document.createTextNode(myData.products[i].introduce.title);
        title.appendChild(titleText);

        let topic = document.createElement('div');
        topic.classList.add("topic");
        let topicText = document.createTextNode( myData.products[i].introduce.topic);
        topic.appendChild(topicText);


        let des = document.createElement('div');
        des.classList.add("des");
        let desText = document.createTextNode( myData.products[i].introduce.description);
        des.appendChild(desText);


        let btn = document.createElement("button");
        btn.classList.add("seeMore");
        btn.innerHTML = "SEE MORE ↗";
        btn.onclick = function () {
            carousel.classList.add('show-detail');
        };


        introduce.append(title, topic, des, btn);


        let detail = document.createElement('div');
        detail.classList.add("detail");

        let dTitle = document.createElement('div');
        dTitle.classList.add("title")
        let dTitleText = document.createTextNode(myData.products[i].detail.title);
        dTitle.appendChild(dTitleText);

        let dDes = document.createElement('div');
        dDes.classList.add("des");
        let dDesText = document.createTextNode( myData.products[i].detail.description);
        dDes.appendChild(dDesText);

        let specifications = document.createElement("div")
        specifications.classList.add('specifications')
        let specificationsKeys = Object.keys(myData.products[i].detail.specifications);
        let specificationsValues = Object.values(myData.products[i].detail.specifications);

        for (x=0; x<specificationsKeys.length ; x++){
            let div = document.createElement("div");
            let p1 = document.createElement("p");
            p1.innerHTML= specificationsKeys[x];
            let p2 = document.createElement("p");
            p2.innerHTML= specificationsValues[x];
            div.appendChild(p1);
            div.appendChild(p2)
            specifications.appendChild(div);
        }

        let checkOut= document.createElement("div");
        checkOut.classList.add("checkout");
        let btn1 = document.createElement("button");
        btn1.innerHTML = "ADD TO CART";
        let btn2 = document.createElement("button");
        btn2.innerHTML = "CHECKOUT";

        checkOut.append(btn1 , btn2);


        detail.append(dTitle,dDes,specifications,checkOut);
        

        item.append(img,introduce,detail)
        listHTML.appendChild(item)
        
    }
    backButton.onclick = function () {
        carousel.classList.remove('show-detail');
    };

    //featured produtcs date
    for(i=0 ; i< myData.featured_products.length ; i++){

        let featuredItem = document.createElement("div");
        featuredItem.classList.add("f-item", "col-lg-3", "col-md-6", "col-sm-12", "bg-white", "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-2", "position-relative", "item-discount");
        let eye = document.createElement("i");
        eye.classList.add("eye" ,"fa-solid", "fa-eye");
        let featuredProdImge = document.createElement("img");
        featuredProdImge.src = `assets/item${i+1}.png`
        let featuredProdName = document.createElement("p");
        featuredProdName.innerHTML= myData.featured_products[i].title;
        let rateDiv = document.createElement("div");
        for(x=0 ; x<5 ; x++){
            let star = document.createElement("i")
            if(x < myData.featured_products[i].rating ){
                star.classList.add("fa-solid" , "fa-star" , "star")
                star.style.color = "gold"
            }else{
                star.classList.add("fa-regular" , "fa-star" , "star-off")
            }
            rateDiv.appendChild(star);
        }
        let price = document.createElement("div");
        price.classList.add("price" , "d-flex" , "justify-content-between" ,  "gap-2" , "pb-5"); 
        let orignalPrice = document.createElement("span");
        orignalPrice.classList.add("original");
        let descountPrice = document.createElement("span");
        descountPrice.classList.add("discount");
        if(myData.featured_products[i].discount_price){
            orignalPrice.innerHTML = myData.featured_products[i].price;
            descountPrice.innerHTML = myData.featured_products[i].discount_price;
            featuredItem.classList.add("item-discount");
        }else{
            orignalPrice.innerHTML = myData.featured_products[i].price;
            featuredItem.classList.remove("item-discount");
            descountPrice.remove();
        }
        price.append(orignalPrice , descountPrice);
        let addCart = document.createElement("button");
        addCart.classList.add("add-cart");
        addCart.innerHTML = "ADD TO CART";
        
        featuredItem.append(eye , featuredProdImge , featuredProdName , rateDiv , price , addCart);
        featuredContainer.appendChild(featuredItem)

    }

    //new arrival item

    let mobiles = myData.newArrivalProducts.mobiles;
    let smartWatches = myData.newArrivalProducts.smartWatches;
    let headphones = myData.newArrivalProducts.headphones;
    let cameras = myData.newArrivalProducts.cameras;
    
    let arrNewArrival = [mobiles , smartWatches,cameras, headphones ];

    for (let i = 0; i < mobiles.length; i++) {
        let pagList = document.createElement("div");
        pagList.classList.add("pag-list");
    

        let newArrivalItem = document.createElement("div");
        newArrivalItem.classList.add(
            "new-arrival-item", "col-lg-4", "col-md-6", "col-sm-12",
            "bg-white", "d-flex", "flex-column", "justify-content-center",
            "align-items-center", "gap-2", "position-relative"
        );


        // eye icon
        let eye = document.createElement("i");
        eye.classList.add("eye", "fa-solid", "fa-eye");
        for(y=0 ; y<= 3 ; y++){
        let Data = arrNewArrival[y][i];
        // card content
        let mobileItem = document.createElement("div");
        mobileItem.classList.add(
            "mobile-item", "new-arrival-card", "d-flex", "flex-column",
            "align-items-center", "justify-content-center", "gap-2"
        );

        let mobileItemImge = document.createElement("img");
        mobileItemImge.style.width = "160px";
        mobileItemImge.style.height = "200px";
        mobileItemImge.src = `${Data.image}.png`;

        let mobileItemName = document.createElement("p");
        mobileItemName.innerHTML = Data.title;

        let rateDiv = document.createElement("div");
        for (let x = 0; x < 5; x++) {
            let star = document.createElement("i");
            if (x < Data.rating) {
                star.classList.add("fa-solid", "fa-star", "star");
                star.style.color = "gold";
            } else {
                star.classList.add("fa-regular", "fa-star", "star-off");
            }
            rateDiv.appendChild(star);
        }

        // price section
        let price = document.createElement("div");
        price.classList.add("price", "d-flex", "justify-content-between", "gap-2", "pb-5");

        let orignalPrice = document.createElement("span");
        orignalPrice.classList.add("original");
        orignalPrice.innerHTML = Data.price;

        let descountPrice = document.createElement("span");
        descountPrice.classList.add("discount");

        if (Data.discount_price) {
            descountPrice.innerHTML = Data.discount_price;
            newArrivalItem.classList.add("item-discount");
        }

        price.append(orignalPrice);
        if (Data.discount_price) price.append(descountPrice);

        mobileItem.append(mobileItemImge, mobileItemName, rateDiv, price);

        // pagination container (for styling maybe)
        pagList.appendChild(mobileItem);
        newArrivalItem.append(eye, pagList);
        
        }



        // add to cart button
        let addCart = document.createElement("button");
        addCart.classList.add("add-cart");
        addCart.innerHTML = "ADD TO CART";

        newArrivalItem.append(addCart);

        // append to container
        newArrivalContainer.appendChild(newArrivalItem);
    }



    })
  .catch(error => console.error("Error fetching data:", error));

  const pagListfun = () =>{
    let newArrivalPag = document.querySelectorAll(".new-arrival-icon");
    let pagList = document.querySelectorAll(".pag-list");

    newArrivalPag.forEach((e,index) => {
        e.classList.remove("active");
        newArrivalPag[0].classList.add("active");
        e.onclick = ()=>{
            newArrivalPag.forEach(el => el.classList.remove("active"));
            e.classList.add("active");
            pagList.forEach(el => {
                el.classList.forEach(className => {
                    if (className !== "pag-list") {
                        el.classList.remove(className);
                    }
                });
            });        
            pagList.forEach(el => el.classList.add(`catg-${index + 1}`));
        }  
    });    
}
window.onload = pagListfun;






nextButton.onclick= function(){
    showslider('next');
}
prevButton.onclick= function(){
    showslider('prev');
}

const showslider = (type) => {
    carousel.classList.remove('next','prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type==='next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
    }else{
        let lastPositionn = items.length-1
        listHTML.prepend(items[lastPositionn]);
        carousel.classList.add("prev");
    }
}





let currentActiveIndex = 0;

const updateClasses = () => {
    bullets.forEach(b => b.classList.remove("active", "b-prev", "b-next"));
    
    if (bullets.length > 0) {
        bullets[currentActiveIndex].classList.add("active");
    }
    
    setPrevNextClasses();
};

const setPrevNextClasses = () => {
    bullets.forEach(b => b.classList.remove("b-prev", "b-next"));
    
    for (let i = 0; i < currentActiveIndex; i++) {
        bullets[i].classList.add("b-prev");
    }
    
    for (let i = currentActiveIndex + 1; i < bullets.length; i++) {
        bullets[i].classList.add("b-next");
    }
};


const handleBulletClick = (clickedIndex) => {
    dealContainer.classList.remove("next", "prev");
    if (clickedIndex === currentActiveIndex) return;
    isAnimating = true;
    const isNext = clickedIndex > currentActiveIndex;
    const isPrev = clickedIndex < currentActiveIndex;
    let images = document.querySelectorAll('.deal-img img');

    if (isNext) {
        let dealsNum = 4
        for(i=0 ; i<dealsNum ; i ++){
            dealContainer.classList.remove(`deal-${i+1}N`, `deal-${i+1}P`);
            if(clickedIndex==i){dealContainer.classList.add(`deal-${i+1}N`)}
        }
        setTimeout(() => {
            currentActiveIndex = clickedIndex;
            updateClasses();            
        }, 200); 
    } else if (isPrev) {   
        let dealsNum = 4
        for(i=0 ; i<dealsNum ; i ++){
            dealContainer.classList.remove(`deal-${i+1}N`, `deal-${i+1}P`);
            if(clickedIndex==i){dealContainer.classList.add(`deal-${i+1}P`)
            }
        }     
        setTimeout(() => {
            currentActiveIndex = clickedIndex;
            updateClasses();            
        }, 200);
    }
};


const setupBulletClicks = () => {
    bullets.forEach((bullet, index) => {
        bullet.onclick = () =>{
            handleBulletClick(index);       
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    updateClasses();
    setupBulletClicks();
});



document.addEventListener('DOMContentLoaded', function() {
    
    const endDates = [
        new Date().setDate(new Date().getDate() + 3), 
        new Date().setHours(new Date().getHours() + 6),
        new Date().setHours(new Date().getHours() + 24),
        new Date().setHours(new Date().getHours() + 100),
    ];

    
    const countdowns = document.querySelectorAll('.deal-info');
    
    countdowns.forEach((deal, index) => {
        const countdownElements = deal.querySelectorAll('.count-down > div > span:last-child');
        
        function updateCountdown() {
            const now = new Date();
            const diff = endDates[index] - now;
            
            if (diff <= 0) {
                deal.querySelector('.count-down').innerHTML = '<div style="color:red;font-weight:bold;">EXPIRED</div>';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
            
            countdownElements[0].textContent = days;
            countdownElements[1].textContent = hours;
            countdownElements[2].textContent = minutes;
            countdownElements[3].textContent = seconds;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
});