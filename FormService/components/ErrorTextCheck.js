export default function errorTextCheck(type)
{
    const errorTextElement = document.getElementsByClassName(`Error${type}`)[0];
    if(!errorTextElement) // if it does not exist return false, else return true
        return false;
    return true;
}