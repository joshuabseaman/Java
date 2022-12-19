class DLLNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // true if empty
    isEmpty(){
        return this.head === null;
    }

    // print all the values of the SLL in the console
    printValues(){
        console.log(`PRINTING DLL...`);
        // DLL IS EMPTY
        if (this.isEmpty()){
            console.log('DLL is empty.')
            return this;
        }
        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner !== null){
            console.log(runner.value);
            runner =  runner.next;
        }
        return this;
    }

    // insertAtFront of DLL
    insertAtFront(value){
        console.log(`Inserting ${value} to the front...`);
        const newNode = new DLLNode(value);
        // DLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // DLL IS NOT EMPTY
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // insertAtback of DLL
    insertAtBack(value){
        console.log(`Inserting ${value} to the back...`);
        const newNode = new DLLNode(value);
        // DLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // DLL IS NOT EMPTY
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        return this;
    }

    // remove middle
    removeFromMiddle(){
        console.log(`Trying to remove middle node from DLL...`)
        // DLL IS EMPTY
        if (this.isEmpty()){
            console.log(`DLL is empty!`)
            return this;
        }
        // 
        let headRunner = this.head;
        let tailRunner = this.tail; 
        while (headRunner !== tailRunner){
            headRunner = headRunner.next;
            tailRunner = tailRunner.previous;
        }
        if (headRunner === tailRunner && headRunner !== null) {
            console.log(`Removing ${headRunner.value}!`)
            headRunner.previous.next = headRunner.next;
            tailRunner.next.previous = tailRunner.previous;
        } else {
            console.log(`DLL length is even, no middle node to remove!`)
        }
        return this;
    }

}


// TESTING

console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
const dll1 = new DLL();

dll1.insertAtFront(1).printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtBack(3).printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtFront(4).printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtFront(5).printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtBack(0).printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.insertAtBack(1).insertAtFront(5).printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);
dll1.removeFromMiddle().printValues();
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>`);