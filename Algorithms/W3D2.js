/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
    /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
    this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap[1];
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        // PUSH THE NUM TO THE ARRAY(this.heap)
        this.heap.push(num);
        // SHIFT UP LOGIC
        // let startIndex = this.heap.length - 1
        let numIndex = this.heap.length -1;
        // while( startIndex > 1)
        while(numIndex > 1) {
            // FIND PARENT INDEX USING Math.floor(index / 2)
            const parentIndex = Math.floor(numIndex / 2);
            // COMPARE PARENT VALUE > CHILD VALUE
            if(this.heap[parentIndex] > this.heap[numIndex]) {
                // SWAP THE PARENT AND CHILD
                // PARENT VALUE < CHILD VALUE
                [this.heap[numIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[numIndex]];
                // SET STARTINDEX TO PARENT INDEX
                numIndex = parentIndex;
            } else {
                // INSERT LOGIC IS DONE
                break;
            }
        }
    }

    // swap values at left and right index
    swapValues(leftIndex, rightIndex) {
        [this.heap[leftIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[leftIndex]];
    }

    /**
  * Extracts the min num from the heap and then re-orders the heap to
  * maintain order so the next min is ready to be extracted.
  * 1. Save the first node to a temp var.
  * 2. Pop last node off and overwrite idx1 with it.
  * 3. Iteratively swap the old last node that is now at idx1 with it's
  *    smallest child IF the smallest child is smaller than it.
  * - Time: O(log n) logarithmic due to shiftDown.
  * - Space: O(1) constant.
  * @returns {?number} The min number or null if empty.
  */
    extract(){
        // NUMBER TO RETURN
        const extractedVal = this.top();
        // SET TOP TO BE LAST ELEMENT
        this.heap[1] = this.heap.at(-1);
        // POP OFF LAST ELEMENT
        this.heap.pop();

        let parentIndex = 1;
        let leftIndex = parentIndex*2;
        while(leftIndex < this.heap.length){
            // RIGHT IS ONE AFTER LEFT
            const rightIndex = leftIndex + 1;
            // ONLY LEFT CHILD WHEN LEFT INDEX IS THE LAST ELEMENT OF THE ARRAY
            if (leftIndex == this.heap.length - 1){
                // LEFT IS SMALLER THAN PARENT
                if (this.heap[leftIndex] < this.heap[parentIndex]) {
                    // SWAP
                    this.swapValues(leftIndex, parentIndex);
                }
            } else {
                // LEFT IS SMALLER THAN RIGHT
                if (this.heap[leftIndex] < this.heap[rightIndex]) {
                    // LEFT IS SMALLER THAN PARENT
                    if (this.heap[leftIndex] < this.heap[parentIndex]) {
                        // SWAP
                        this.swapValues(leftIndex, parentIndex);
                    }
                } else {
                    // RIGHT IS SMALLER THAN PARENT
                    if (this.heap[rightIndex] < this.heap[parentIndex]) {
                        // SWAP
                        this.swapValues(rightIndex, parentIndex);
                    }
                }
            }
            // CHANGE INDICES
            parentIndex = leftIndex;
            leftIndex = parentIndex*2;
        }
        return extractedVal;
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
        return;
        }
    
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    
        console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );
        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

const minHeap = new MinHeap();
minHeap.heap = [null, 2, 7, 5, 9, 14];
console.log(minHeap.heap);
minHeap.insert(1);
console.log(minHeap.heap);
minHeap.printHorizontalTree();
minHeap.extract();
console.log(minHeap.heap);
minHeap.printHorizontalTree();