let plusButtons = document.querySelectorAll(".plus");
let minusButtons = document.querySelectorAll(".minus");

function updateTotals() {
    let allProducts = document.querySelectorAll(".amount");
    let subtotal = 0;

    allProducts.forEach(product => {
        let quantity = parseInt(product.querySelector(".num").textContent);
        let unitPrice = parseFloat(product.dataset.unitPrice);
        let priceEl = product.querySelector(".price");
        let productTotal = quantity * unitPrice;

        
        priceEl.textContent = `$${productTotal}`;

        
        subtotal += productTotal;
    });

    
    document.querySelector(".subtotal-val").textContent = `$${subtotal}`;

    
    let tax = parseFloat(document.querySelector(".tax-val").dataset.tax);
    let shipping = parseFloat(document.querySelector(".shipping-val").dataset.shipping);

    
    let total = subtotal + tax + shipping;
    document.querySelector(".total-val").textContent = `$${total}`;
}

plusButtons.forEach(plus => {
    plus.onclick = () => {
        let parent = plus.closest(".amount");
        let numEl = parent.querySelector(".num");
        let current = parseInt(numEl.textContent);
        numEl.textContent = current + 1;

        updateTotals(); 
    };
});

minusButtons.forEach(minus => {
    minus.onclick = () => {
        let parent = minus.closest(".amount");
        let numEl = parent.querySelector(".num");
        let current = parseInt(numEl.textContent);
        if (current > 1) {
            numEl.textContent = current - 1;
            updateTotals(); 
        }
    };
});

let removeButtons = document.querySelectorAll(".remove");

removeButtons.forEach(removeBtn => {
    removeBtn.onclick = () => {
        let order = removeBtn.closest(".order");
        order.remove(); 

        updateTotals(); 
    };
});



updateTotals();
