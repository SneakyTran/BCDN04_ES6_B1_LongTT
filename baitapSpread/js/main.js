let jumpText = () => {
    let hoverText = document.querySelector("h2.heading").innerHTML;
    let charList = [...hoverText];
    let content = "";
    for (const char of charList) {
        if (char != " ") {
            content += `
                <span>${char}</span>
            `;
        }
    }
    document.querySelector("h2.heading").innerHTML = content;
};

jumpText();
