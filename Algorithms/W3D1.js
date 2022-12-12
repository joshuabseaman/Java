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