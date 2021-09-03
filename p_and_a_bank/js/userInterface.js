document.querySelector('#send').addEventListener('click', sendCredit);
let spinnerWrapper = document.querySelector('.spinner-wrapper');

function script (){
    document.getElementById("quota").style.display = "None";  
    document.getElementById("lblQuota").style.display = "None"; 
    document.getElementById('lblmonth').style.display = "None";
    document.getElementById('month').style.display = "None";
    document.getElementById('lblmonth').style.display = "None";
    document.getElementById('month').style.display = "None";
    document.getElementById('empleado').style.display = "None"; 
    document.getElementById('divIni').style.display= "None";
    document.getElementById('property').style.display = "None"; 
    document.getElementById('mortgage').style.display = "None"; 
} 


function sendCredit(){
    var name = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;
    var cc = document.querySelector('#cc').value;
    var age = document.querySelector('#age').value;
    var card = document.querySelector('#select').value;
    var activity = document.querySelector('#typeActivity').value;
    var typeContract = document.querySelector('#typeContract').value;
    var month = document.querySelector('#month').value;
    var typeProperty = document.querySelector('#typeProperty').value;
    var value = document.querySelector('#value').value;
    var contact = document.querySelector('#contact').value;
    var quota = document.querySelector('#quota').value;
    var amount = document.querySelector('#amount').value;
    var term = document.querySelector('#term').value;
    var initial = document.querySelector('#initial').value;
    var typeCredit = document.querySelector('#typeCredit').value;
    var income = document.querySelector('#income').value;
    var expenses = document.querySelector('#expenses').value;

    createJson(name, surname, cc, age,card, activity,typeContract,month,typeProperty,value,contact,quota,amount,term,initial,typeCredit,income,expenses);
}

function ShowSelected(){
    var combo = document.querySelector('#select').value;
    if(combo === "1"){
        document.getElementById("quota").style.display = "inline";  
        document.getElementById("lblQuota").style.display = "inline"; 
    }else{
        document.getElementById("quota").style.display = "None";  
        document.getElementById("lblQuota").style.display = "None"; 
    }
}

function verifyContract(){
    var combo = document.querySelector('#typeContract').value;

    if(combo==="2"){
        document.getElementById('lblmonth').style.display = "None";
        document.getElementById('month').style.display = "None";
    } else{
        document.getElementById('lblmonth').style.display = "Inline";
        document.getElementById('month').style.display = "Inline";
    }
} 

function verifyActivity(){
    var combo = document.querySelector('#typeActivity').value;

    if(combo ==="1"){
        document.getElementById('empleado').style.display = "Inline"; 
    } else {
        document.getElementById('empleado').style.display = "None"; 
    }
}

function verifyCredit(){
    var combo = document.getElementById('typeCredit').value;

    if(combo === "1"){
        console.log("hipoteca");
        document.getElementById('mortgage').style.display = "Inline"; 
        document.getElementById('property').style.display = "None"; 
        document.getElementById('divIni').style.display= "Inline";

    } else if (combo === "2"){
        console.log("libre");

        document.getElementById('mortgage').style.display = "Inline"; 
        document.getElementById('divIni').style.display= "None";
        document.getElementById('property').style.display = "None"; 
    } else if("3"){
        document.getElementById('mortgage').style.display = "Inline"; 
        document.getElementById('divIni').style.display= "None";
        document.getElementById('property').style.display = "Inline"; 
    } else{
        document.getElementById('mortgage').style.display = "None"; 
        document.getElementById('property').style.display = "None"; 
        document.getElementById('divIni').style.display= "None";

    }
}
