
lower = (w)=>
{
  let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let low = "abcdefghijklmnopqrstuvwxyz";
  
  if(typeof(w) === "string")
  {
    let bag="";
    for(let a=0; a<w.length; a++)
      {
        for(let i=0; i<upp.length; i++)
      {
        if(w[a] === upp[i])
        {
          bag += low[i];
        }
        else if(w[a] === low[i])
        {
          bag += w[a]
        }
      }
      }

    return bag;
  }

  else if(typeof(w) === "object")
  {
     let newarr=[];
    for(let a=0; a<w.length; a++)
      {
        let newstr = w[a]
        let secbag="";
        
        for(let b=0; b<newstr.length; b++)
          {
            for(let i=0; i<upp.length; i++)
              {
                if(newstr[b] === upp[i])
                {
                  secbag += low[i]
                }
                else if(newstr[b] === low[i])
                {
                  secbag += low[i]
                }
              }
          }
        newarr.push(secbag)
      
      }
    return newarr;
  }
}

 let a = ["ASDF","YTRE","OIUY","CVBN"]

let str = "AA"

  console.log(lower(a))
  console.log(lower(str))

