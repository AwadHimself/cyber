let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");
let step3 = document.querySelector(".step3");
let nextBtn = document.querySelectorAll(".next");
let backBtn = document.querySelectorAll(".back");
let stepIndicators = document.querySelectorAll(".step");

let counter = 1;

function updateSteps() {
    
    step1.classList.add("hidden");
    step2.classList.add("hidden");
    step3.classList.add("hidden");

    
    if (counter === 1) step1.classList.remove("hidden");
    if (counter === 2) step2.classList.remove("hidden");
    if (counter === 3) step3.classList.remove("hidden");

    
    stepIndicators.forEach((step, index) => {
        if (index === counter - 1) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}


updateSteps();


nextBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (counter < 3) {
            counter++;
            updateSteps();
        }
    });
});


backBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (counter > 1) {
            counter--;
            updateSteps();
        }
    });
});


stepIndicators.forEach((step, index) => {
    step.addEventListener("click", () => {
        counter = index + 1;
        updateSteps();
    });
});
