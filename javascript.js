


function isValidEmail(email){
    
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let val = res.test(String(email).toLowerCase());
    
    if (val == true){
        return 
    }
    else {
        alert("Please enter a valid e-mail")
    } 

}

function isValidPhone(phonenum){

    var comp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    val = comp.test(phonenum)
    
    if ((val == false) || (typeof val == "object")) {
        alert("Please enter a valid phone number")
    }
  
    return   
}





