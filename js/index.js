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

function upateTotalPrice(){
    const productPrice = Number(bestPrice.innerText);
    const extraMemoryCharge = Number(extraMemory.innerText);
    const extraStorageCharge = Number(extraStorage.innerText);
    const deleveryCharge = Number(deleveryCost.innerText);
    const subTotal = productPrice + extraMemoryCharge + extraStorageCharge + deleveryCharge;
    totalPrice.innerText =subTotal;
    
//console.log(extraMemory.innerText, bestPrice.innerText, extraStorage.innerText, deleveryCost.innerText)
};

minMemory.addEventListener('click', function(){
    extraMemory.innerText = '00';
    bestPrice.innerText = '1299';
    upateTotalPrice()
       
   });
maxMemory.addEventListener('click', function(){
    extraMemory.innerText = '180';
    bestPrice.innerText = '1299'; 
    upateTotalPrice() 
 
   });
minStorage.addEventListener('click', function(){
    extraStorage.innerText = '00';
    bestPrice.innerText = '1299';  
    upateTotalPrice()
    });  
xStorage.addEventListener('click', function(){
    extraStorage.innerText = '100';
    bestPrice.innerText = '1299';  
    upateTotalPrice()
        });  
xlStorage.addEventListener('click', function(){
    extraStorage.innerText = '180';
    bestPrice.innerText = '1299';  
    upateTotalPrice()
        });  
freeDelevery.addEventListener('click', function(){
    deleveryCost.innerText = '00',
    bestPrice.innerText = '1299'; 
    upateTotalPrice()
});
  

expreesDelevery.addEventListener('click', function(){
    deleveryCost.innerText = '20',
    bestPrice.innerText = '1299'; 
    upateTotalPrice()
});
  
