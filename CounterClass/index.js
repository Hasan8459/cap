let startstop = document.getElementById("startstop")
let go;
let num=0;

startstop.addEventListener("click",function(e)
{
    e.preventDefault();

    if(go)
    {
        stop()
        go=null;
    }
    else{
        start()
    }
   
})

 start = ()=>
{
    let showName = document.getElementById("startstop")
    showName.innerText = "Stop"
    go =  setInterval(()=>
    {
        let input = document.getElementById("counter").value
         num =( num + 1);
        show(num);
    },1000)
}

 stop = ()=>
{
    let showName = document.getElementById("startstop")
    showName.innerText = "Start"
    clearInterval(go)
}

 show = (number)=>
{
    let inpu = document.getElementById("counter")
    inpu.innerText = number
}

show(num);

let incre = document.getElementById("increment")

incre.addEventListener("click",function(e)
{
    e.preventDefault()
    stop()
    let newnum = document.getElementById("counter").innerText
    let on = Number(newnum)+1;
    show(on) 
})

let decre = document.getElementById("decrement")

decre.addEventListener("click",function(e)
{
    e.preventDefault()
    stop()
    let newnum = document.getElementById("counter").innerText
    let on = Number(newnum)-1;
    show(on)

})