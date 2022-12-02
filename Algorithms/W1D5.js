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
        // SLL IS EMPTY
        if (this.isEmpty()){
            console.log('SLL is empty.')
            return
        }
        // SLL IS NOT EMPTY
        let runner = this.head
        while (runner !== null){
            console.log(runner.value)
            runner =  runner.next
        }
    }

    // adds new node to back of SLL
    insertFromBack(data){
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()){
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

    // creates SLL from an array of values
    seedFromArray(vals){
        for (const data of vals){
            this.insertFromBack(data)
        }
        return this
    }

    // adds node to front of SLL
    insertFromFront(data){
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            return this
        }
        // SLL IS NOT EMPTY
        newNode.next = this.head;
        this.head = newNode;
        return this
    }

    // remove node from from of SLL
    removeAtFront(){
        // SLL IS EMPTY
        if (this.isEmpty()){
            return this
        }
        // SLL IS NOT EMPTY
        this.head = this.head.next;
        return this
    }

    // average values of SLL?
    average(){
        let total = 0;
        let length = 0;
        let runner = this.head;
        while (runner !== null){
            length++;
            total += runner.value;
            runner = runner.next;
        }
        console.log(`Average is: ${total/length}`)
        return this
    }

    // removes the last node from the SLL
    removeFromBack(){
        // SLL IS EMPTY
        if (this.isEmpty()) {
            return this;
        }
        // SLL HAS ONE
        if (this.head.next === null) {
            this.head = null;
            return this;
        }
        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner.next.next !== null) {
            runner = runner.next;
        }
        runner.next = null;
        return this
    }

    // validate if target is in SLL
    contain(target){
        // SLL IS EMPTY
        if (this.isEmpty()){
            return false;
        }
        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner !== null){
            if (runner.value === target){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    containsRecursive(val, current = this.head){
        // SLL IS EMPTY
        if (this.isEmpty()) {
            return false;
        }
        // END OF SLL
        if (current === null) {
            return false;
        }
        // FOUND VALUE
        if (current.value === val) {
            return true;
        }
        // RECURSIVE
        return this.containsRecursive(val, current.next);
    }
    // insert node at given index
    insertAt(value, index) {
        // SLL IS EMPTY
        if (this.isEmpty()){
            console.log(`SLL is empty`);
            return this;
        }
        const newNode = new Node(value);
        // INDEX = 0
        if (index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
        // INDEX > 0
        let counter = 0;
        return this;
    }

    // remove values from SLL
    removeVal(val){
        // SLL IS EMPTY
        if (this.isEmpty()){
            console.log(`SLL is empty`)
            return this;
        }
        // val at start
        if (this.head.value === val){
            this.head = this.head.next;
            return this;
        }
        // val in middle
        let runner = this.head;
        while (runner.next != null){
            if (runner.next.value === val){
                runner.next = runner.next.next
                return this;
            }
            runner = runner.next
        }
        // val at back
        if (runner.value == val) {
            this.removeFromBack();
            return this;
        }
        console.log(`SLL DOESN'T HAVE ${val}`)
        return this;
    }

    // retrieves 2nd to last data in node
    secondToLast(){
        // SLL IS EMPTY
        if (this.isEmpty()) {
            return this;
        }
        // SLL HAS TWO NODES
        if (this.head.next === null) {
            console.log(`SLL DOESN'T HAVE 2 VALUES`)
            return null;
        }
        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner.next.next.next !== null) {
            runner = runner.next;
        }
        return runner.next.value;
    }

    // retrieves the kth to last data in node.
    kthToLast(k){

    }
}

// TESTING
let sll1 = new SLL();
sll1.seedFromArray([1,2,3,4,5])

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(`Printing values...`)
sll1.printValues()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const test1 = 5;
console.log(sll1.containsRecursive(test1) ? `SLL contain ${test1}` : `SLL does NOT contain ${test1}`);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const test2 = 0;
console.log(sll1.containsRecursive(test2) ? `SLL contain ${test2}` : `SLL does NOT contain ${test2}`);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const test3 = 6;
console.log(`Removing ${test3}...`)
sll1.removeVal(test3);
console.log(`Printing values...`)
sll1.printValues()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(`Removing second to last...`)
sll1.secondToLast();
sll1.printValues()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')