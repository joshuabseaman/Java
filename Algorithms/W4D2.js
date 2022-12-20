/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        return this.items.push(item);
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        let firstElement = this.items.shift();
        return firstElement;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}


// QUEUE CLASS EXTRA CHALLENGE
class QueueNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(data){
        let newQueueNode = new QueueNode(data);
        if(this.head === null && this.tail === null) {
            this.head = newQueueNode;
            this.tail = newQueueNode;
            return this;
        }
        this.tail.next = newQueueNode;
        this.tail = newQueueNode;
        return this;
    }

    dequeue(){
        if(this.head === null && this.tail === null) {
            return this;
        }
        let newData = this.head.data;
        if(this.head === this.tail) {
            this.head = this.head.next;
            this.tail = null;
            return newData;
        }
        this.head = this.head.next;
        return newData;
    }
}