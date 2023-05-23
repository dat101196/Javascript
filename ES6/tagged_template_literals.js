function template(strings, ...keys) {
    return (...values) => {
      const dict = values[values.length - 1] || {};
      console.log('dict: ', dict);
      const result = [strings[0]];
      keys.forEach((key, i) => {
        const value = Number.isInteger(key) ? values[key] : dict[key];
        console.log(`key: ${key} - value: ${value}`);
        result.push(value, strings[i + 1]);
      });
      return result.join("");
    };
  }
  
  const t1Closure = template`${0}${1}${0}!`;
  // const t1Closure = template(["","","","!"],0,1,0);
  console.log('t1Closure: ',t1Closure("Y", "A")); // "YAY!"
  
  const t2Closure = template`${0} ${"foo"}!`;
  // const t2Closure = template([""," ","!"],0,"foo");
  console.log('t2Closure: ', t2Closure("Hello", { foo: "World" })); // "Hello World!"
  
  const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
  // const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
  console.log('t3Closure: ', t3Closure("foo", { name: "MDN", age: 30 })); // "I'm MDN. I'm almost 30 years old."
  console.log('t3Closure: ', t3Closure({ name: "MDN", age: 30 })); // "I'm MDN. I'm almost 30 years old."