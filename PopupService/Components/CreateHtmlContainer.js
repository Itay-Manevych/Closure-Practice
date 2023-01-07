export default function CreateHtmlContainer(html){
    const container = document.createElement("div")
    container.id = "htmlContainer";
    container.insertAdjacentHTML("afterbegin",html);
    return container;
}