import CreatePopupBox from "./Components/CreatePopupBox.js";

function Popup(html,options)
{
    const body = document.getElementById("body");
    const button = document.getElementById("popupBtn");
    const popupBox = CreatePopupBox(html,options);

    popupBox.childNodes[0].addEventListener("click", (event)=>{
        ClosePopup();
    })

    function OpenPopup() {
        button.style.visibility = "hidden";
        body.insertAdjacentElement("afterbegin",popupBox);
    }
    
    function ClosePopup(){
        popupBox.remove();
        button.style.visibility = "visible";
    }

    function checkOutSide()
    {
        window.addEventListener("click", (event)=>{
            if(!popupBox.contains(event.target) && !button.contains(event.target))
            {
                ClosePopup();
            }
        })
    }
    
    if(options.isCloseByClickOutside)
        checkOutSide();
    
    return { Open: OpenPopup, Close: ClosePopup};
}

const options = {
    isCloseByClickOutside: true,
    popupClassName: "some name"
};

const popup = Popup("<img src=\"https://github.com/ColmanDevClub.png\" id =\"img\"/>  <p>This is a paragraph!</p> <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"> <button id=\"innerBtn\"> Click Me! </button> </a>",options);
document.getElementById("popupBtn").addEventListener("click", ()=>{
    popup.Open();
    //setTimeout(popup.Close,5000)
})
