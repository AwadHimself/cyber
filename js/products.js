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

    

  

        var brands  = [] 

        var screenTypes = [];

        function checkboxfun() {
            let checkbox = document.querySelectorAll(".checkbox");
            checkbox.forEach(check => {
                check.addEventListener("change", () => {
                    if (check.checked) {
                        if (!brands.includes(check.value)) {
                            brands.push(check.value);
                            selectedBrand()
                        }
                    }
                    else{
                        brands = brands.filter(brand => brand !== check.value);
                        selectedBrand()
                    }
                    console.log(brands);
                });
            });
        }
        window.onload = checkboxfun;
        


        function selectedBrand(){
            mobiles.forEach(mobile => {
                if(brands.includes(mobile.Brand) &&
                 parseInt(mobile.BatteryCapacity) > "" && 
                 parseFloat(mobile.ScreenDiagonal) >= "" &&
                 parseInt(mobile.BuiltInMemory) >= ""){
                    console.log(mobile.ModelName);
                }
            });        
        }

  });
