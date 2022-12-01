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
    seedFromArray(vals){
        for(let data of vals) {
            this.insertAtBack(data)
        }
        return this
    }
}

let sll = new SLL();
sll.insertAtBack(1)
sll.insertAtBack(2)
sll.insertAtBack(3)
sll.insertAtBack(4)

console.log("Insert from back:")
sll.printValues()

let sll2 = new SLL();
sll2.seedFromArray([1,2,3,4,5])

console.log("Seed from array:")
sll2.printValues()