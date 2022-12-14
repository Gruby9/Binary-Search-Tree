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

        return root
    }
}

const newTree = new Tree
console.log(newTree.buildTree([1,2,3,4,5,6,7,8,9]))

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightChild !== undefined) {
      prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftChild !== undefined) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

prettyPrint(newTree.buildTree([1,2,3,4,5,6,7,8,9]))