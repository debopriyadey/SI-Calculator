function compute() {
    
    //geting all the values from html form
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100; // cal the intrest
    var year = new Date().getFullYear() + parseInt(years); // cal the year

    // checking if the principal is a positive number or not
    if (principal <= 0) {
        alert('Enter a positive number')
    } else {
        document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit " + "<mark>" + principal + "</mark>" +
            ",\<br\>at an interest rate of " + "<mark>" + rate + "</mark>" +
            "%.\<br\>You will receive an amount of " + "<mark>" + interest + "</mark>" +
            ",\<br\>in the year " + "<mark>" + year + "</mark>" + ".\<br\>"
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}
