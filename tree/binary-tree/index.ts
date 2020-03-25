import { BinaryTree } from "./binary-tree"

// 二叉树
let t = new BinaryTree<String>();
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
console.log(JSON.stringify(t.getRoot()));
//先序遍历
let res = [];
t.preorderTraversal((item)=>{res.push(item)});
console.log(res.join(","))
//中序遍历
let res2 = [];
t.inorderTraversal((item)=>{res2.push(item)});
console.log(res2.join(","))
//后续遍历
let res3 = [];
t.postorderTraversal((item)=>{res3.push(item)});
console.log(res3.join(","))
//层遍历
let res4 = [];
t.layerTraversal((item)=>{res4.push(item)});
console.log(res4.join(","))


