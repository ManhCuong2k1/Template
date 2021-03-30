var countDownDate = new Date("April 01, 2021 11:11:11").getTime();
var x = setInterval(function() {

var now = new Date().getTime();
var distance = countDownDate - now;


var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;
});


// check form

function validate() {
    var flag = true;

    var name = document.getElementById('name').value;
    if(name === '' || name.length < 5) {
        flag = false;
        document.getElementById('error_name').innerHTML = 'Tên không để trống và trên 5 ký tự'; 
    } else {
        document.getElementById('error_name').innerHTML = '';
    }

    var email = document.getElementById('email').value;
    var reg = /^[a-zA-Z0-9.!@#$%^&*(){|}]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/;
    if(!reg.test(email)) {
        flag = false;
        document.getElementById('error_email').innerHTML = 'Email phải đúng định dạng';     
    } else {
        document.getElementById('error_email').innerHTML = '';
    }

    var phone = document.getElementById('phone').value;
    var regPhone = /^[0-9]{10}$/;
    if(!regPhone.test(phone)) {
        flag = false;
        document.getElementById('error_phone').innerHTML = 'Số điện thoại không để trống và phải đủ 10 số';
    } else {
        document.getElementById('error_phone').innerHTML = '';
    }

    return flag;
}

  