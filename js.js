let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let billAm = document.getElementById("bill-amount");
  let tipPer = document.getElementById("tip-percentage");
  let nbOfPers =document.getElementById("nb-person");

  
  let billAmount = billAm.value;
  let tipPercentage = tipPer.value;
  let personne = nbOfPers.value;

  let tipAmount = document.getElementById("tip-amount").value =  (billAmount * (tipPercentage/100)).toFixed(2);
  
  let total = document.getElementById("total-bill").value =(parseFloat(billAmount) + parseFloat(tipAmount)).toFixed(2);
  
  document.getElementById("bill-person").value=(total/personne).toFixed(2);

    
});