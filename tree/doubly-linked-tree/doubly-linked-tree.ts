class TreeNode<T>{
  public leftChild: TreeNode<T> = null;
  public rightChild: TreeNode<T> = null;
  public parent: TreeNode<T> = null;
  private item:T;
  constructor(item:T){
    this.item = item
  }
  public getItem(){
    return this.item
  }
}

export class DoublyLinkedBinaryTree<T>{
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
        root.leftChild ? root.leftChild.parent = root : null;
        root.rightChild = create();
        root.rightChild ? root.rightChild.parent = root : null;
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

  private _preorderTraversal(callback: (node: TreeNode<T>) => void) {
    function map(root: TreeNode<T>){
      if (root !== null) {
        callback(root);
        map(root.leftChild);
        map(root.rightChild)
      }
    }
    map(this.root);
  }

  public find(findRule: (item: T) => boolean): T[] {
    let foundNode:TreeNode<T> = null;
    try {
      this._preorderTraversal(node=>{
        if(findRule(node.getItem())){
          foundNode = node;
          throw new Error("")
        }
      })
    } catch (error) {
      let res:T[] = [];
      let p: TreeNode<T> = foundNode;
      while(p!==null){
        res.unshift(p.getItem());
        p=p.parent;
      }
      return res;
    }
    return []
  }

}