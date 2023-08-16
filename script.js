class discountCalculator{
    calculatePercent(price, discountPercent){
        // persont to amount
        return price * discountPercent / 100;
    }

    calculatePrice(price, discount){
        // calculate percent off
        return discount / price * 100;
    }

    calculateFromAfterAmount(price, afterAmount){
        return price - afterAmount;
    }

    calculateFromAfterPercent(price, afterPercent){
        return price / (1 - afterPercent / 100);
    }
}


const beforePrice = document.getElementById("beforeprice");
const discountPercent = document.getElementById("discountpercent");
const discountAmount = document.getElementById("discountamount");
const result = document.getElementById("result");


const calculator = new discountCalculator();

// on change
beforePrice.addEventListener("keyup", function(){
    if(discountPercent.value != ""){
        result.innerText = calculator.calculatePercent(parseFloat(beforePrice.value), parseFloat(discountPercent.value)) + " Amount Off";
    }
});


discountPercent.addEventListener("keyup", function(){
    if(beforePrice.value != ""){
        result.innerText = calculator.calculatePercent(parseFloat(beforePrice.value), parseFloat(discountPercent.value)) + " Amount Off";
    }
});

discountAmount.addEventListener("keyup", function(){
    if(beforePrice.value != ""){
        result.innerText = calculator.calculatePrice(parseFloat(beforePrice.value), parseFloat(discountAmount.value)) + " % Off";
    }
});


