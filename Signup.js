var a=0,b=0,c=0,d=0,e=0,f=0,g=0,first=0,password;
function emailcheck() 
{
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
    {
        document.getElementById("email1").innerHTML="Invalid Email ID";
        document.getElementById("email").style.borderColor="red";
        a=0;
    }
    else
    {
        document.getElementById("email1").innerHTML="";
        document.getElementById("email").style.borderColor="green";
        a=1;   
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;
    }
}
function namecheck() 
{
    var x = document.getElementById("name").value;
    if (x.length==0) 
    {
        document.getElementById("name1").innerHTML="Name cannot be empty";
        document.getElementById("name").style.borderColor="red";
        d=0;
    }
    else
    {
        document.getElementById("name1").innerHTML="";
        document.getElementById("name").style.borderColor="green";
        d=1;
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;   
    }
}
function collegecheck()
{
    var x=document.getElementById("college").value;
    if(x.length==0)
    {
        document.getElementById("college1").innerHTML="College name cannot be empty";
        document.getElementById("college").style.borderColor="red";
        e=0;
    }
    else
    {
        document.getElementById("college1").innerHTML="";
        document.getElementById("college").style.borderColor="green";
        e=1;   
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;
    }
}
function phonecheck()
{
    var x=document.getElementById("phoneno").value;
    var isnum = /^\d+$/.test(x);
    if(isnum==true&&x.length==10)
    {
        document.getElementById("phoneno").style.borderColor="green";
        document.getElementById("phoneno1").innerHTML="";
        f=1;
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;
    }
    else
    {
        document.getElementById("phoneno1").innerHTML="Phone no should consist of exactly 10 digits";
        document.getElementById("phoneno").style.borderColor="red";
        f=0;
    }
}
function pwdcheck()
{
	password = document.getElementById("pwd").value;
    //Password should contain atleast one alphabet, atleast one numeric character, atleast one special character and password length should be atleast 8
    var exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
 	var x=exp.test(password);
    if(x==false) 
 	{
    	document.getElementById("pwd1").innerHTML="Password should contain atleast one number one special character and at least 8 characters";
        document.getElementById("pwd").style.borderColor="red";
        b=0;   	
    }
    else
    {
        document.getElementById("pwd1").innerHTML="";
        document.getElementById("pwd").style.borderColor="green";
        b=1;
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;   
    }
    if(first!=0)
        conpwdcheck();
    else
        first=1;
}

function conpwdcheck()
{	var conpassword = document.getElementById("conpwd").value;
 	if(conpassword===password&&b==1)
 	{
        document.getElementById("conpwd1").innerHTML="";
        document.getElementById("conpwd").style.borderColor="green";
        c=1;
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;   
    }
    else
    {
        document.getElementById("conpwd1").innerHTML="Passwords do not match";
        document.getElementById("conpwd").style.borderColor="red";
        c=0;
    }
}
function eventcheck1()
{
    document.getElementById("event").style.border="1px solid #D3D3D3";
}
function eventcheck()
{
      

    var x=document.getElementById("event");
    var y=x.options[x.selectedIndex].value;
    if(y=="selectevent")
    {   
        document.getElementById("event").style.borderColor="red";
        g=0;
    }
    else
    {
        g=1;
        document.getElementById("event").style.borderColor="green";
        if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1)
            document.getElementById("submit").disabled=false;
    }
}
function submit()
{   
    if(a==0||b==0||c==0||d==0||e==0||f==0||g==0)
    {
         document.getElementById("submit").disabled=true;
         emailcheck();
         namecheck();
         collegecheck();
         phonecheck();
         pwdcheck();
         conpwdcheck();
         eventcheck1();
         eventcheck();
    }
}
function submit1()
{
    var form = document.getElementById("signupform");
    var elements = form.elements;
    var len = elements.length
    for (var i = 0; i < len; ++i) 
    {
        elements[i].readOnly = true;
    }
    document.getElementById("event").disabled=true;
    document.getElementById("submit").disabled=true;
    alert("Submitted Successfully");
}