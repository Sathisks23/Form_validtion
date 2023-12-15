let form = document.forms.form1
    form.addEventListener('submit',check)
    let line = 'empty'
  
   

function check(){

    event.preventDefault()
    
    let arr = [

        form.uname.value.trim().length,
        form.category.value.trim().length,
        form.email.value.trim().length,
        form.feedback.value.trim().length,
        form.cbox.checked


    ]
    
    console.log(arr);

    for(i in arr){


        if(arr[i]==0 || arr[i]=='false'){
           
            
            playError( parseInt(i))
             
            break;
        }
        else{
            
            i++
            
            if(i==5){
                playError('sussefully submited')
            }

        }





    
        
    }





    

}


function playError(value){
 
   console.log( typeof(value));

    if(typeof(value)=='number'){

        if(i==0){ value='valid User name'}
        else if(i==1){ value = 'valid reason' }
        else if(i==2){ value = 'valid Email' }
        else if(i==3){ value = 'feedback' }
        else if(i==4){ value = 'you need to accept this form' }

        div = document.querySelector('.error') ; div.innerHTML=`Please Enter the ${value}` ;div.style.display = 'block' ;div.style.background = 'red'

        setTimeout(() => {
            div.style.display = 'none'
        }, 1000);



    }else{




        div = document.querySelector('.error') ; div.innerHTML=value ;div.style.display = 'block';div.style.background = 'green'
        setTimeout(() => {
            div.style.display = 'none'
        }, 1000);

        form.reset()
    }

       


    }



   

         
        

   
    



