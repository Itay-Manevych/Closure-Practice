export default function removeSuccessText()
{    
    const successTextElement = document.getElementById("success");
    if(successTextElement === null)
        return;
    successTextElement.remove();
    return true;
}