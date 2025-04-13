let nav= document.querySelector(".header .nav");
let brandFilter = document.querySelector(".brand-results");
let filterRresults = document.querySelectorAll(".results");
let checkbox;


function navTogler() {
    nav.classList.toggle("extend")
  }

  fetch("js/mobiles_20.json")
  .then(response => response.json())
  .then(mobiles => {

    let mobileBrands = new Set();
    let mobileBatteryCapacity = new Set();
    let mobileScreenType = new Set();
    let mobileScreenDiagonal = new Set();
    let mobileBuiltInMemory = new Set();
    mobiles.forEach(mobile => {
        mobileBrands.add(mobile.Brand); 
        mobileBatteryCapacity.add(mobile.BatteryCapacity); 
        mobileScreenType.add(mobile.ScreenType); 
        mobileScreenDiagonal.add(mobile.ScreenDiagonal); 
        mobileBuiltInMemory.add(mobile.BuiltInMemory); 
    });
    let sortedBatteryCapacity = Array.from(mobileBatteryCapacity).sort((a, b)=> {
        let numA = parseInt(a);
        let numB = parseInt(b);
        return numB - numA;
      });
    let sortedScreen = Array.from(mobileScreenDiagonal).sort((a, b)=> {
        let numA = parseFloat(a);
        let numB = parseFloat(b);
        return numB - numA;
      });



    let mobileFilters = [mobileBrands, sortedBatteryCapacity, mobileScreenType, sortedScreen, mobileBuiltInMemory];
    for(i=0 ; i<mobileFilters.length ; i++){
        mobileFilters[i].forEach(brand => {
            let Filter = document.createElement("div");
            Filter.classList.add("filter", `filter-${brand.replaceAll(' ','-')}` ,"flex", "justify-start", "gap-2", "items-center", "pt-3");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox")
            checkbox.id = brand;
            checkbox.value = brand;
            let label = document.createElement("label");
            label.setAttribute("for", brand);
            label.innerHTML = brand;
            let numOfProducts = document.createElement("span")
            numOfProducts.innerHTML = `(${
            mobiles.filter(mobile => mobile[Object.keys(mobiles[0])[i+1]] === `${brand}`).length})`;
            Filter.append(checkbox , label , numOfProducts);
            filterRresults[i].append(Filter);
        });    
    }

    

  

    var brands = [];
    var BatteryCapacitys = [];
    var screenTypes = [];
    var screenDiagonals = [];
    var BuiltInMemory = [];
    
// تعريف المصفوفات لكل الفلاتر
var brands = [];
var BatteryCapacitys = [];
var screenTypes = [];
var screenDiagonals = [];
var memorys = [];

// دالة الفلترة الرئيسية
function filterMobiles() {
    mobiles.forEach(mobile => {
        if (
            (brands.length === 0 || brands.includes(mobile.Brand)) &&
            (BatteryCapacitys.length === 0 || BatteryCapacitys.includes(mobile.BatteryCapacity)) &&
            (screenTypes.length === 0 || screenTypes.includes(mobile.ScreenType)) &&
            (screenDiagonals.length === 0 || screenDiagonals.includes(mobile.ScreenDiagonal)) &&
            (memorys.length === 0 || memorys.includes(mobile.BuiltInMemory))
        ) {
            console.log(mobile.ModelName);
        }
    });
}

// دالة التعامل مع كل checkbox
function checkboxHandler(checkboxes, array) {
    checkboxes.forEach(check => {
        check.addEventListener("change", () => {
            if (check.checked) {
                if (!array.includes(check.value)) {
                    array.push(check.value);
                }
            } else {
                const index = array.indexOf(check.value);
                if (index > -1) array.splice(index, 1);
            }
            filterMobiles(); // فلترة عامة بعد كل تغيير
            console.log(array);
        });
    });
}

// دالة بتجمع كل الـ checkboxHandlers
function checkboxfun() {
    let brandCheckbox = document.querySelectorAll(".brand-results .checkbox");
    let batteryCheckbox = document.querySelectorAll(".Battery-results .checkbox");
    let screenTypeCheckbox = document.querySelectorAll(".Screen-type-results .checkbox");
    let screenDiagonalCheckbox = document.querySelectorAll(".Screen-diagonal-results .checkbox");
    let memoryCheckbox = document.querySelectorAll(".memory-results .checkbox");

    checkboxHandler(brandCheckbox, brands);
    checkboxHandler(batteryCheckbox, BatteryCapacitys);
    checkboxHandler(screenTypeCheckbox, screenTypes);
    checkboxHandler(screenDiagonalCheckbox, screenDiagonals);
    checkboxHandler(memoryCheckbox, memorys);
}

// عند تحميل الصفحة شغل الفلاتر
window.onload = () => {
    filterMobiles(); // في البداية نعرض الكل
    checkboxfun();    // نبدأ نربط الـ checkboxes
};

        window.onload = () => {
            filterMobiles(); 
            checkboxfun();}

  });
