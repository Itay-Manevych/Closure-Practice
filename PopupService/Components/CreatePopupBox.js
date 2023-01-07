import CreateCloseButton from "./CreateCloseButton.js";
import CreateHtmlContainer from "./CreateHtmlContainer.js";

export default function CreatePopupBox(html, options){
    const popupBox = document.createElement("div");
    popupBox.id = "popup";
    popupBox.className = options.popupClassName;
    popupBox.insertAdjacentElement("afterbegin", CreateCloseButton("./assets/X-mark.png"));
    popupBox.insertAdjacentElement("beforeend", CreateHtmlContainer(html));
    return popupBox;
}