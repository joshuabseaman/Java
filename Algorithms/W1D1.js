// MON

/* 
Intro to Singly Linked Lists
- OOP
- Array VS SLL
*/
class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}



class SLL {
    constructor() {
        this.head = null;
    }
    //  MONDAY -------------------------------------------------------------------//
    /**
     * Prints all the nodes in the list to the console.
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
    isEmpty(){
        if(this.head === null){
            return true
        }
        return false
    }
    printValues() {
        // SLL IS EMPTY
        if(this.isEmpty()){
            console.log("SLL IS EMPTY")
        }
        // SLL IS NOT EMPTY
        let runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next.next
        }
    }
}

var sll = new SLL();
let slnode = new SLNode("a");
let slNode1 = new SLNode('a');
let slNode2 = new SLNode('b');