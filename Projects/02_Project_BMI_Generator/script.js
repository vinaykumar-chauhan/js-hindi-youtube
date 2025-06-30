const form = document.querySelector('form');

/*--- 
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
---*/
// this use case will give you empty value


form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `<p>please give a valid height : <p>${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `<p>please give a valid height : <p>${weight}`;
  }else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
   // show the results
   results.innerHTML = `<span>${bmi}</span>`
   
  }

})