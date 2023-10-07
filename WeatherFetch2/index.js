document.getElementById("Search").addEventListener("click",function(e)
{
    e.preventDefault()
    if(document.getElementById("container").innerHTML === "")
    {
        let inputget = document.getElementById("city").value
        init(inputget)
    }
    else{
        document.getElementById("container").innerHTML = ""
        let inputget = document.getElementById("city").value
        init(inputget) 
    }
})

//let city = "london";
let API = "d7c899a81c50cac02ff70e3584006294"
async function init(city)
{
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`) 
    
        let data = await res.json()

        console.log(data)
        showdata(data)

    } catch (error) {
        console.log("error")
    }
}



let cont = document.getElementById("container")

showdata = (ele)=>{

    let div = document.createElement("div")
    div.className = "li"
    div.innerHTML=`  <h2>${ele.name} , ${ele.sys.country}</h2>
                    <br>
                    <h1>    <img src="${ele.weather[0].icon} alt="img">    ${ele.clouds.all} C  </h1>
         <h4>Feels like ${ele.main.feels_like} C.   Scattered clouds.Gentle Breeze</h4> 
                    <p>${ele.wind.speed}m/s WNW  ${ele.main.pressure}hPa</p>
                    <p>Humidity ${ele.main.humidity}%  UV:4</p>
                    <p>Dew Point:  ${ele.main.temp_min}C Visibility: ${ele.visibility} </p>`
    

cont.append(div)

let div2 = document.createElement("div")
    div2.className = "li"
    div2.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${ele.name}%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-i.net">123movies-i.net</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`
    
    cont.append(div2)
}
