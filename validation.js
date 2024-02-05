$(document).ready(function()
{
    $('#loginForm').submit(function(e)
    {
        e.preventDefault();
        // var first_name = $('#first_name').val();
        // var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        $(".error").remove();
    // if(first_name.length < 3)
    // {
    //     $('#first_name').after('<span class="error">This field is required</span>');
    // }
    // if(last_name.length < 3)
    // {
    //     $('#last_name').after('<span class="error">This field is required</span>');
    // }
    if(email.length < 3)
    {
        $('#email').after('<span class="error">This field is required</span>');
    }
    else{
        var patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var a= patt.test(email);
        if(!a)
        {
            $('#email').after('<span class="error">Enter valid Email Address</span>');
        }
    }
    if(password.length < 3)
    {
        $('#password').after('<span class="error">This field is required</span>');
    }
});
});