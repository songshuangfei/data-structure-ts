import { DoublyLinkedBinaryTree } from "./doubly-linked-tree"

// 二叉树
let t = new DoublyLinkedBinaryTree<String>();
/**
 * //创建了这样一棵二叉树
 *      a
 *     /
 *    b
 *   / \
 *  c   d
 *     /
 *    e
 *   /
 *  f
 *   \
 *    g  
 */
t.init(["a", "b", "c", "#", "#","d", "e", "f", "#", "g"], "#");
//先序遍历
let res = [];
t.preorderTraversal((item)=>{res.push(item)});
console.log(res.join(","))

let res2 = t.find(item=>item==="e").join("->");
console.log(res2)//根节点到被找到节点的路径


