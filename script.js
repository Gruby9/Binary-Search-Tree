class Nodes {
    constructor(value, leftChild, rightChild) {
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
        const start = 0
        const end = array.length - 1
        const mid = end / 2

        if (array[start] > array[end]) return
        const root = new Nodes(array[mid])
        root.leftChild = this.buildTree(array.slice(start, mid))
        root.rightChild = this.buildTree(array.slice(mid+1, end))

        return root
    }
}

const newTree = new Tree
console.log(newTree.buildTree([1,2,3,4,5,6,7,8,9]))