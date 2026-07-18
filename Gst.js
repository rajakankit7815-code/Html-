function calculateGST(){

    let amount = parseFloat(document.getElementById("amount").value);
    let gst = parseFloat(document.getElementById("gst").value);

    if(isNaN(amount) || amount<=0){
        alert("Please enter a valid amount.");
        return;
    }

    let gstAmount = amount * gst / 100;
    let total = amount + gstAmount;

    document.getElementById("result").innerHTML =
        "Amount: ₹" + amount.toFixed(2) + "<br>" +
        "GST (" + gst + "%): ₹" + gstAmount.toFixed(2) + "<br>" +
        "<span style='color:green'>Total: ₹" + total.toFixed(2) + "</span>";
}