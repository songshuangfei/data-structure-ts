import { DoublyLinkedList } from "./DoublyLinkedList"

function consoleList(l: DoublyLinkedList<string>, reverse: boolean) {
  let str = "";
  if (reverse) {
    l.forEachReverse(item => {
      str += `${item}-`
    });
  } else {
    l.forEach(item => {
      str += `${item}-`
    });
  }
  console.log(str)
}

let l = new DoublyLinkedList<string>();

l.add("a");
l.add("b");
l.add("c");
consoleList(l, false);//a-b-c-
l.insert(0, "d");
l.insert(1000, "e");
l.insert(l.getSize(), "f");
l.insert(l.getSize() - 1, "g");
consoleList(l, false);//d-a-b-c-e-g-f-
l.remove(0);
l.remove(l.getSize() - 1);
l.remove(2);
consoleList(l, false);//a-b-e-g-
l.insert(0, "z");
l.insert(2, "z");
l.insert(1, "z");
l.insert(1230, "z");
consoleList(l, false);//a-b-e-g-
let findRes = l.find(item => {
  return item === "z"
});
console.log(findRes);//[ 0, 1, 3, 7 ] 



