
let fetchdata = document.getElementById("fetch")

fetchdata.addEventListener("click",function(e)
{
    e.preventDefault();

    fetch("https://reqres.in/api/users?page=2")
    .then(function(responce)
    {
        return responce.json()
    })
    .then(function(obj)
    {
        console.log(obj.data)
        showAll(obj.data)
    })
    .catch(function(err)
    {
        console.log(err)
    })
})

let con = document.getElementById("cont")

function showAll(a)
{
    a.forEach(element => {
        
        let div = document.createElement("div")

        let img = document.createElement("img")
        let Name = document.createElement("p")
        let email = document.createElement("p")
        let id = document.createElement("p")

         img.src = element.avatar
         Name.textContent = element.first_name+" "+element.last_name;
         email.textContent = element.email;
         id.textContent = element.id;

        div.append(img,Name,email,id)
        con.append(div)
           
    });
}

