
s = localStorage.length
for (let i = 0; i < s; i++) {
    newItem(JSON.parse(localStorage.getItem(i)))
}


function newItem(n = null, check = false) {
    let div = document.createElement("div");
    div.className = "item"
    let item = document.createElement("item");
    let name = n === null ? document.getElementById("input").value : n;
    if (name === "") {
        return;
    }
    sitem = {
        name: name,
        checked: check
    }
    let text = document.createTextNode(name);
    let button = document.createElement("input");
    button.setAttribute("type", "checkbox");
    button.className = "checkbutton";
    button.checked = check;
    // button.onchange = addChecked(localStorage.length - 1);
    button.addEventListener('change', () => {
        console.log('aaaa')
    })
    let para = document.createElement('p');
    para.appendChild(text)
    item.appendChild(button);
    item.appendChild(para);
    div.append(item);
    document.getElementById("tasks").appendChild(div);
    if (n === null) {
        localStorage.setItem(localStorage.length, JSON.stringify(sitem));
    }
}

function addChecked($event) {
    const flag = JSON.parse(localStorage.getItem(localStorage.length - 1));
    flag.checked = !flag.checked;
    console.log(flag)
}

function clearStorage() {
    let tasks = document.getElementById("tasks");
    while (tasks.firstChild) {
        tasks.removeChild(tasks.lastChild);
    }
    localStorage.clear()
}