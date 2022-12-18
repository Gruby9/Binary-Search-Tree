class Nodes {
    constructor(value, leftChild = null, rightChild = null) {
        this.value = value
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}

class Tree {
    constructor(root) {
        this.root = root
    }

    buildTree(array = []) {
        if (array.length === 0) return
        
        const start = 0
        const end = array.length 
        const mid = Math.round(end / 2)

        const root = new Nodes(array[mid-1])
        root.leftChild = this.buildTree(array.slice(start, mid-1))
        root.rightChild = this.buildTree(array.slice(mid, end))

        return this.root = root
    }

    order(newRoot = this.root, arr = []) {
        if (newRoot.leftChild !== undefined) this.order(newRoot.leftChild, arr)
        arr.push(newRoot.value)
        if (newRoot.rightChild !== undefined) this.order(newRoot.rightChild, arr)
        return arr
    }

    insert(value, newRoot = this.root, arr = []) {
        if (newRoot.leftChild !== undefined) this.insert(value, newRoot.leftChild, arr)
        if (value <= newRoot.value) {
            arr.push(value)
            arr.push(newRoot.value)
            value = undefined
        } else {
            arr.push(newRoot.value)
        }
        if (newRoot.rightChild !== undefined) this.insert(value, newRoot.rightChild, arr)
        return arr, this.buildTree(arr)
    }
}

const newTree = new Tree

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightChild !== undefined) {
      prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.leftChild !== undefined) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}


newTree.buildTree([1,3,5,7,9,11,13,14,15,16,17,18])
prettyPrint(newTree.root)
console.log(newTree.root)
console.log(newTree.insert(6))
console.log(newTree.insert(8))
console.log(newTree.insert(10))
console.log(newTree.insert(12))


prettyPrint(newTree.root)
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]