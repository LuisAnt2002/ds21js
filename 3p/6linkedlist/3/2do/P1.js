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
    var currNode=this.head
    currNode=this.head        
    deleted=currNode                         
    currNode=currNode.next
    this.head=currNode     
    console.log("Se ha eliminado a "+deleted.element+" el primero de la cola ");        
}

function front() 
{
    console.log("El primero de la cola es "+ this.head.element); 
}

function back() 
{
    console.log("El ultimo de la cola es "+ this.tail.element); 
}

function toString() 
{
    var currNode=this.head 
    while(currNode)
	    {         
	        console.log(currNode.element)         
	        currNode=currNode.next         
	    }    
}
    
function empty() 
{
    if (this.dataStore.length = 0) 
	    {
	      return true;
	    }
    else
	    {
	      return false;
	    }
}

var p=0;
var q = new queue();
   	for(i=0; i<10000; i++)
    	{
		    q.enqueue((Math.random()*10000).toFixed(0));
		    p++
		}
	
var end = Date.now();
q.toString()
console.log("El programa tomo "+(end-start).toFixed(2)+" milisegundos");
console.log("El programa tomo "+ p +" pasos");
q.front()
q.back()
q.dequeue()
q.front()
