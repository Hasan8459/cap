let task = document.getElementById("task")
let priority = document.getElementById("priority")

let form = document.querySelector("form")
let tbody = document.querySelector("tbody")

let array = [];

form.addEventListener("click",function(e)
{
    e.preventDefault();
    
        object = {
        input : task.value,
        priority : priority.value
    };
    array.push(object);
    console.log(array)

    tbody.innerHTML = "";
    array.map((ele)=>
    {
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")

        td1.innerText = ele.input;
        td2.innertext = ele.priority;

        tr.append(td1,td2);
        tbody.append(tr)

    })

})