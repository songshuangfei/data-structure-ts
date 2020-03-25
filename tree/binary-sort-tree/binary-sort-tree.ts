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

export class BinarySortTree<T>{
  private root:TreeNode<T> = null;

  // 被插入元素放在左边就返回true
  public insert(item: T, comparisonRule: (i: T, inserted: T) => boolean) {
    if(this.root==null){
      this.root = new TreeNode<T>(item);
      return;
    }
    function _insert(root: TreeNode<T>) {
      if (comparisonRule(root.getItem(), item)){
        if (root.leftChild === null)
          root.leftChild = new TreeNode<T>(item);
        else
          _insert(root.leftChild);
      }else{
        if (root.rightChild === null)
          root.rightChild = new TreeNode<T>(item);
        else
          _insert(root.rightChild);
      }
    }
    _insert(this.root);
  }

  public inorderTraversal(callback: (item: T) => void){
    function map(root: TreeNode<T>) {
      if(root !== null){
        map(root.leftChild);
        callback(root.getItem());
        map(root.rightChild);
      }
    }
    map(this.root)
  }

  public getRoot(){
    return this.root
  }
}