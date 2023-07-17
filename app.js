// Kartaning HTML elementini tanlab olamiz
var card = document.querySelector('.card');

// Tugma elementlarni HTML elementidan tanlab olamiz
var increaseBtn = card.querySelector('.increaseBtn');
var decreaseBtn = card.querySelector('.decreaseBtn');
var countElement = card.querySelector('.count');
var priceElement = card.querySelector('.price');
var totalPriceElement = card.querySelector('.totalPrice');

// Mahsulot narhini olish
var price = parseInt(priceElement.innerText.replace(/\D/g, ''));

// Tugmalarga klik hodisasini qo'shamiz
increaseBtn.addEventListener('click', function() {
  var count = parseInt(countElement.innerText);
  count++;
  countElement.innerText = count;
  calculateTotalPrice();
});

decreaseBtn.addEventListener('click', function() {
  var count = parseInt(countElement.innerText);
  if (count > 0) {
    count--;
    countElement.innerText = count;
    calculateTotalPrice();
    4
  }
});

// Umumiy narxni hisoblash va chiqarish
function calculateTotalPrice() {
  var count = parseInt(countElement.innerText);
  var totalPrice = price*count;
  totalPriceElement.innerText =  totalPrice.toLocaleString('uz-UZ', { style: 'currency', currency: 'UZS' });
}

   // Kartların NodeList'ini alın
   var cards = document.querySelectorAll('.card');

   // Her kart için döngü
   cards.forEach(function(card) {
       var countEl = card.querySelector('.count'); // count span'ını alın
       var decreaseBtn = card.querySelector('.decreaseBtn'); // decreaseBtn'i alın
       var increaseBtn = card.querySelector('.increaseBtn'); // increaseBtn'i alın
       var totalPriceEl = card.querySelector('.totalPrice'); // totalPrice p'sini alın

       var count = 0; // başlangıçta sayacı sıfırla
       var price = 120000; // ürün fiyatı

       // decreaseBtn'e tıklanınca
       decreaseBtn.addEventListener('click', function() {
           if (count > 0) {
               count--; // sayacı azalt
               countEl.textContent = count; // sayacı güncelle
               var totalPrice = count * price; // toplam fiyatı hesapla
               totalPriceEl.textContent = totalPrice ; // toplam fiyatı güncelle
           }
       });

       // increaseBtn'e tıklanınca
       increaseBtn.addEventListener('click', function() {
           count++; // sayacı artır
           countEl.textContent = count; // sayacı güncelle
           var totalPrice = count*price; // toplam fiyatı hesapla
           totalPriceEl.textContent = totalPrice ; // toplam fiyatı güncelle
       });
   });
      // sviperjs
   var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });
