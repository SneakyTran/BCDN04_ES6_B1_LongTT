const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];

let loadColor = () => {
    let content = "";
    for (const index in colorList) {
        if (index == 0) {
            content += `
                <button class="color-button ${colorList[index]} active"></button>
            `;
        } else {
            content += `
                <button class="color-button ${colorList[index]}"></button>
            `;
        }
    }
    document.querySelector("#colorContainer").innerHTML = content;
};

loadColor();

let changeColor = () => {
    let listELE = document.querySelectorAll("#colorContainer button");
    for (let i = 0; i < listELE.length; i++) {
        listELE[i].onclick = () => {
            let activeELE = document.querySelector("#colorContainer .active");
            if (activeELE) {
                activeELE.classList.remove("active");
            }
            listELE[i].classList.add("active");
        };
    }
};
changeColor();
