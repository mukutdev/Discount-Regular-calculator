let str = '';
const display = document.getElementById('display')
const calculatorValues = document.querySelectorAll('.calc-value')

for(const calculatorValue of calculatorValues) {
    calculatorValue.addEventListener('click', function(event) { 
           const getValue = event.target.innerText
           
            if(getValue === '='){
             str = eval(str)
             if(str === undefined){
                str = ''
                return false
             }
             display.value = str
           }
           else if(getValue === 'CE'){
            str='';
            display.value = str;
           }
           else if(getValue === '%'){
              str = eval(str)
            if(str === undefined){
                str = ''
                return false;
            }
            display.value = str / 100
           }
           else if(getValue === 'C'){
              str = str.slice(0, str.length -1)
              display.value = str  
         
           }
           else{
            str += getValue
            display.value = str
          }
           
    })
}