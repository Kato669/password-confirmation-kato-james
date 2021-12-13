let password1 = document.getElementById('password');
let password2 = document.getElementById('password1');

function subs(){
    if(password1.value.length == 0 || password1.value.length <6){
        document.getElementById('text1').innerHTML = " password can not be less than 6 characters!!";
        return false;
     }else if(password2.value.lengt == 0 || password2.value.length < 6){
        document.getElementById('text2').innerHTML = " password can not be less than 6 characters!!";
        return false;
    }else if(password1.value != password2.value){
        document.getElementById('text2').innerHTML = " passwords are not matching!!";
        return false;
    }
}

// thats all for todays thanks for watching please subscribe amd share