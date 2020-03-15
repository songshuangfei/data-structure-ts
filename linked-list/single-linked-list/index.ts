import { SingleLinkedList } from "./SingleLinkedList"

function consoleList(l: SingleLinkedList<DataItem>) {
  let str = "";
  l.forEach(item => {
    str += `${item.getData()}->`
  })
  console.log(str)
}
class DataItem {
  private d: string;
  constructor(d: string) {
    this.d = d;
  }
  public getData() {
    return this.d;
  }
}

let l = new SingleLinkedList<DataItem>();

l.add(new DataItem("a"));
l.add(new DataItem("b"));
l.add(new DataItem("c"));
l.add(new DataItem("d"));
consoleList(l);//a->b->c->d->

l.insert(l.getLength(), new DataItem("e"));
l.insert(2, new DataItem("f"));
l.insert(0, new DataItem("g"));
l.insert(1000, new DataItem("h"));
consoleList(l);//g->a->b->f->c->d->e->h->

l.remove(0);
l.remove(l.getLength() - 1);
l.remove(1000);
consoleList(l);//a->b->f->c->d->e->

l.insert(0, new DataItem("a"));
l.add(new DataItem("e"));
let res1 = l.find((item) => {
  return item.getData() === "a"
})
console.log(res1);//[ 0, 1 ]

let res2 = l.find((item) => {
  return item.getData() === "e"
})
console.log(res2);//[ 6, 7 ]






