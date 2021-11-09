    function Node(element) {
             this.element = element; 
             this.next = null; 
    }
 
    function LList () {
      this.head = new Node('head'); 
             this.contains = contains; 
             this.insert = insert; 
             this.remove = remove; 
             this.findPrev = findPrev; 
             this.display = display; 
    }
         
    function contains(item) {
      var currNode = this.head
      while(currNode.element !== item) {
        currNode = currNode.next
      }
      return currNode
    }
       
    function insert(newElement, item) {
      var newNode = new Node(newElement)
      var currNode = this.contains(item)
      newNode.next = currNode.next
      currNode.next = newNode
    }
        
    function remove(item) {
      var prevNode = this.findPrev(item)
      var currNode = this.find(item)
      if(prevNode.next !== null) {
        prevNode.next = prevNode.next.next
        currNode.next = null
      }
 
    }
      
    function findPrev(item) {
      var currNode = this.head
      while(currNode.next !== null && currNode.next.element !== item) {
        currNode = currNode.next
      }
      return currNode
    }
   
    function display() {
      var currNode = this.head
      while(currNode.next !== null) {
        currNode = currNode.next
        console.log(currNode.element)
      }
    }
    var llist = new LList()
    llist.insert(1,'head')
    llist.insert(2,1)
    llist.insert(3,2)
    llist.insert(4,3)
    llist.display()
    llist.contains(3)
