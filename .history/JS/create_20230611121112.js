const url= 'https://648343d1f2e76ae1b95c3956.mockapi.io/users'

let myform = document.forms('createform')
 

myform.addEventListener('submit',async(e)=>{
    e.preventDefault()
   
    let data = { 
       name:myform.name.value,
       email:myform.email.value,
       gender:myform.gender.value,
       country:myform.country.value,
       city:myform.city.value,
       mobile:myform.mobile.value,
     
    } 

    let res = await fetch(url,{
        headers:{
            "Content-Type":"application/jsons"
        },
        method:"POST",
        body:JSON.stringify(data)
       
    })

    window.location.href='/'

})
