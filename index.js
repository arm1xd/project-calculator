let buttons = document.querySelectorAll('button')
let result =document.querySelector('input')
let str='';

   for (let index = 0; index < buttons.length; index++) {
       buttons[index].addEventListener('click',function(){
        buttons[index].textContent
        console.log(buttons[index].textContent)
        if(buttons[index].textContent ==='DEL'){
           result.value=''; 
        } else if(buttons[index].textContent === '='){
            result.value = eval(result.value)
        } else{
            result.value +=  buttons[index].textContent
        }
       })
    }