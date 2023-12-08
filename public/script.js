const showItems = async () => {
    let response = await fetch("/api/items");
    let itemsJSON = await response.json();
    let itemsDiv = document.getElementById("itemsDiv");


    if (itemsJSON == "") {
        console.log("Invalid json");
        return;
    }

    itemsJSON.forEach((item) => {
        const section = document.createElement("section");
        itemsDiv.append(section);
        itemsDiv.classList.add("fix");

        const h1 = document.createElement("h1");
        h1.innerHTML = item.name;
        
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        
        p.innerHTML = item.color;
        p2.innerHTML = item.sport;
        p3.innerHTML = item.materials;

        const img1 = document.createElement("img");
        img1.src = "" + item.img;
        section.append(h1);
        section.append(img1);
        section.append(p);
        section.append(p2);
        section.append(p3);
    });
}

const getItems = async() => {
    try {
       let response = await fetch("http://localhost:3000");
       return await response.json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showItems();