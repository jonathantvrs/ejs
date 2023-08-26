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

  delete(value) {
    if (this.has(value)) {
      const removedElementIndex = this.group.indexOf(value);
      this.group.splice(removedElementIndex, 1);  
    }
  } 

  has(value) {
    return this.group.indexOf(value) !== -1
  }

  static from(set) {
    return new Group(set)
  }
}

// second way
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}
