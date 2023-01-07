import createErrorText from "./CreateErrorText.js";
import removeErrorText from "./RemoveErrorText.js";
import removeSuccessText from "./RemoveSuccessText.js";

export default function regexCheck(regexPattern, string, type)
{
    if(!(regexPattern.test(string)))
    {
        removeSuccessText();
        createErrorText(type);
        return false;
    }
    else
    {
        removeErrorText(type);
        return true;
    }
    
}