

let arr = []
let c=0 
let c1=0 
let c2=0

class Node
{   
    constructor(element,left=null,right=null)
    {         
       this.element=element         
       this.left=left
       this.right=right     
    } 
}


function add(n)
{
node=new Node(n)
  if(arr[c]==undefined)
  {
     arr[c]=(node)
  }
  else
  {
    c1++
      if(c1==1)
    	{
         c2++
         (arr[c].left)=(node)
          arr[c2]=(node)
        }
        if(c1==2)
        {
            (arr[c].right)=(node)
            c2++
            arr[c2]=(node)
            c1=0
            c++
        }
  }
}
add(1)
add(2)
add(3)
add(4)
add(5)
console.log(arr)

