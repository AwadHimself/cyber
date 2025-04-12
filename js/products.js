let nav= document.querySelector(".header .nav");
let brandFilter = document.querySelector(".brand-results");


function navTogler() {
    nav.classList.toggle("extend")
  }

  fetch("js/mobiles_20.json")
  .then(response => response.json())
  .then(mobiles => {

    let mobileBrands = new Set();
    mobiles.forEach(mobile => {
        mobileBrands.add(mobile.Brand); 
    });
    mobileBrands.forEach(brand => {
        let Filter = document.createElement("div");
        Filter.classList.add("filter", `filter-${brand}` ,"flex", "justify-start", "gap-2", "items-center", "pt-3");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = brand;
        checkbox.value = brand;
        let label = document.createElement("label");
        label.setAttribute("for", brand);
        label.innerHTML = brand;
        let numOfProducts = document.createElement("span")
        numOfProducts.innerHTML = `(${mobiles.filter(mobile => mobile.Brand === `${brand}`).length})`;
        Filter.append(checkbox , label , numOfProducts);
        brandFilter.append(Filter);
    });
      


    mobiles.forEach(mobile => {
          
      
        var brands  = [] 
        if (brands.length === 0){
            brands = [mobile.Brand]
          };

          var screenTypes = [];
        if (screenTypes.length === 0){
            screenTypes = [mobile.ScreenType]
          };


        if(brands.includes(mobile.Brand) &&
         parseInt(mobile.BatteryCapacity) > "" 
         && screenTypes.includes(mobile.ScreenType) && 
         parseFloat(mobile.ScreenDiagonal) >= "" &&
         parseInt(mobile.BuiltInMemory) >= ""){
            
        }
    });
  });
