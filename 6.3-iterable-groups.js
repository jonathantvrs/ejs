// first way
class Group {
  constructor(group = []) {
    this.group = group
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value)
    }
  }
  
  get() {
    return this.group
  }

  delete(value) {
    if (this.has(value)) {
      const removedElementIndex = this.group.indexOf(value)
      this.group.splice(removedElementIndex, 1)
    }
  } 

  has(value) {
    return this.group.indexOf(value) !== -1
  }

  static from(set) {
    return new Group(set)
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.index = 0
  }

  next() {
    if (this.index === this.group.get().length) return { done: true }

    let value = this.group.get()[this.index]

    this.index++

    return { value, done: false }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

// second way
class Group {
  constructor(group = []) {
    this.group = group
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value)
    }
  }
  
  get() {
    return this.group
  }

  delete(value) {
    if (this.has(value)) {
      const removedElementIndex = this.group.indexOf(value)
      this.group.splice(removedElementIndex, 1)
    }
  } 

  has(value) {
    return this.group.indexOf(value) !== -1
  }

  static from(set) {
    return new Group(set)
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.index = 0
  }

  next() {
    if (this.index === this.group.get().length) return { done: true }

    let value = this.group.get()[this.index]

    this.index++

    return { value, done: false }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}