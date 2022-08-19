// discountCalculator variables
const price = document.getElementById('price');
const percentage = document.getElementById('discount-percentage');
const discount = document.getElementById('discount-code');
const code = document.getElementById('coupon-code');
const discountedPrice = document.getElementById('discount-price')
const copyBtn = document.getElementById('copy-btn');
const codeInnerText = (code.innerText).toLowerCase();

function discountCalculator(){
    const actualPrice = parseFloat(price.value);
    const actualDiscount = parseFloat(percentage.value);
    const actualDiscountCode = discount.value;
    if((codeInnerText === actualDiscountCode) && (typeof(actualPrice) === 'number') && (typeof(actualDiscount) === 'number')) {
        const afterDiscountValue = actualPrice * actualDiscount / 100
        discountedPrice.innerText = afterDiscountValue;
        price.value = '';
        percentage.value = '';
        discount.value= '';
    }
    else{
        alert('Please Enter Correct the discount Details')
        price.value = '';
        percentage.value = '';
        discount.value= '';
    }
}

// Click to copy function
function clickToCopy(){
    copyBtn.classList.add('fa-circle-check')
    copyBtn.classList.remove('fa-clone')
    setTimeout(function() {
        copyBtn.classList.add('fa-clone')
    },3000)
   
  const getCouponCode = (code.innerText).toLowerCase().trim()
          discount.value = getCouponCode;
}