const minMemory = document.getElementById('min-memory');
const maxMemory = document.getElementById('max-memory');

const extraMemory = document.getElementById('extra-memory');

const minStorage = document.getElementById('ssd256-storage');
const xStorage = document.getElementById('ssd512-storage');
const xlStorage = document.getElementById('ssd1tb-storage');

const extraStorage = document.getElementById('extra-storage');

const freeDelevery = document.getElementById('without-cost');
const expreesDelevery = document.getElementById('with-cost');
const deleveryCost = document.getElementById('delivery-cost');

const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
const total = document.getElementById('total');
const applyBtn = document.getElementById('apply');
const promoCode = document.getElementById('promo-code');


// Calculate Sub-Total
function upateTotalPrice(){
    const productPrice = Number(bestPrice.innerText);
    const extraMemoryCharge = Number(extraMemory.innerText);
    const extraStorageCharge = Number(extraStorage.innerText);
    const deleveryCharge = Number(deleveryCost.innerText);
    const subTotal = productPrice + extraMemoryCharge + extraStorageCharge + deleveryCharge;
    totalPrice.innerText =subTotal;
    
};

//Calculate Total Pay
function updateTotalPay (){
    const basePrice = Number(bestPrice.innerText);
    const memoryCharge = Number(extraMemory.innerText);
    const storageCharge = Number(extraStorage.innerText);
    const delevery = Number(deleveryCost.innerText);
    const totalPay = basePrice + memoryCharge + storageCharge + delevery;
    total.innerText = totalPay;
}

minMemory.addEventListener('click', function(){
    extraMemory.innerText = '00';
    bestPrice.innerText = '1299';
    upateTotalPrice()
    updateTotalPay ()
           
   });
maxMemory.addEventListener('click', function(){
    extraMemory.innerText = '180';
    bestPrice.innerText = '1299'; 
    upateTotalPrice() 
    updateTotalPay ()   
 
   });
minStorage.addEventListener('click', function(){
    extraStorage.innerText = '00';
    bestPrice.innerText = '1299';  
    upateTotalPrice()
    updateTotalPay ()
    
    });  
xStorage.addEventListener('click', function(){
    extraStorage.innerText = '100';
    bestPrice.innerText = '1299';  
    upateTotalPrice()
    updateTotalPay ()
    
        });  
xlStorage.addEventListener('click', function(){
    extraStorage.innerText = '180';
    bestPrice.innerText = '1299';  
    upateTotalPrice()
    updateTotalPay ()
   
        });  
freeDelevery.addEventListener('click', function(){
    deleveryCost.innerText = '00',
    bestPrice.innerText = '1299'; 
    upateTotalPrice()
    updateTotalPay ()
   
});
  

expreesDelevery.addEventListener('click', function(){
    deleveryCost.innerText = '20',
    bestPrice.innerText = '1299'; 
    upateTotalPrice()
    updateTotalPay ()
    
});
// Apply Promo Code
applyBtn.addEventListener('click', function(){

   if (promoCode.value == 'stevekaku'){ total.innerText = totalPrice.innerText - totalPrice.innerText * .20;
    promoCode.value = '';  

   }
});
