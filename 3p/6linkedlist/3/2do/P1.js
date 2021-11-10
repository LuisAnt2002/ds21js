var start = Date.now();
 
class Node 

{     
	 constructor(element,next=null)
	  {         
	      this.element=element        
	      this.next=next     
	  } 
} 

class Llist

{     
    constructor()
	    {         
	        this.head=null         
	        this.size=0 
	        this.tail=null    
	    }
}

function queue() 
{
    this.dataStore = Llist;
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}
    
function enqueue(element) 
{
    let node=new Node(element,null)
        if(this.head==null)
        	{
	            let node=new  Node(element)   
	            node.next = this.head 
	            this.head=node
	
	            if(this.tail==null){
	                this.tail=node
            }
        this.size++  
        	}
        else
	        {
	            this.tail.next=node
	            this.tail=node
	        }
        this.size++
}

function dequeue() 
{
    var current=this.head
    current=this.head        
    deleted=current                         
    current=current.next
    this.head=current     
    console.log("Se ha eliminado al primero de la cola"+ deleted.data)        
}

function front() 
{
    return this.head.element;
}

function back() 
{
    return this.tail.element;
}

function toString() 
{
    var current=this.head 
    while(current)
	    {         
	        console.log(current.element)         
	        current=current.next         
	    }    
}
    
function empty() 
{
    if (this.dataStore.length == 0) 
	    {
	        return true;
	    }
    else
	    {
	        return false;
	    }
}

let p=0;
var q = new queue();
for(i=0;i<7;i++)
	{
    	for(j=0; j<10000; j++)
    		{
		        q.enqueue((Math.random()*100).toFixed(0));
		        p++
			 }
	}
	
var end = Date.now();
console.log("El programa tomo "+((end-start)/7).toFixed(2)+" milisegundos");
console.log("El programa tomo "+p+"pasos");
