const input = document.getElementsByClassName("form-control")[0];
const myList = document.getElementsByClassName("animeList")[0];

let animeID = 1;

const addItems = (event) => {
    const items = event.target.value;
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("clicked");
        if(classExist){
            parentDiv.classList.remove("clicked");
        } else {
            parentDiv.classList.add("clicked")
        }
        
    })
    const spanTag = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.addEventListener("click", () => {
        mainDiv.remove();
    })
    trashIcon.classList.add("fas","fa-trash-alt");
    spanTag.id = animeID;
    
    const anime = animeID.toString()+ ". " + items;
    spanTag.append(anime);
    parentDiv.append(spanTag);
    mainDiv.append(parentDiv, trashIcon);
    myList.append(mainDiv);
    input.value= "";
    animeID += 1;
    
}
input.addEventListener("change", addItems);


