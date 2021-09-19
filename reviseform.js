let data = <%- JSON.stringify(user) %> 
    let user = data.completeremail
    user = user.replace(/['"]+/g, '')
    let email = document.getElementById('completeremail')
    email.value = user
    email.style.opacity = 0.0

    let chargefel = document.getElementById('chargefel')

    if (data.chargefel == "on" || data.chargefel == "checked") {
        chargefel.checked = true
    }
    let chargemisd = document.getElementById('chargemisd')
    if (data.chargemisd == "on") {
        chargemisd.checked = true
    }
    let chargena = document.getElementById('chargena')
    if (data.chargena == "on" || data.chargena == "checked") {
        chargena.checked = true
        chargefel.disabled = true
        chargemisd.disabled = true
    }
    transfer = data.transferyes 
    if (transfer == "Yes") {
        document.getElementById('tyes').selected = true
    } else {
        document.getElementById('tno').selected = true
    }

    let postadj = document.getElementById('postadj')
    if (data.postadj == "on" || data.postadj == "checked") {
       postadj.checked = true
    }
    let postplea= document.getElementById('postplea')
    if (data.postplea == "on" || data.postplea == "checked") {
        postplea.checked = true
    }
    let preadj = document.getElementById('preadj')
    if (data.preadj == "on" || data.preadj == "checked") {
        preadj.checked = true
    }
    let preplea = document.getElementById('preplea')
    if (data.preplea == "on" || data.preplea == "checked") {
        preplea.checked = true
    }
    let pretrial = document.getElementById('pretrial')
    if (data.pretrial == "on" || data.pretrial == "checked") {
        pretrial.checked = true
    }
    let caseprocessna = document.getElementById('caseprocessna')
    if (data.caseprocessna == "on" || data.caseprocessna == "checked"){
        pretrial.disabled = true
        preplea.disabled = true
        postplea.disabled = true
        preadj.disabled = true
        postadj.disabled = true
        caseprocessna.checked = true
    }
    
    function courtTypeCheck(){
    let drop = document.getElementById('courttype')
    let other = document.getElementById('otherpsctype')
    if (drop.value === "None of these"){
        other.required = true
    } else{
        other.required = false
    }
}

function caseProcNA() {
    let nabox = document.getElementById('caseprocessna')
    let preadj = document.getElementById('preadj')
    let preplea = document.getElementById('preplea')
    let postplea =document.getElementById('postplea')
    let postadj = document.getElementById('postadj')
    let pretrial = document.getElementById('pretrial')

    if (nabox.checked) {
        pretrial.disabled = true
        pretrial.checked = false
        preplea.disabled = true
        preplea.checked = false
        postplea.disabled = true
        postplea.checked = false
        preadj.disabled = true
        preadj.checked = false
        postadj.disabled = true
        postadj.checked = false 
    }
    else {
        pretrial.disabled = false
        preplea.disabled = false
        postplea.disabled = false
        preadj.disabled = false
        postadj.disabled = false

    }
}
function validate () {
      let felBox = document.getElementById('chargefel')
      let misdBox = document.getElementById("chargemisd")
      let naBox = document.getElementById('chargena')
      if (!naBox.checked && !felBox.checked && !misdBox.checked) {
          alert("Please indicate the level of charge your court accepts")
          event.preventDefault()
  
      }
      let nabox = document.getElementById('caseprocessna')
      let preadj = document.getElementById('preadj')
      let preplea = document.getElementById('preplea')
      let postplea =document.getElementById('postplea')
      let postadj = document.getElementById('postadj')
      let pretrial = document.getElementById('pretrial')
      if (!nabox.checked && !preadj.checked && !preplea.checked && !postplea.checked && !postadj.checked && !pretrial.checked){
          alert("Please indicate how your court processes cases")
          event.preventDefault()
      }
      let transfers = document.getElementById('transferyes')
    
      let dname = document.getElementById('designeename')
      let dadd = document.getElementById('designeeaddress')
      let dcity = document.getElementById('designeecity')
      let dzip = document.getElementById('designeezip')
      let dphone = document.getElementById('designeephone')
      let demail = document.getElementById('designeeemail')
  
      let cname = document.getElementById('clerkname')
      let cadd = document.getElementById('clerkaddress')
      let ccity = document.getElementById('clerkcity')
      let czip = document.getElementById('clerkzipcode')
      let cphone = document.getElementById('clerkphone')

      let transferreq = document.getElementById('transferreq')
  
      if (transfers.value == "Yes") {
          if (!dname.value || !dadd.value || !dcity.value || !dzip.value || !dphone.value || !demail.value){
              alert("Please provide designee for transfers information")
              event.preventDefault()
              return false
          }
          if (!cname.value || !cadd.value || !ccity.value || !czip.value || !cphone.value || !cemail.value){
              alert("Please provide clerk of court information")
              event.preventDefault()
              return false
          }
          if (!transferreq.value) {
              alert("Please provide transfer requirements")
              event.preventDefault()
              return false
          }
      }
      if (transferreq.value.length > 0 ){
          alert('You reported that this court does not accept transfers but provided transfer information')
          event.preventDefault()
      }
      if (dname.value.length != 0 || dadd.value.length != 0 || dcity.value.length != 0 || dzip.value.length != 0 || dphone.value.length != 0 || demail.value.length != 0){
              alert("You reported that this court does not accept transfers but provided designee contact information")
              event.preventDefault()
      }
      if (cname.value.length != 0 || cadd.value.length != 0 || ccity.value.length != 0 || czip.value.length != 0 || cphone.value.length != 0 || cemail.value.length != 0){
              alert("You reported that this court does not accept transfers but provided clerk of court contact information")
              event.preventDefault()
      }
      return true
  }
function chargeReqNa() {
    let naBox = document.getElementById('chargena')
    let felBox = document.getElementById('chargefel')
    let misdBox = document.getElementById("chargemisd")
    if (naBox.checked) {
        felBox.disabled = true
        felBox.checked = false
        misdBox.disabled = true
        misdBox.checked = false
    } else {
        felBox.disabled = false
        misdBox.disabled = false
    }

}
function progressUpdate(node) {
        let progress = document.getElementById("progressbar")
        let percent = parseInt(progress.style.width)
        if (node.value == "Next Step") {
            percent = percent + 14.28
            progress.style.width = percent + "%"
            progress.setAttribute('aria-valuenow', percent)
        } else {
            percent = percent - 14.28
            progress.style.width = percent + "%"
            progress.setAttribute('aria-valuenow', percent)
        }

    }