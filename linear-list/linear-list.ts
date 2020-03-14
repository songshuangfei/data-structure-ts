
class ListNode<T> {
  private item: T;
  public next: ListNode<T> = null;
  constructor(item: T) {
    this.item = item;
  }

  getItem() {
    return this.item;
  }
}

export class LinearList<T> {
  private head: ListNode<T> = null;
  private length = 0;

  public add(data: T) {
    let node = new ListNode<T>(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let p = this.head;
      while (p.next !== null) {
        p = p.next;
      }
      p.next = node;
    }
    this.length++;
  }

  public insert(index: number, data: T) {
    if (index >= this.length) {
      this.add(data);
      return;
    }

    if (index === 0) {
      let newNode = new ListNode<T>(data);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let newNode = new ListNode<T>(data);
      let p = this.head;
      let i = 0;
      while (true) {
        if (i === index - 1)
          break;
        i++;
        p = p.next;
      }
      newNode.next = p.next;
      p.next = newNode;
    }
    this.length++;
  }

  public remove(index: number) {
    if (index >= this.length) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let p = this.head;
      let i = 0;
      while (true) {
        if (i === index - 1)
          break;
        i++;
        p = p.next;
      }
      index === this.length - 1
        ? p.next = null
        : p.next = p.next.next
    }
    this.length--;
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

  public getLength(): number {
    return this.length;
  }

  public forEach(callback: (item: T) => void) {
    let p = this.head;
    while (p !== null) {
      callback(p.getItem());
      p = p.next;
    }
  }
}

