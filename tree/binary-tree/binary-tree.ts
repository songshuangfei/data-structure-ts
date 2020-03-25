class TreeNode<T>{
  public leftChild: TreeNode<T> = null;
  public rightChild: TreeNode<T> = null;
  private item:T;
  constructor(item:T){
    this.item = item
  }
  public getItem(){
    return this.item
  }
}

export class BinaryTree<T>{
  private root:TreeNode<T> =null;

  public init(data: Array<T>, back: T) {
    let nodeList = [...data];
    function create(): TreeNode<T> {
      let root: TreeNode<T> = null;
      let input = nodeList.shift();
      if (!input) {
        return root
      }
      if (input !== back) {
        root = new TreeNode<T>(input);
        root.leftChild = create();
        root.rightChild = create();
      }
      return root
    }
    this.root = create();
  }

  public preorderTraversal(callback: (item: T) => void) {
    function map(root: TreeNode<T>){
      if (root !== null) {
        callback(root.getItem());
        map(root.leftChild);
        map(root.rightChild)
      }
    }
    map(this.root);
  }

  public inorderTraversal(callback: (item: T) => void) { 
    function map(root: TreeNode<T>){
      if (root !== null) {
        map(root.leftChild);
        callback(root.getItem());
        map(root.rightChild)
      }
    }
    map(this.root);
  }

  public postorderTraversal(callback: (item: T) => void) {
    function map(root: TreeNode<T>){
      if (root !== null) {
        map(root.leftChild);
        map(root.rightChild);
        callback(root.getItem());
      }
    }
    map(this.root);
  }

  public layerTraversal(callback: (item: T) => void) {
    let queue: TreeNode<T>[] = [];
    queue.push(this.root);
    while (queue.length){
      let item = queue.shift();
      callback(item.getItem());
      if(item.leftChild){
        queue.push(item.leftChild)
      }
      if(item.rightChild){
        queue.push(item.rightChild)
      }
    }
  }

  public getRoot(){
    return this.root
  }
}