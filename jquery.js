<script>
    $(document).ready(function()
    {
    $('#loginForm').submit(function(e)
    {
        e.preventDefault();
        var first_name = $('#firstname').val();
        var last_name = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();
        $(".error").remove();
    if(first_name.length < 3)
    {
        $('#firstname').after('<span class="error">This field is required</span>');
    }
    if(last_name.length < 3)
    {
        $('#lastname').after('<span class="error">This field is required</span>');
    }
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
})
});
    </script>