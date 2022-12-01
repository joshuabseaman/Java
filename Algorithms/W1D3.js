class SLNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    // validate if empty
    isEmpty(){
        return this.head === null;
    }
    // print all the values of the SLL in the console
    printValues(){
        if (this.isEmpty()){
            console.log('SLL is empty.')
        }
        let runner = this.head
        while (runner !== null){
            console.log(runner.value)
            runner =  runner.next
        }
    }

    insertAtFront(data) {
        let newNode = new SLNode(data);
        if(this.head === null) {
            this.head = newNode;
            return this;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
    }

    removeAtFront() {
        this.head = this.head.next;
        return this;
    }
}

let sll = new SLL();
sll.insertAtFront(3);
sll.insertAtFront(2);
sll.insertAtFront(1);
sll.printValues();
sll.removeAtFront();
sll.printValues();