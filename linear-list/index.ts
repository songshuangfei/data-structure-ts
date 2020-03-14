import { LinearList } from "./linear-list"
class DataItem {
  private d: string;
  constructor(d: string) {
    this.d = d;
  }
  public getData() {
    return this.d;
  }
}

let l = new LinearList<DataItem>();

l.add(new DataItem("a"));
l.add(new DataItem("b"));
l.add(new DataItem("c"));
l.add(new DataItem("d"));
let str1 = ""
l.forEach(item=>{
  str1 += `${item.getData()}->`;
});
str1 +=`\nlength: ${l.getLength()}`
console.log(str1)
//------------------------------------
l.insert(l.getLength(), new DataItem("e"));
l.insert(2, new DataItem("f"));
l.insert(0, new DataItem("g"));
l.insert(1000, new DataItem("h"));
let str2 = ""
l.forEach(item=>{
  str2 += `${item.getData()}->`
});
str2 +=`\nlength: ${l.getLength()}`
console.log(str2)

//------------------------
l.remove(0);
l.remove(l.getLength()-1);
l.remove(1000);
let str3 = "";
l.forEach(item=>{
  str3 += `${item.getData()}->`;
});
str3 +=`\nlength:${l.getLength()}`;
console.log(str3);

//------------------------
l.insert(0, new DataItem("a"));
l.add(new DataItem("e"));
let res1 = l.find((item)=>{
  return item.getData() ==="a"
})
console.log(res1);
let res2 = l.find((item)=>{
  return item.getData() ==="e"
})
console.log(res2)






