var boutonsPlus = Array.from(document.querySelectorAll('#btnplus'));
var boutonsMoins = Array.from(document.querySelectorAll('#btnmoins'));
var counter = Array.from(document.getElementsByClassName('quantité'));
var Price = Array.from(document.getElementsByClassName('price'));
var Counter = Array.from(document.getElementsByClassName("total"));
var total = document.getElementById('Total')
console.log(boutonsPlus)
console.log(boutonsMoins)

for(let i =0; i< boutonsPlus.length; i++){
    boutonsPlus[i].addEventListener("click", function(){
        counter[i].innerHTML = Number(counter[i].innerHTML)+1;
        CalculTotal();
        
    });
}
for(let i=0; i<boutonsMoins.length;i++){
    boutonsMoins[i].addEventListener("click", function(){
        counter[i].innerHTML = Number(counter[i].innerHTML)-1;
        CalculTotal();

    });
    
}
for (let m=0; m<Price.length;m++){
    console.log(Price[m].prix);


}

// function CalculTotal() {
      
//       let sum = 0;
//       for (let i = 0; i < Price.length; i++) {
//         sum += Number(Price[i].innerHTML) * Number(Counter[i].innerHTML);
//       }
//       total.innerHTML = sum;
//  }
function CalculTotal() {
      let Price = Array.from(document.getElementsByClassName("price"));
      let Counter = Array.from(document.getElementsByClassName("quantité"));
       
      let sum = 0;
      for (let i = 0; i < Price.length; i++) {
         sum += Number(Price[i].innerHTML) * Number(Counter[i].innerHTML);
       }
       total.innerHTML = sum;
     }