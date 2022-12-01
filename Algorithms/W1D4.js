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

    insertAtBack(data){
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.head === null){
            this.head = newNode;
            return this
        }
        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner.next !== null){
            runner = runner.next
        }
        runner.next = newNode;
        return this
    }

    removeBack() {
        if(this.isEmpty()){
            console.log("SLL IS EMPTY")
            return
        }
        else if (this.head.next == null){
            this.head = null
            return
        }
        let runner = this.head
            while(runner.next.next != null){
                runner = runner.next
            }
            runner.next = null
            return
    }

    contains(target) {
        // Is empty?
        if (this.isEmpty()){
            return false
        }
        // Run through the Singly Linked List
        let runner = this.head; 
        while (runner !== null){
            // Checking if runner's value is the target
            if (runner.value == target) {
                return true
            }
            runner = runner.next
        }
        // Did not find
        return false
    }

    containsRecursive(val, current = this.head) {
        if (current === null) {
            return false;
        }
        if (current.data === val) {
            return true;
        }
        return this.containsRecursive(val, current.next);
    }
}

let sll = new SLL();
sll.insertAtBack(1);
sll.insertAtBack(2);
sll.insertAtBack(3);
sll.insertAtBack(4);
sll.printValues();
sll.removeBack(4);
sll.printValues();
console.log(sll.contains(4));
console.log(sll.contains(3));