function firstNameVali(){
    var firstNamelength= $('#firstName').val().length;
    if (firstNamelength >= 6 && firstNamelength <= 16){
        $('#firstNameError').text(' ');
    }else{
        $('#firstNameError').text('first name should be 6 to 16 character');
    }
}
$('#firstName').click(function () {
    firstNameVali()
});
$('#firstName').blur(function () {
    firstNameVali()
    $('#firstNameError').text(' ');
});
$('#firstName').keyup(function () {
    firstNameVali()
});

function lastNameVali(){
    var lastNamelength= $('#lastName').val().length;
    if (lastNamelength >= 6 && lastNamelength <= 16){
        $('#lastNameError').text(' ');
    }else{
        $('#lastNameError').text('last name should be 6 to 16 character');
    }
}
$('#lastName').click(function () {
    lastNameVali()
});
$('#lastName').blur(function () {
    lastNameVali()
    $('#lastNameError').text(' ');
});
$('#lastName').keyup(function () {
    lastNameVali()
});

function emailVali(){
    var patern= new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i);
    if (patern.test($('#email').val()) ){
        $('#emailAddressError').text(' ');
    }else{
        $('#emailAddressError').text('email address is invalid');
    }
}
$('#email').click(function () {
    emailVali()
});
$('#email').blur(function () {
    emailVali()
    $('#emailAddressError').text(' ');
});
$('#email').keyup(function () {
    emailVali()
});