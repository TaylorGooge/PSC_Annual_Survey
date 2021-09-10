function add_row(body){
  
    var row = body.insertRow(-1)

    var cell1 = row.insertCell(0)
    var text1 = document.createTextNode("")
    cell1.contentEditable= 'true'
    cell1.required = 'true'
    cell1.appendChild(text1)

    var cell2 = row.insertCell(1)
    var text2 = document.createTextNode("")
    cell2.contentEditable =  "true"
    cell1.required = 'true'
    cell2.appendChild(text2)

    var cell3 = row.insertCell(2)
    var text3 = document.createTextNode("")
    cell3.contentEditable = "true"
    cell1.required = "true"
    cell3.setAttribute('max-width',"30px")
    cell3.appendChild(text3)

    var cell4 = row.insertCell(3)
    var bt = document.createElement("Button")
    var bt_text = document.createTextNode("Remove")
    bt.appendChild(bt_text)
    bt.classList.add('btn', 'btn-danger', 'btn-rounded', 'btn-sm', 'my-0')
    bt.setAttribute("onclick","remove_this(this)")
  
    cell4.appendChild(bt)

    
}

function checkTransfer(){

    // if both boxes are unchecked everything is required    
    if ((document.getElementById("transferyes").checked == false) && (document.getElementById("transferno").checked == false)){
       addDesignee()
       addCoc()
     
    }
    if ((document.getElementById("transferyes").checked == true)&& (document.getElementById("transferno").checked == true)) {
        addCoc()
        addDesignee()
    }
    // transfers accepted- fields required
    if (document.getElementById("transferyes").checked == true){
        addDesignee()
        addCoc()

    }
    // remove requirements
    if (document.getElementById("transferno").checked == true){
       removeDesignee()
       removeCoc()
       document.getElementById("transfercriteria").required = false;
       document.getElementById("transfercriteria").disabled = true;
    }
}

function removeDesignee(){    
    document.getElementById("designeename").required= false;
    document.getElementById("designeename").disabled = true;

    document.getElementById("designeeaddress").required = false;
    document.getElementById("designeeaddress").disabled = true;

    document.getElementById("designeecity").required = false;
    document.getElementById("designeecity").disabled = true;

    document.getElementById("designeezip").required = false;
    document.getElementById("designeezip").disabled = true;

    document.getElementById("designeephone").required = false;
    document.getElementById("designeephone").disabled = true;

    document.getElementById("designeeemail").required = false;
    document.getElementById("designeeemail").disabled = true;
        
    }


function removeCoc(){

    document.getElementById("cocname").required = false;
    document.getElementById("cocname").disabled = true;

    document.getElementById("cocaddress").required = false;
    document.getElementById("cocaddress").disabled = true;

    document.getElementById("coccity").required = false;
    document.getElementById("coccity").disabled = true;

    document.getElementById("coczip").required= false;
    document.getElementById("coczip").disabled= true;

    document.getElementById("cocphone").required = false;
    document.getElementById("cocphone").disabled = true;

    document.getElementById("cocemail").required = false;
    document.getElementById("cocemail").disabled = true;

    }

function addCoc(){
    document.getElementById("cocname").required = true;
    document.getElementById("cocname").disabled = false;

    document.getElementById("cocaddress").required = true;
    document.getElementById("cocaddress").disabled = false;

    document.getElementById("coccity").required = true;
    document.getElementById("coccity").disabled = false;

    document.getElementById("coczip").required= true;
    document.getElementById("coczip").disabled= false;

    document.getElementById("cocphone").required = true;
    document.getElementById("cocphone").disabled = false;

    document.getElementById("cocemail").required = true;
    document.getElementById("cocemail").disabled = false;

}

function checkDesignee(){
    if (document.getElementById("designeena").checked == true){
        removeDesignee()
    }
    else{
        addDesignee()
    }
}

function checkCoc(){
    if (document.getElementById("cocna").checked == true){
        removeCoc()
    }
    else{
        addCoc()
    }
}

function addDesignee(){
    document.getElementById("designeename").required= true;
    document.getElementById("designeename").disabled = false;

    document.getElementById("designeeaddress").required = true;
    document.getElementById("designeeaddress").disabled = false;

    document.getElementById("designeecity").required = true;
    document.getElementById("designeecity").disabled = false;

    document.getElementById("designeezip").required = true;
    document.getElementById("designeezip").disabled = false;

    document.getElementById("designeephone").required = true;
    document.getElementById("designeephone").disabled = false;

    document.getElementById("designeeemail").required = true;
    document.getElementById("designeeemail").disabled = false;

    document.getElementById("cocname").required = true;
    document.getElementById("cocname").disabled = false;

    document.getElementById("cocaddress").required = true;
    document.getElementById("cocaddress").disabled = false;

    document.getElementById("coccity").required = true;
    document.getElementById("coccity").disabled = false;

    document.getElementById("coczip").required= true;
    document.getElementById("coczip").disabled= false;

    document.getElementById("cocphone").required = true;
    document.getElementById("cocphone").disabled = false;

    document.getElementById("cocemail").required = true;
    document.getElementById("cocemail").disabled = false;

    document.getElementById("transfercriteria").required = true;
    document.getElementById("transfercriteria").disabled = false;

}
function otherCourtType(value){

    if (value == "None of these"){
        document.getElementById("othertype").required = true;
    }
    else{
         document.getElementById("othertype").required = false;
     }   
}
function loqReqCheck(){
    document.getElementById("chargemisd").required = false;
    document.getElementById("chargefel").required = false;
    document.getElementById("chargena").required = false;

}

function caseProcCheck(){
    document.getElementById("cppretrial").required = false;
    document.getElementById("cppreplea").required = false;
    document.getElementById("cppostplea").required = false;
    document.getElementById("cppreadj").required = false;
    document.getElementById("cppostadj").required = false;
    document.getElementById("cpna").required = false;
}



function remove_this(line){
    row = line.closest("tr")
    parent = row.parentNode
    parent.removeChild(row)
}
    




