// first Example

const bar = () => {
  console.log("bar");
};

const baz = () => {
  console.log("baz");
};

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
};

foo();
//

// second Example

(function () {
  console.log("start"); // 1
  setTimeout(function callback() {
    console.log("message from callback");
  }); // 4
  console.log("message"); // 2
  setTimeout(function callback_1() {
    console.log("message from callback_1");
  }, 0); // 5
  console.log("finish"); // 3
})();

//

// third Example

setTimeout(function timeout() {
  console.log("Time-out"); // 4
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Promise Creating"); // 1
  resolve();
});

p.then(function () {
  console.log("Promise Processing"); // 3
});

console.log("The end of script"); // 2

//
