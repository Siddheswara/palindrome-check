button=document.getElementById('submit')
function ReverseString(str) {
    return str.split('').reverse().join('')
 }
button.addEventListener('click',(e)=>{
    input=document.getElementById("search")
    if(input.value==""|| input.value.length<=2){
        html=
              `<p>Please enter a valid phase</p>
               `
        main=document.getElementById("main")
        main.innerHTML=html
    }
    else{
        val=input.value
        modify=val.trim()
        modify2=ReverseString(modify)
        if(modify==modify2)
        {
            html=
            `<p>Yes, <span><strong>"${val}"</strong></span> is a palindrome</p>`        
         main=document.getElementById("main")
           main.innerHTML=html

        }
        else{
            html=
            `<p>No, <span><strong>"${val}"</strong></span> is not a palindrome</p>
             `
      main=document.getElementById("main")
      main.innerHTML=html

        }
    }
    
    input.value=" "
    
})