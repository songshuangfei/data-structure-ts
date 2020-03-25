import { BinarySortTree } from "../binary-sort-tree/binary-sort-tree"

//二叉排序树
let st = new BinarySortTree<Number>();
let data = [2, 1, 3, 3, 3, 3, 4, 5, 3, 8, 6, 10, 45];
data.forEach(i=>{
  st.insert(i, (i, inserted) => {
    return inserted <= i;
  })
});
console.log(JSON.stringify(st.getRoot()));

let orderedData = [];
st.inorderTraversal(i => { orderedData.push(i) });
console.log(orderedData.join(','))