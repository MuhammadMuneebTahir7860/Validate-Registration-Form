function submitHandler(){
    var userIdEmpty=document.getElementById("userId").value;
    if(userIdEmpty==""){
        document.getElementById("userIdDanger").innerHTML="** Please fill the User ID field";
        return false;
    } 
    else if(isNaN(userIdEmpty)){
        document.getElementById("userIdDanger").innerHTML="** Please enter numeric value";
        return false;
    }
    else if(userIdEmpty.length<5 || userIdEmpty.length>12){
        document.getElementById("userIdDanger").innerHTML="** User Id length must be between 5 to 12";
        return false;
    }
    // User Id End
    var passwordEmpty=document.getElementById("password").value;
    if(passwordEmpty==""){
        document.getElementById("passwordDanger").innerHTML="** Please Enter Password";
        return false;
    } 
    else if(passwordEmpty.length<7 || passwordEmpty.length>12){
        document.getElementById("passwordDanger").innerHTML="** Password length must be between 7 to 12";
        return false;
    }
    // Password Code End
    var nameEmpty=document.getElementById("name").value;
    if(nameEmpty==""){
        document.getElementById("nameDanger").innerHTML="** Please fill the Name field";
        return false;
    } 
    else if(!isNaN(nameEmpty)){
        document.getElementById("nameDanger").innerHTML="** Please enter alphabates only";
        return false;
    }
    // Name Code End
    var country=document.getElementById("country").value;
    if(country==""){
        document.getElementById("countryDanger").innerHTML="** Please Select Your Country"
        return false;
    }
    // Country Selection Code End
    var zipCode=document.getElementById("zipCode").value;
    if(zipCode==""){
        document.getElementById("zipCodeDanger").innerHTML="** Please Enter Zip Code"
        return false;
    }
    else if(isNaN(zipCode)){
        document.getElementById("zipCodeDanger").innerHTML="** Please Enter Only Numeric Value"
        return false;
    }
    // Zip Code End
    var email=document.getElementById("email").value;
    if(email==""){
        document.getElementById("emailDanger").innerHTML="** Please Enter Your Email";
        return false;
    }
    else if(email.indexOf("@")<=0){
        document.getElementById("emailDanger").innerHTML="** Please Enter Valid Email";
        return false;
    }
    else if(email.charAt(email.length-4)!="." && email.charAt(email.length-3)!="."){
        document.getElementById("emailDanger").innerHTML="** Please Enter Valid Email";
        return false;
    }
    // Email Code End
    var male=document.getElementById("male").checked;
    var female=document.getElementById("female").checked;
    if(male=="" && female==""){
        document.getElementById("sexDanger").innerHTML="** Must Select Male or Female";
        return false;
    }
    //    Sex Selection Code End
    var english=document.getElementById("english").checked;
    var nonEnglish=document.getElementById("nonEnglish").checked;
    if(english=="" && nonEnglish==""){
        document.getElementById("languageDanger").innerHTML="** Must Select One";
        return false;
    }


}