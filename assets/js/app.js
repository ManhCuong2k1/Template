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

// function validate() {
//     var flag = true;
//     var name = document.getElementById('name').value;
//     if(name === '') {
//         flag = false;
//         document.getElementById('error_name').innerHTML = 'Tên không để trống'; 
//     } else {
//         document.getElementById('error_name').innerHTML = '';
//         document.getElementById('name').value = '';
//     }

//     var phone = document.getElementById('phone').value;
//     var regPhone = /^[0-9]{10}$/;
//     if(!regPhone.test(phone)) {
//         flag = false;
//         document.getElementById('error_phone').innerHTML = 'Số điện thoại không để trống và phải đủ 10 số';
//     } else {
//         document.getElementById('error_phone').innerHTML = '';
//         document.getElementById('phone').value = '';
//     }
//     return flag;
// }

$(document).ready(function() { 
    var submit = $("button[type='submit']");
    submit.click(function() {
        var data = $('form#test-form').serialize();
        $.ajax({
            type : 'GET', 
            url : 'https://script.google.com/macros/s/AKfycby9dyT9MRYcsGN0sBh1uJnyu-PJPPFHmLTKM0ElFoL8wx_W3L0/exec',
            dataType:'json',
            crossDomain : true,
            data : data,
            success : function(data) { 
                if(data == 'false') 
                    {
                        alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                    }else{
                        alert('Đã thêm dữ liệu vào Form');
                    }
                }
            });
        return false;
    });
});