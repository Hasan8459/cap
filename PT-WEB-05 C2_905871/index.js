// fill in javascript code here
let form = document.querySelector("form")

form.addEventListener("submit",function(refresh)
{
    refresh.preventDefault();

    let namein = document.getElementById("name").value
    let doctorid = document.getElementById("docID").value
    let department = document.getElementById("dept").value
    let experience = document.getElementById("exp").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mbl").value

    let role ;

    if(experience > 5)
    {
        role = "Senior"
    }
    else if(experience >=2 && experience <=5)
    {
        role = "Junior";
    }
    else{
        role = "Fresher"
    }

    let tablebody = document.querySelector("tbody")
    let trow = document.createElement("tr")

    let arr = [namein,doctorid,department,experience,email,mobile,role]

   arr.forEach((ele)=>
    {
        let td = document.createElement("td")
        td.innerText = ele;
        trow.appendChild(td)
    })


   
    let newbutt = document.createElement("td")
        newbutt.innerText = "Delete";
        newbutt.style.backgroundColor = "red"

    newbutt.addEventListener("click",function(refr)
    {
        trow.innerHTML = "";
        tablebody.removeChild(trow)
    })

    trow.appendChild(newbutt)


tablebody.append(trow);
})





