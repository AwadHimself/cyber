let nav= document.querySelector(".header .nav");

function navTogler() {
    nav.classList.toggle("extend")
  }

  fetch("js/mobiles_20.json")
  .then(response => response.json())
  .then(mobiles => {
      const brands  = ["Samsung", "Apple"];
      const screenTypes = ["Super Retina XDR OLED", "Super AMOLED"];
    mobiles.forEach(mobile => {
        if(brands.includes(mobile.Brand) && parseInt(mobile.BatteryCapacity) > "" && screenTypes.includes(mobile.ScreenType)){
            console.log(mobile.ModelName)
        }
    });
  });
