class BSTNode {
  private data: number;
  private left: BSTNode;
  private right: BSTNode;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  public getData() {
    return this.data;
  }
  public setData(data: number) {
    this.data = data;
  }

  public getLeft() {
    return this.left;
  }
  public setLeft(left: BSTNode) {
    this.left = left;
  }

  public getRight() {
    return this.right;
  }
  public setRight(right: BSTNode) {
    this.right = right;
  }
}

class BinarySearchTree {
  private tree: BSTNode;
  constructor() {
    this.tree = null;
  }

  public getTree() {
    return this.tree;
  }
  public setTree(tree: BSTNode) {
    this.tree = tree;
    return this.tree;
  }

  private searchRecursive(node: BSTNode, data: number): boolean {
    /* 

    현재 node data와 data 를 비교

    같으면 true 반환 

    다르고 현재 node data 보다 data 가 작으면 

    왼쪽과 비교 

    다르고 현재 node data 보다 data 가 크면 

    오른쪽과 비교 
    
    */
    if (!node) {
      return false;
    } else if (data === node.getData()) {
      return true;
    } else if (data < node.getData()) {
      return this.searchRecursive(node.getLeft(), data);
    } else {
      return this.searchRecursive(node.getRight(), data);
    }
  }

  public search(data: number): boolean {
    return this.searchRecursive(this.getTree(), data);
  }

  private insertRecursive(node: BSTNode, data: number): BSTNode {
    if (!node) {
      return new BSTNode(data);
    }

    if (data === node.getData()) {
      return node;
    } else if (data < node.getData()) {
      node.setLeft(this.insertRecursive(node.getLeft(), data));
      return node;
    } else {
      node.setRight(this.insertRecursive(node.getRight(), data));
      return node;
    }
    // root 가 비어있는지 확인
    // 비어있으면 root 에 node 를 넣는다.
    // 비어있지 않으면 root 와 데이터를 비교한다.
    // data 가 root 보다 작으면
    // 왼쪽 자식으로 root node 를 변경한다.
    // data 가 root 보다 크면
    // 오른쪽 자식으로 root node 를 변경한다.
  }

  public insert(data: number) {
    const tree = this.getTree();
    this.setTree(this.insertRecursive(tree, data));
    return tree;
  }
}

module.exports = BinarySearchTree;
// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(10);
// binarySearchTree.insert(4);
// binarySearchTree.insert(2);
// binarySearchTree.insert(6);
// binarySearchTree.insert(5);
// binarySearchTree.insert(7);
// binarySearchTree.insert(12);

// console.log(binarySearchTree.search(10));
// console.log(binarySearchTree.search(4));
// console.log(binarySearchTree.search(2));
// console.log(binarySearchTree.search(6));
// console.log(binarySearchTree.search(5));
// console.log(binarySearchTree.search(7));
// console.log(binarySearchTree.search(12));
