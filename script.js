function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var pnumber=document.validateform.pnumber.value;

    if(fname== null || fname== ""){
        alert("First Name should not be blank");
        return false;
    }
    else if(lname== null||lname== ""){
        alert("Last Name should not be blank");
        return false;
    }
    else if(pnumber.length<10){
        alert("Phone number must contain 10 digits ");
        return false;
    }
    else {
        alert("form Submitted successfully");
    }

}let fruit=["apple","orrange","mango"]
let message=fruit.indexOf("mango")
console.log(message)

let colors=["red","green","blue"];
let message1=colors.find
(colors=>colors.startsWith('g'));
console.log(message1)

let number=[12,30,40,50,60];
let greaterThan=number.filter
(number=>number>20);
console.log(greaterThan);