const form=document.querySelector('form')
//this use-case will give you empty value bcz the value isnt submitted yet
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()  //prevent default action of the form
    //extracting values after submitting
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height===''||height<0||isNaN(height)){
       results.innerHTML=`Please give a valid height ${height}`
    }
    else if(weight===''||weight<0||isNaN(weight)){
       results.innerHTML=`Please give a valid weight ${weight}`
    }
    else{
      const bmi=(weight/((height*height)/10000)).toFixed(2) //upto 2 dec places
      //show results
      results.innerHTML=`<span>${bmi}</span>`;
    }
  if(bmi<18.6)
  results.innerHTML="Under weight"
  else if(bmi>=18.6 && bmi<=24.9)
  results.innerHTML="Normal Range"
  else
  results.innerHTML="Over weight"
})