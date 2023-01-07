import regexCheck from "./components/RegexCheck.js";
import createSuccessText from "./components/CreateSuccessText.js";
import errorTextCheck from "./components/ErrorTextCheck.js";

function Form(html, checkInputs, onSubmit){
    let isValid;
    const body = document.getElementById("body");
    const form = document.createElement("form");
    form.id = "form"
    form.onsubmit = ()=>{return false};
    form.insertAdjacentHTML("afterbegin",html);
    body.insertAdjacentElement("afterbegin",form);

    const onResetForm = ()=>{
        form.reset();
    }
    
    const Submit = (event)=>{
        const data = Object.fromEntries(new FormData(event.target).entries());
        isValid = checkInputs(data);
        if(isValid)
        {
            createSuccessText("submit");
            onSubmit();     
        }      
    }

    form.addEventListener("submit", Submit);

    return {onSubmit : onSubmit, isValid: isValid, onResetForm: onResetForm}
}

const checkInputs = (inputsData)=>{
    const regexNamePattern = /^[A-Za-z]{2,}$/;
    const regexEmailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const regexAgePattern = /^([0-9])+$/

    regexCheck(regexNamePattern,inputsData.fname, "fname")
    regexCheck(regexNamePattern,inputsData.lname, "lname") 
    regexCheck(regexEmailPattern,inputsData.email, "email")
    regexCheck(regexAgePattern,inputsData.age, "age")
    
    let flag = !errorTextCheck("fname") && !errorTextCheck("lname") && !errorTextCheck("email") && !errorTextCheck("age");
    return flag;    
}

const inputs = "<div id=\"inputBox\"> <label for=\"fname\">First name: </label>  <input type=\"text\" id=\"fname\" name=\"fname\"> </div> <div id=\"inputBox\"> <label for=\"lname\">Last name: </label> <input type=\"text\" id=\"lname\" name=\"lname\"> </div> <div id=\"inputBox\"> <label for=\"email\">Email: </label> <input type=\"text\" id=\"email\" name=\"email\"> </div> <div id=\"inputBox\"> <label for=\"age\">Age: </label> <input type=\"text\" id=\"age\" name=\"age\"> </div> <input type=\"submit\" id=\"submit\" value=\"Submit\">"
const form = Form(inputs, checkInputs, ()=>{});

