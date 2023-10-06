class CustomArray{
    constructor(...array){
      this.size = array.length;
      for(let i=0; i<array.length; i++)
        {
          this[i] = array[i]
        }
    }
 
   push(inp){
     this[this.size] = inp
     this.size++;
   }
 
   pop(){
 
     delete(this[this.size-1])
     this.size--;
   }
 
   top(){
     return this[this.size-1]
   }
 
   print(){
     let newarr = [];
     
     for(let key in this)
       {
         if(key !== "size")
         {
           newarr.push(this[key])
         }
       }
 
     return newarr;
   }
 
   printReverse(){
     let arr2 = [];
     for(let key in this)
       {
         if(key !== "size")
         {
           arr2.push(this[key])
         }
       }
 
     return arr2.reverse()
   }
 
   Size(){
     return this.size
   }
   
  }
 
 let num = new CustomArray(2,4,6,8,10)
 
 console.log(num)
 num.push(12)
 console.log(num)
 num.pop()
 console.log(num)
 console.log(num.top())
 console.log(num.print())
 console.log(num.printReverse())
 console.log(num.Size())