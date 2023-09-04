// fill in javascript code here
const inname = document.getElementById("name")
const emplid = document.getElementById("employeeID")
const depart = document.getElementById("department")
const experi = document.getElementById("exp")
const email = document.getElementById("email")
const mob = document.getElementById("mbl")

const form = document.querySelector("form")
let tablebody = document.querySelector("tbody")

let store = [];

form.addEventListener("submit",function(notrefresh)
{
    notrefresh.preventDefault();

     let obj = {
        name : inname.value,
        employid : emplid.value,
        dep : depart.value,
        expe : experi.value,
        emai : email.value,
        mobile : mob.value
    }

    store.push(obj);

    tablebody.innerHTML ="";

    store.map((ele)=>
    {
        const trmake = document.createElement("tr")

        const td1make = document.createElement("td")
        const td2make = document.createElement("td")
        const td3make = document.createElement("td")
        const td4make = document.createElement("td")
        const td5make = document.createElement("td")
        const td6make = document.createElement("td")

        td1make.innerText = ele.name;
        td2make.innerText = ele.employid;
        td3make.innerText = ele.dep;
        td4make.innerText = ele.expe;
        td5make.innerText = ele.emai;
        td6make.innerText = ele.mobile;

        const td7make = document.createElement("td")
        let td7Ans = checkpost(ele.expe)
        td7make.innerText = td7Ans

        
        const td8make = document.createElement("button")
        td8make.innerText = "Delete";

        td8make.addEventListener("click",function()
        {
            td1make.innerText = "";
            td2make.innerText = "";
            td3make.innerText = "";
            td4make.innerText = "";
            td5make.innerText = "";
            td6make.innerText = "";
            td7make.innerText = "";
            td8make.innerText = "";   
        })

        trmake.append(td1make,td2make,td3make,td4make,td5make,td6make,td7make,td8make)

        tablebody.append(trmake)
    })

})

function checkpost(experience)
{
    if(experience > 5)
    {
        // td7make.innerText = "Senior"
        return "Senior"

    }
    else if(experience >= 2 && obj.expe <= 5)
    {
        // td7make.innerText = "Junior"
        return "Junior"
    }
    else if (experience <= 1)
    {
        // td7make.innerText = "Fresher"
        return "Fresher"
    }
}