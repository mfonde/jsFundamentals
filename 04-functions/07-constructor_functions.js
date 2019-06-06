function Person (name, age, canVote) {
    //   (capital "P")
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

let person4 = new Person('James', 80, true);

console.log(person4);