class ListNode<T>{
  private item: T;
  public prev: ListNode<T>;
  public next: ListNode<T>;
  constructor(item: T) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
  getItem() {
    return this.item;
  }
}

export class DoublyLinkedList<T>{
  private head: ListNode<T>;
  private tail: ListNode<T>;
  private size: number = 0;
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  public add(item: T) {
    let newNode = new ListNode<T>(item);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  public insert(index: number, item: T) {
    if (index >= this.size) {
      this.add(item);
      return;
    } else if (index === 0) {
      let newNode = new ListNode<T>(item);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      let reverse = index * 2 > this.size;
      let newNode = new ListNode<T>(item);
      let p = reverse ? this.tail : this.head;
      let i = reverse ? this.size - 1 : 0;
      while(true){
        if(i===index){
          break;
        }
        reverse ? i-- : i++;
        reverse ? p = p.prev : p = p.next
      }
      p.prev.next = newNode;
      newNode.prev = p.prev;
      newNode.next = p;
      p.prev = newNode;
    }
    this.size++;
  }

  public remove(index: number) {
    if (index >= this.size)
      return
    else if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;//free
    } else if (index == this.size - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;//freee
    } else {
      let reverse = index * 2 > this.size;
      let p = reverse ? this.tail : this.head;
      let i = reverse ? this.size - 1 : 0;
      while(true){
        if(i===index){
          break;
        }
        reverse ? i-- : i++;
        reverse ? p = p.prev : p = p.next
      }
      p.prev.next = p.next;
      p.next.prev = p.prev;
    }
    this.size--;
  }

  public find(rule: (item: T) => boolean): number[] {
    let res = [];
    let i = 0;
    let p = this.head;
    while(p !== null){
      if (rule(p.getItem()))
        res.push(i);
      p = p.next;
      i++;
    }
    return res;
  }


  public forEach(callback: (item: T) => void) {
    let p = this.head;
    while (p !== null) {
      callback(p.getItem());
      p = p.next;
    }
  }

  public forEachReverse(callback: (item: T) => void) {
    let p = this.tail;
    while (p !== null) {
      callback(p.getItem());
      p = p.prev;
    }
  }
  public getSize():number{
    return this.size
  }
}