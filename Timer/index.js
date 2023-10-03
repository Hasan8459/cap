
let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")
let max;


start.addEventListener("click",function(e)
{
    e.preventDefault();
   
    let hour = document.getElementById("hours").value

    let minute = document.getElementById("minutes").value

    let second = document.getElementById("seconds").value 

    if(hour !== "" || minute !== "" || second !== "")
    {
         max = (Number(hour)*60*60)+(Number(minute)*60)+(Number(second))
      
        console.log(max)
         startTimer(max)

    }
})
   

let go;


function startTimer(number)
{
    let num = (number)
    
    go = setInterval(()=>
    {
       
        num = Number(num-1)

           show(num)
          
        },1000)
}

function show(n)
{
    let h = document.getElementById("hours")
    let m = document.getElementById("minutes")
    let s = document.getElementById("seconds")
    if(n > 3600)
    {
      h.value = parseInt(n/3600)
      m.value = parseInt((n%3600)/60)
      s.value = ((n%3600)%60) 
     //console.log("Got")
     
    }

    else if(n<3600 && n>60)
     {
          h.value = 0;
          m.value = parseInt(n/60)
          s.value = (n%60)
         
     }

     else if(n<60)
     {
          h.value = 0;
          m.value = 0;
          s.value = n;
         
     }
}


pause.addEventListener("click",function(e)
{
    //e.preventDefault()

    clearInterval(go)
})

reset.addEventListener("click",function(e)
{
    e.preventDefault();

    clearInterval(go)
    startTimer(max)
    
})