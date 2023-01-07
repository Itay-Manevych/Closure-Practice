export default function successTextCheck()
{
    const successTextElement = document.getElementById("success");
    console.log(successTextElement);
    if(!successTextElement) // if it does not exist return false, else return true
        return false;
    return true;
}