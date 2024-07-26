/* eslint-disable @typescript-eslint/no-unused-vars */

class LinkedList {
  head: any
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head)
    this.head = newNode
    this.length++
  }
}

class LinkedListNode {
  value: any
  next: any

  constructor(value: any, next: any) {
    this.value = value
    this.next = next
  }
}

export default LinkedList
