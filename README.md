# Event Loop in Javascript

So in this article I wanna talk about Event Loop. For my opinion it's difficult topic of Javascript and not everybody gets it. I'll try
to describe in more details about Event Loop. For every Javascript developer should know about this like for junior or middle.
The Event Loop gives you a deeper understanding of how Javascript works.

_JavaScript_ code only works in **single-threaded mode**. This means that only one event can occur at the same time. On the one hand, this is good, since such a restriction greatly simplifies the programming process, there are no parallelism problems here. But, as a rule, in most browsers, each of the tabs has its own event loop. The environment manages multiple parallel loops.

## How works Event loop?

- JavaScript is idle and waiting for its task.
- As soon as tasks appear, the engine starts executing them, starting with the first one that arrives.
- If a new task has arrived, but the engine is busy executing the previous one, it gets in _Queue_.
- _Stack_. Represents the execution flow of JavaScript code. The Event Loop performs one simple task - it monitors the call stack and callback queue. If the call stack is empty, the event loop will take the first event from the queue and push it to the call stack, which will fire it. When a new method is called, a separate block of memory is allocated at the top of the stack. The call stack is responsible for keeping track of all queued operations that need to be executed. When the queue ends, it is popped from the stack.
- _Heap_. A new object is created on the heap.
- _Queue_. The event queue is responsible for sending new functions to the processing track. It follows the queue data structure to maintain the correct sequence in which all operations must be submitted for execution. In simple terms, this is the list of tasks that should be sent for processing and are waiting for their time.
- _WEB API_. They are not part of JavaScript, they are rather based on JS. Every time an asynchronous function is called, it is sent to the browser API. Based on the command received from the call stack, the API starts its own single-threaded operation.

**About this data structure you can check it here https://github.com/ArsenyOK/data-structure**. There I showed how data structure looks in Native Javascript code

### What are macro and micro tasks?

_The difference between them is that microtasks have priority over macrotasks._

For example:

1. **Marco**: setTimeout, setImmediate, setInterval, I/O, UI rendering.

2. **Micro**: Promise, process.nextTick, queueMicrotask

They are executed only after all microtasks have been completed. The _Event Loop_ goes to the macro task queue - and then again, after the macro task, all micro tasks are executed. And so on in a circle until the _Event queue_ is empty.

## How event adds to the queue

**_The operation is posted to the event queue. Hence, we have a looping scheme for performing asynchronous operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads._**

_Simple example_:

```high-light
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
```

_View_:

![eventLoop1](https://user-images.githubusercontent.com/43606985/210100044-9ea253ec-8ad2-46fe-ab0f-173793d41ade.PNG)

_The order of the functions in the program:_

1. Iteration - foo();
2. Iteration - console.log('foo');
3. Iteration - setTimeout();
4. Iteration - baz();
5. Iteration - console.log('baz')
6. Iteration - bar();
7. Iteration - console.log('bar');

***Other example you can check in file eventloop.js*** https://github.com/ArsenyOK/event-loop/blob/master/eventloop.js
