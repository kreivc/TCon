
function validate(form){
    if(form.email.value == ""){
        alert("Name must be filled");
        return false;
    
    }else if(!isAlphabet(form.fullname.value)){
        alert("Name must be filled with alphabet");
        return false;

    }else if(form.fullname.value.length < 5 || form.fullname.value.length > 20){
        alert("Name must between 5-20 characters");
        return false;
        
    }else if(form.email.value == ""){
        alert("email must be filled");
        return false;

    }else if(!form.email.value.endsWith("@gmail.com") && !form.email.value.endsWith("@yahoo.com")){
        alert("email format must ends with @gmail.com or @yahoo.com");
        return false;
    
    }else if (form.username.value == ""){
        alert("username must be filled");
        return false;
    
    }else if(form.username.value.length < 5 || form.username.value.length > 20){
        alert("Username must between 5-20 characters");
        return false;

    }else if(form.gender.value == ""){
        alert("gender must be selected");
        return false;
    
    }else if(form.age.value == ""){
         alert("age must be filled");
         return false;
    }
    else if(isNaN(form.age.value)){
        alert("age must be a number");
        return false;
    }
    else if(form.age.value < 1){
        alert("age must greater than 0");
        return false;

    }else if(form.password.value == ""){
        alert("password must be filled");
        return false;
    
    }else if(form.password.value.length < 8){
        alert("password length must minimum 8 characters");
        return false;
    
    }else if(form.confirm_password.value == ""){
        alert("confirm password must be filled");
        return false;

    }else if(form.password.value != form.confirm_password.value){
        alert("password not match with confirm password");
        return false;

    }else if(!form.agreeterms.checked){
        alert("please check the checkbox");
        return false;
    }
    
    return true;
}