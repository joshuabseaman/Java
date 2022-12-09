/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() { 
        return this.root === null;
    }

    min(current = this.root) { 
        // BST IS EMPTY
        if(this.isEmpty()){
            return null;
        }
        // BST IS NOT EMPTY
        let runner = current;
        while(runner.left != null){
            runner = runner.left
        }
        return runner.data
    }

    minRecursive(current = this.root) { 
        // BASE CASE
        if(current.left === null){
            return current.data
        }
        // FORWARD PROGRESS
        // RECURSIVE CALL
        return this.minRecursive(current.left)
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        //BST IS EMPTY
        if(this.isEmpty()) {
            return null;
        }
        //BST IS NOT EMPTY
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        //BST IS EMPTY
        if(this.isEmpty()) {
            return null;
        }
        //BASE CASE
        if(current.right === null) {
            return current.data;
        }
        //FORWARD PROGRESS
        //RECURSIVE CALL
        return this.maxRecursive(current.right);
    }

// ------------------- TUESDAY --------------------------//
    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) { 
        // BST IS EMPTY
        //***No logic needed since it will break if empty and return false***
        // BST IS NOT EMPTY
        // SET RUNNER AT ROOT
        let runner = this.root;
        // while loop
        while(runner !== null) {
            // searchVal is EQUAL to runner data
            if(runner.data === searchVal) {
                return true;
            // searchVal is LESS THAN to runner data
            } if(searchVal < runner.data) {
                runner = runner.left;
            // searchVal is GREATER THAN to runner data
            } else {
                runner = runner.right;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        //BASE CASE
        if(current === null) {
            return false;
        //CHECK FOR VALUE
        } if(current.data === searchVal) {
            return true;
        }
        //MOVE TOWARDS BASE & RECURSIVE
        //CHECK DIRECTION TO PROGRESS
        if(val < current.data) {
            return this.contains(val, current.left);
        } else {
            return this.contains(val, current.right);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    //RANGE OF BST(max - min)
    range() {
        return this.max() - this.min();
    }

// ------------------- WEDNESDAY --------------------------//
    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    //insert val in BST
    insert(val){
        const newNode = new BSTNode(val);
        // BST IS EMPTY
        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }
        // BST IS NOT EMPTY
        let current = this.root;
        while (current !== null) {
            if (val < current.data && current.left === null) {
                current.left = newNode;
                return this;
            }
            if (val >= current.data && current.right === null) {
                current.right = newNode;
                return this;
            }
            current = val < current.data ? current.left : current.right;
        }
        return this;
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    //recursive insert val in BST
    insertRecursive(val, current=this.root){
        // BST IS EMPTY
        if (this.isEmpty()){
            this.root = new BSTNode(val);
            return this;
        }
        // FOUND WHERE TO INSERT
        if (val < current.data && current.left === null) {
            current.left = new BSTNode(val);
            return this;
        }
        if (val >= current.data && current.right === null) {
            current.right = new BSTNode(val);
            return this;
        }
        // MOVE TOWARDS AND RECURSIVE
        return val < current.data ? this.insertRecursive(val,current.left) : this.insertRecursive(val, current.right);
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

// ------------------- THRUSDAY --------------------------//
    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
    */
    toArrInorder(node = this.root, vals = []) { 
        // RECRUSIVE FUNCTION
        // CHECK TO SEE IF NODE EXISTS
        if(node !== null) {
            // RECURSIVE CALL TO LEFT SIDE
            this.toArrInorder(node.left, vals);
            // PUSH THE NODE DATA INTO ARRAY
            vals.push(node.data);
            // RECURSIVE CALL TO RIGHT SIDE
            this.toArrInorder(node.right, vals);
        } 
        // RETURN ARRAY OF NUMBERS
        return vals;
    }

// ------------------- FRIDAY --------------------------//
    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        // BASE CASE
        if(node === null){
            return 0
        }
        return 1 + this.size(node.left) + this.size(node.right)
    }

    /**
       * Calculates the height of the tree which is based on how many nodes from
       * top to bottom (whichever side is taller).
       * - Time: O(?).
       * - Space: O(?).
       * @param {Node} node The current node during traversal of this tree.
       * @returns {number} The height of the tree.
       */
    height(node = this.root) {
        // BASE CASE
        if(node === null){
            return 0;
        }
        let left = this.height(node.left);
        let right = this.height(node.right);
        // COMPARE THE LEFT HEIGHT AND RIGHT HEIGHT
        if(left < right) {
            return right + 1;
        }
        // WHICHEVER HEIGHT IS BIGGER ADD ONE MORE TO THAT HEIGHT
            return left + 1;
    }

    /**
       * Determine whether the BST is balanced, for a BST to be balanced,
       * a Node's left and right height must have a max difference of 1 AND
       * all Nodes in the tree must be balanced as well.
       * - Time: O(?).
       * - Space: O(?).
       * @param {Node} node The current node during traversal of this tree.
       * @returns {number} The height of the tree.
       */
    isBalanced(node = this.root) {
        if(node === null) {
            return true;
        } 
        let left = this.height(node.left);
        let right = this.height(node.right);
        if(Math.abs(left - right) < 2 && this.isBalanced(node.left) && this.isBalanced(node.right)) {
            return true;
        }
        return false;
    }
}

// const emptyTree = new BinarySearchTree();
// const oneNodeTree = new BinarySearchTree();
// oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
// const twoLevelTree = new BinarySearchTree();
// twoLevelTree.root = new BSTNode(10);
// twoLevelTree.root.left = new BSTNode(5);
// twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
// const threeLevelTree = new BinarySearchTree();
// threeLevelTree.root = new BSTNode(10);
// threeLevelTree.root.left = new BSTNode(5);
// threeLevelTree.root.left.left = new BSTNode(2);
// threeLevelTree.root.left.right = new BSTNode(6);
// threeLevelTree.root.right = new BSTNode(15);
// threeLevelTree.root.right.left = new BSTNode(13);

// console.log(threeLevelTree.min())
// console.log(threeLevelTree.max())
// threeLevelTree.print()

// console.log(threeLevelTree.contains(6));
// console.log(threeLevelTree.contains(7));

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
const fullTree = new BinarySearchTree();

fullTree.insert(25)
fullTree.insert(15)
fullTree.insert(10)
fullTree.insert(22)
fullTree.insert(4)
fullTree.insert(12)
fullTree.insert(18)
fullTree.insert(24)
fullTree.insert(50)
fullTree.insert(35)
// fullTree.insert(70)
fullTree.insert(31)
fullTree.insert(44)
// fullTree.insert(66)
// fullTree.insert(90);
fullTree.print();

// console.log(fullTree.toArrInorder());
console.log(fullTree.height());
console.log(fullTree.isBalanced());