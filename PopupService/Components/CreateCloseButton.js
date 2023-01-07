export default function CreateCloseButton(imageSource){
    const closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    const img = document.createElement("img");
    img.src = imageSource;
    img.id = "imgCloseButton";
    closeButton.insertAdjacentElement("afterbegin",img);
    return closeButton;
}