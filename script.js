function validation()
{
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;  
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var date = document.getElementById('date').value;
    var gender= document.forms["form"]["gender choice"]
    if(user == "")
    {
        document.getElementById("u").innerHTML="**Please write your username**";
        return false;
    }
    else if(user.length < 3 || user.length > 20){
        document.getElementById("u").innerHTML="**User name  contain at least three latter and at most 20 latter **";
        return false;
    }
    else if(!isNaN(user)){
        document.getElementById("u").innerHTML="**User name  must be charecter **";
        return false;
    }
    else{
        document.getElementById("u").innerHTML="";
    }
    if(email == "")
    {
        document.getElementById("e").innerHTML="**Please Enetr your email**";
        return false;
    }
    else{
        document.getElementById("e").innerHTML="";
    }
    if(pass == "")
    {
        document.getElementById("p").innerHTML="**Please enter your password**";
        return false;
    }
    else if(pass.length < 6 || pass.length > 14 )
    {
        document.getElementById("p").innerHTML="**Password contain greater than 5 charecter and less than 14**";
        return false;
    }
    else{
        document.getElementById("p").innerHTML="";
    }
    if(conpass == "" )
    {
        document.getElementById("c").innerHTML="**Please conform your password**";
        return false;
    }
    else if(conpass !== pass)
    {
        document.getElementById("c").innerHTML="**Password are not matching**";
        return false;
    }
    else{
        document.getElementById("c").innerHTML="";
    }
    if(date == "")
    {
        document.getElementById("d").innerHTML="**Please your birth date**"
        return false;
    }
    else{
        document.getElementById("d").innerHTML="";
    }
    if(gender[0].checked == false && gender[1].checked == false && gender[2].checked == false)
    {
        document.getElementById("g").innerHTML="**Please Select your gender**";
        return false;
    }
    else{
        document.getElementById("g").innerHTML="";
    }
}