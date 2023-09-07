// First way
class PGroup {
  constructor(members = []) {
    this.members = members;
  }

  add(value) {
    if (has(value)) return this
    return new PGroup(this.members.concat([value]))
  }


  delete(value) {
    if (!has(value)) return this
    return new PGroup(this.members.filter(v => v !== value));
  }

  has(value) {
    return this.members.includes(value);
  }
}