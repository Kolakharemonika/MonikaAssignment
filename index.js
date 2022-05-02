function validation() {

    //validation check code start from here
    var Name=document.form1.Name.value; //fetching value of fullname
    var email=document.form1.email.value; //fetching value of email
//name and email validation start

    var matches=Name.match(/\b[^\d\s]+\b/g);
    
   //length of fullname should two string---
        if(matches && matches.length ==2) {
            //comparing length of first & last name greater than 4 letters--
        if (matches[0].length>=4 && matches[1].length>=4) {
           
                      //for email validation---
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            
      
//phone number validatation--
        var phonenumber=document.form1.phone.value;
        phonenumber=phonenumber.replace(/[^\d]/g, "");
        
if (phonenumber.length==10) {
       //phonestate() function calling for assign state and sim name to phone number
    phonestate();
    
    if(phonestate()===true){
        //if phoneNumber is valid then form will submit after Random otp generated
   
const thisisotp=Math.floor(1000 + Math.random()*9000);
console.log("This is otp "+thisisotp); // OTP displayed on Console
document.getElementById("otpname").value=thisisotp;
       
        //after validation --form will submit
        alert("Form will submit......!");
    document.form1.submit() ; 

    }
    else{
       
alert("enter valid details(phoneNumber)....!")
        return false;
    }
}
else{

    alert('Phone Number should be 10 digit');
    return false;
}
       //if it return true then
         return false;
   }
  else {
    alert("You have entered an invalid email address!")
   return false;
          
        }
              } else {
            alert("fullname are two words but length is less than 4 letters");
        return false;
        }
   
    } else {
        alert("You enter invalid name");
        return false;
    }
//if validation false then FORM will not SUBMIT
    function newFunction() {
        document.preventDefault();
    }
}
 
function check(){
    /*onkeypress on text--phone number will display
     like display like (123)-123-1234 if length==9 */
var phonenumber=document.form1.phone.value;
 phonenumber=phonenumber.replace(/[^\d]/g, "")
if(phonenumber.length==9) {
    //Mobile number display like (123)-123-1234
var data=phonenumber.replace(/(\d{3})(\d{3})(\d{3})/,"($1)-$2-$3");
  document.form1.phone.value=data;
 return true;

}
return false;
}


function phonestate(){
    //onkeyup of text-phone this function will call--
    var phonenumber=document.form1.phone.value;
     
var Number=phonenumber.replace(/[^\d]/g, "");//removing Non-digit letters/special characters

   if(Number.length==10) {
       //SimName for alloted first # digit of PhoneNumber
       //for Vodaphone sim--Number between "921 to 999"
    var voda=/^[9][2][1-9]\d{7}$/;
    var voda1=/^[9][3-9][0-9]\d{7}$/;
  
// num 800 not given in assignment
//for Idea sim--Number between "" 801 to 920"
    var idea=/^[8][0][1-9]\d{7}$/;
    var idea1=/^[8][1-9][0-9]\d{7}$/;
    var idea2=/^[9][0-1][0-9]\d{7}$/;
    var idea3=/^[9][2][0]\d{7}$/;
//for relience sim--Number between "621 to 799
    var reli=/^[6][2][1-9]\d{7}$/;
    var reli1=/^[6][3-9][0-9]\d{7}$/;
    var reli2=/^[7][0-9][0-9]\d{7}$/;

    /* for Vodaphone sim--Number between "921 to 999"  */
   
if(voda.test(Number)|| voda1.test(Number)){
    var data=Number.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
    document.form1.phone.value=data;
    var flag=true;
            var vodasim="<form name='form1'>"
            vodasim+= "<input type='text' name='name' readonly  value='Vodaphone' />"
            vodasim+= " </form> "
                if(flag){
                    document.getElementById("mylocation1").innerHTML=vodasim;
                    flag=false;
                    
                }
               //function statecheck call-- for getting state Name
                statecheck();
                

return true;
}

 else if(idea.test(Number)|| idea1.test(Number)|| idea2.test(Number)||idea3.test(Number)){
    var data=Number.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
      document.form1.phone.value=data;

      var flag=true;
            var ideasim="<form name='form1'>"
                ideasim+= "<input type='text' name='name' readonly value='Idea Sim' />"
                ideasim+= " </form> "
                if(flag){
                    document.getElementById("mylocation1").innerHTML=ideasim;
                    flag=false;
                }

                          statecheck();
return true;
   }

   else if(reli.test(Number)|| reli1.test(Number) ||reli2.test(Number)){
    var data=Number.replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3");
    document.form1.phone.value=data;
     var flag=true;
        var relisim="<form name='form1'>"
            relisim+= "<input type='text' name='name' readonly value='Relience' />"
            relisim+= " </form> "
                if(flag){
                    document.getElementById("mylocation1").innerHTML=relisim;
                    flag=false;
                }

                                statecheck();
return true;
   }

else {
    alert("This phone number is noooot valid ");
    return false;
}
return false;
}
return false;
}

    /*Phone number get valid State Name alphabetically,
     first 3 digit of phone number shows Sim card Name & next 3 digit for state name*/
function statecheck()
{    
const phone=document.form1.phone.value;
const state=phone.slice(6,9);

for (let i = 000; i <=999; i++) {
        if(i==state){
           
            if(i<=027){ console.log("ANDHRAPRADESH"); var flag=true;
               var statename="<form action='form1'>";
               statename+= "<input type='text1' name='name1' readonly value='ANDHRA PRADESH'>"; statename+= " </form> "
            if(flag){
            
                document.getElementById("mylocation").innerHTML=statename;
                
                flag=false; } return true;
    }
   else  if(i<=054){ console.log("ARUNACHAL PRADESH"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='ARUNACHAL PRADESH'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=081){ console.log("ASSAM"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='ASSAM'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=108){ console.log("Bihar"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='BIHAR'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=135){ console.log("chattisagarh"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Chhattisgarh'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
   

    else  if(i<=162){ console.log("Goa"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Goa'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=189){ console.log("Gujrat"); var flag=true;
        var statename="<form name='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Gujrat'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=216){ console.log("Haryana"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Haryana'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=243){ console.log("Himachal Pradesh"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Himachal Pradesh'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=270){ console.log("Jammu & Kashmir"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Jammu & Kashmir'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=297){ console.log("Jharkhand"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Jharkhand'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=324){ console.log("karnataka"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1'  readonly value='Karnataka'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=351){ console.log("Kerala"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Kerala'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=378){ console.log("Madhya pradesh"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Madhya Pradesh'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=405){ console.log("Maharashtra"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Maharashtra'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=432){ console.log("Manipur"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Manipur'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=459){ console.log("Meghalaya"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Meghalaya'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=486){ console.log("Mizoram"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Mizoram'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=513){ console.log("Nagaland"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Nagaland'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=540){ console.log("Odisa"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Odisa'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=576){ console.log("Punjab"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Punjab'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=594){ console.log("Rajstan"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Rajastan'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=621){ console.log("Sikkim"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Sikkim'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=648){ console.log("Tamilnadoo"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Tamilnadu'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=675){ console.log("Telgana"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Telangana'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=702){ console.log("Tripura"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Tripura'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=729){ console.log("Utter pradesh"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Uttar Pradesh'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=756){ console.log("Uttarakhand"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Uttarakhand'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=783){ console.log("West Bengal"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='West Bengal'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=810){ console.log("Delhi"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly  value='Delhi'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=837){ console.log("DieDaman & DadraNagarHaveli"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='DieDaman & DadraNagarHaveli'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=864){ console.log("Pondicherry"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Pondicherry'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=891){ console.log("chandigarh"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='chandigarh'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=918){ console.log("Andaman & Nicobar"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Andaman & Nicobar'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=945){ console.log("Lakshdweep"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Lakshdweep'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
    else  if(i<=999){ console.log("Ladakh"); var flag=true;
        var statename="<form action='form1'>";
             statename+= "<input type='text1' name='name1' readonly value='Ladakh'>"; statename+= " </form> "
            if(flag){ document.getElementById("mylocation").innerHTML=statename;
                flag=false; } return true;
    }
   

    return true;
} 
//return false;
 }
//return false;

}
