let form = document.getElementById("forms")

form.addEventListener("submit",function(e)
{
    e.preventDefault();

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    if(name !== "" && age !== "")
    {
        localStorage.setItem("Name",name)
        localStorage.setItem("Age",age)
        
    }
    form.reset()
})

let display = document.getElementById("display")

    let div = document.getElementById("showcase")
    let table = document.createElement("table")
    let taHead = document.createElement("thead")
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let taBody = document.createElement("tbody") 
    let i=1;
display.addEventListener("click",function(e)
{
    e.preventDefault();
        
      if(td1.textContent === "" && td2.textContent === "" && td3.textContent === "")
      {
        td1.textContent = "SR";
        td2.textContent = "Name";
        td3.textContent = "Age";
        row.append(td1,td2,td3)
        taHead.append(row)
        table.append(taHead)
        div.append(table)

       
        let tr2 = document.createElement("tr")
        let tdone = document.createElement("td")
        let tdtwo = document.createElement("td")
        let tdthree = document.createElement("td")
        tdone.textContent = i;
        tdtwo.textContent = localStorage.getItem("Name")
        tdthree.textContent = localStorage.getItem("Age")
        tr2.append(tdone,tdtwo,tdthree)
        table.append(tr2)
      }

      else if(td1.textContent !== "" && td2.textContent !== "" && td3.textContent !== ""){

        let tr2 = document.createElement("tr")
        let tdone = document.createElement("td")
        let tdtwo = document.createElement("td")
        let tdthree = document.createElement("td")
        tdone.textContent = i++;
        tdtwo.textContent = localStorage.getItem("Name")
        tdthree.textContent = localStorage.getItem("Age")
        tr2.append(tdone,tdtwo,tdthree)
        table.append(tr2)
      }
})
