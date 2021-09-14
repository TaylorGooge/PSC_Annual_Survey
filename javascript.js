window.onload =  function () {
    let currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab
    
    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.querySelectorAll('.tab')
        console.log(currentTab)

        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form... :
        if (currentTab >= x.length) {
            //...the form gets submitted:
            document.getElementById("msform").submit();
            return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
        }

    function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.querySelectorAll('.tab')[n]
    x.style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("previous").style.display = "none";
    } else {
        document.getElementById("previous").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("next").innerHTML = "Submit";
    } else {
        document.getElementById("next").innerHTML = "Next";
    }
    }
    
    let next = document.getElementById('next')
    next.addEventListener('click', function (){
        nextPrev(1)
    })
    let prev = document.getElementById('previous')
    prev.addEventListener('click', function (){
        nextPrev(-1)
    })
}


    
