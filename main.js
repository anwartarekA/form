let form = document.querySelector('form');
let first_name = document.querySelector('.fname');
let last_name = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.pass');
let first_error = document.querySelector(".first_error");
let last_error = document.querySelector('.last_error');
let email_error = document.querySelector('.email_error');
let password_error = document.querySelector('.password_error');
let success = document.querySelector('.success');
form.onsubmit = function (e)
{
    e.preventDefault();
    if(first_name.value == "")
    {
        first_error.style.display='block';
        last_name.style.marginTop='65.6px';
    }
    else{
        first_error.style.display='none';
        last_name.style.marginTop='0';
    }
    if(last_name.value == "")
    {
        last_error.style.display='block';
        email.style.marginTop='65.6px';
    }
    else
    {
        last_error.style.display='none';
        email.style.marginTop='0';
    }
    if(email.value == '')
    {
        email_error.style.display='block';
        password.style.marginTop = '70.8px';
    }
    else
    {
        email_error.style.display='none';
        password.style.marginTop = '0';
    }
    if(password.value == '')
    {
        password_error.style.display = "block";
        document.querySelector('input[type="submit"]').style.marginTop = "70.8px";
    }
    else
    {
        password_error.style.display = "none";
        document.querySelector('input[type="submit"]').style.marginTop = "0";
    }
    if(first_name.value!=''&&last_name.value!=""&&email.value!=''&&password.value!="")
    {
        success.style.display='block';
        setTimeout(() => {
        success.style.display='none';
        }, 1000);
        first_name.value='';
        last_name.value='';
        email.value='';
        password.value='';
    }
}