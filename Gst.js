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
function addGST(){

let amount=parseFloat(document.getElementById("amount").value);
let gst=parseFloat(document.getElementById("gst").value);

if(isNaN(amount)||isNaN(gst)){
alert("Enter Amount & GST%");
return;
}

let gstAmount=amount*gst/100;
let total=amount+gstAmount;

document.getElementById("result").innerHTML=
`
<b>Original Amount:</b> ₹${amount.toFixed(2)}<br>
<b>GST (${gst}%):</b> ₹${gstAmount.toFixed(2)}<br>
<b style="color:green;">Total:</b> ₹${total.toFixed(2)}
`;

}

function removeGST(){

let total=parseFloat(document.getElementById("amount").value);
let gst=parseFloat(document.getElementById("gst").value);

if(isNaN(total)||isNaN(gst)){
alert("Enter Amount & GST%");
return;
}

let original=total/(1+gst/100);
let gstAmount=total-original;

document.getElementById("result").innerHTML=
`
<b>Total Amount:</b> ₹${total.toFixed(2)}<br>
<b>Original Amount:</b> ₹${original.toFixed(2)}<br>
<b>GST (${gst}%):</b> ₹${gstAmount.toFixed(2)}
`;

}
function calculateGST(){

let amount=parseFloat(document.getElementById("amount").value);
let gst=parseFloat(document.getElementById("gst").value);

if(isNaN(amount)||isNaN(gst)){
    alert("Enter Amount and GST%");
    return;
}

let gstAmount=amount*gst/100;
let cgst=gstAmount/2;
let sgst=gstAmount/2;
let igst=gstAmount;

let total=amount+gstAmount;

document.getElementById("result").innerHTML=`

<h3>GST Details</h3>

Original Amount : ₹${amount.toFixed(2)}<br><br>

CGST (${gst/2}%) : ₹${cgst.toFixed(2)}<br>

SGST (${gst/2}%) : ₹${sgst.toFixed(2)}<br>

IGST (${gst}%) : ₹${igst.toFixed(2)}<br><br>

<b>Total GST :</b> ₹${gstAmount.toFixed(2)}<br>

<b style="color:green;">Final Amount :</b> ₹${total.toFixed(2)}

`;

}
const display=document.getElementById("display");

function append(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function deleteLast(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value="Error";
    }
}

document.addEventListener("keydown",(e)=>{

if((e.key>='0' && e.key<='9') ||
['+','-','*','/','.','%'].includes(e.key)){
display.value+=e.key;
}

if(e.key==="Enter"){
calculate();
}

if(e.key==="Backspace"){
deleteLast();
}

if(e.key==="Escape"){
clearDisplay();
}

});

function calculateAge(){

let dob=document.getElementById("dob").value;

if(!dob){
    alert("Please select your Date of Birth");
    return;
}

let birth=new Date(dob);
let today=new Date();

let years=today.getFullYear()-birth.getFullYear();
let months=today.getMonth()-birth.getMonth();
let days=today.getDate()-birth.getDate();

if(days<0){
    months--;
    const lastMonth=new Date(today.getFullYear(),today.getMonth(),0);
    days+=lastMonth.getDate();
}

if(months<0){
    years--;
    months+=12;
}

document.getElementById("ageResult").innerHTML=
`
🎉 <b>Your Age</b><br><br>

👤 ${years} Years<br>
📅 ${months} Months<br>
🗓️ ${days} Days
`;

}