class Counter{

    constructor(){
        this.count = 0;
        this.intravel = null;
    }

    start(){
        if(!this.intravel)
        {
            this.intravel = setInterval(()=>
            {
                this.count++;
                this.render()
            },1000)
        }
    }

    stop(){
        if(this.intravel)
        {
            clearInterval(this.intravel)
            this.intravel = null;
        }
    }

    increment(){
        this.stop()
        this.count++;
        this.render()
    }

    decrement(){
        this.stop()
        this.count--;
        this.render();
    }

    render(){
        document.getElementById("counter").textContent = this.count;
    }

   
}

let counterFirst = new Counter
 let startstop = document.getElementById("startstop")

 startstop.addEventListener("click",function(e)
 {
     e.preventDefault();
    if(this.textContent === "Start")
    {
        counterFirst.start()
        document.getElementById("startstop").textContent = "Stop"
    }
    else
    {
        counterFirst.stop()
        this.textContent = "Start"
    }
 })

 

 document.getElementById("increment").addEventListener("click",function(e)
 {
    e.preventDefault()
    counterFirst.increment()
    document.getElementById("startstop").textContent = "Start"
 })

 document.getElementById("decrement").addEventListener("click",function(e)
 {
    e.preventDefault()
    counterFirst.decrement()
    document.getElementById("startstop").textContent = "Start"
 })


















































// let startstop = document.getElementById("startstop")
// let go;
// let num=0;

// startstop.addEventListener("click",function(e)
// {
//     e.preventDefault();

//     if(go)
//     {
//         stop()
//         go=null;
//     }
//     else{
//         start()
//     }
   
// })

//  start = ()=>
// {
//     let showName = document.getElementById("startstop")
//     showName.innerText = "Stop"
//     go =  setInterval(()=>
//     {
//         let input = document.getElementById("counter").value
//          num =( num + 1);
//         show(num);
//     },1000)
// }

//  stop = ()=>
// {
//     let showName = document.getElementById("startstop")
//     showName.innerText = "Start"
//     clearInterval(go)
// }

//  show = (number)=>
// {
//     let inpu = document.getElementById("counter")
//     inpu.innerText = number
// }

// show(num);

// let incre = document.getElementById("increment")

// incre.addEventListener("click",function(e)
// {
//     e.preventDefault()
//     stop()
//     let newnum = document.getElementById("counter").innerText
//     let on = Number(newnum)+1;
//     show(on) 
// })

// let decre = document.getElementById("decrement")

// decre.addEventListener("click",function(e)
// {
//     e.preventDefault()
//     stop()
//     let newnum = document.getElementById("counter").innerText
//     let on = Number(newnum)-1;
//     show(on)

// })