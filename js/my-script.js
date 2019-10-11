
function firstNameValue(){
    var firstNameLength=$('#firstName').val().length;
    if(firstNameLength >= 6 && firstNameLength <= 16) {
        $('#firstNameError').text(' ');
    }else{
        $('#firstNameError').text('first name should be between 6 tio 16 character');
    }
};

// $('#firstName').click(function () {
//     firstNameValue();
// });

$('#firstName').blur(function () {
    firstNameValue();
    $('#firstNameError').text(' ');
});

$('#firstName').keyup(function () {
    firstNameValue();
});

function lastNameValue(){
    var lastNameLength=$('#lastName').val().length;
    if(lastNameLength >= 6 && lastNameLength <= 16) {
        $('#lastNameError').text(' ');
    }else{
        $('#lastNameError').text('last name should be between 6 tio 16 character');
    }
};

// $('#lastName').click(function () {
//     lastNameValue();
// });

$('#lastName').blur(function () {
    lastNameValue();
    $('#lastNameError').text(' ');
});

$('#lastName').keyup(function () {
    lastNameValue();
});

function checkEmailAddress() {
    var pattrn = new RegExp(/^[+a-zA-Z0-9._-]+@[+a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i); //regular expression for form validation
    if (pattrn.test($('#email').val())){
        $('#emailAddressError').text(' ');
    }else{
        $('#emailAddressError').text('Email address is invalid');
    };
}

// $('#email').click(function () {
//     checkEmailAddress();
// });

$('#email').blur(function () {
    checkEmailAddress();
    $('#emailAddressError').text(' ');
});

$('#email').keyup(function () {
    checkEmailAddress();
});

function CheckPassword() {
    var passwordValue= $('#password').val().length;
        if (passwordValue >= 6 && passwordValue <= 15){
            $('#passwordError').text(' ');
        }else{
            $('#passwordError').text('password length at least 8 character');
        }
}

// $('#password').click(function () {
//     CheckPassword()
// });

$('#password').blur(function () {
    CheckPassword()
    $('#passwordError').text(' ');
});

$('#password').keyup(function () {
    CheckPassword()
});

function CheckConfirmPassword() {
    var passwordValue= $('#password').val();
    var confirmPasswordValue= $('#confirmPassword').val();
    if (passwordValue == confirmPasswordValue){
        $('#confirmPasswordError').text('confirm password');
    }else{
        $('#confirmPasswordError').text('invalid password');
    }
}
$('#confirmPassword').blur(function () {
    CheckConfirmPassword()
    $('#confirmPasswordError').text(' ');
});

$('#confirmPassword').keyup(function () {
    CheckConfirmPassword()
});

function CheckDistrictName() {
    var districtValue= $('#districtName').val();
    if (districtValue == ''){
        $('#districtNameError').text('Select your District');
        // alert('select your district')
    }else{
        $('#districtNameError').text(' ');
    }
}
$('#districtName').change(function () {
    CheckDistrictName()
});










// $('#formSubmit').submit(function () {
//     checkform()
// });


function myfunction() {
    var headingElement= document.createElement('h1');
    headingElement.innerHTML= 'This is a heading';
    document.getElementById('heading').appendChild(headingElement);
}
myfunction();








