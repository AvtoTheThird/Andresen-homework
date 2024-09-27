function getPersons(name, age) {
  return [
    { name, age },

    Object.assign({}, { name, age }),

    Object.create(null, {
      name: { value: name, enumerable: true },
      age: { value: age, enumerable: true },
    }),

    (() => {
      let obj = new Object();
      obj.name = name;
      obj.age = age;
      return obj;
    })(),

    new (class {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    })(name, age),

    new (function (name, age) {
      this.name = name;
      this.age = age;
    })(name, age),

    JSON.parse(`{"name":"${name}","age":${age}}`),
  ];
}
console.log(getPersons("John", 23));
