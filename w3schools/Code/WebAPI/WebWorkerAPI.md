# 📘 Web Worker API

## Overview

The **Web Worker API** allows for background thread execution in web applications. By offloading tasks to a worker thread, it prevents blocking the main execution thread (UI thread), enabling smoother performance and responsiveness in resource-intensive operations such as data processing, real-time computations, or large file parsing.

---

## ✳️ Key Concepts

### What is a Web Worker?

A **Web Worker** is a JavaScript script executed in a separate thread from the main event loop. Workers run in the background and communicate with the main thread using an event-driven message-passing interface.

---

## 🚧 Use Cases

* Heavy computations without freezing UI
* Image/video/audio processing
* Real-time analytics
* Parsing large datasets (e.g., JSON, CSV)
* Cryptographic functions

---

## 🛠️ Types of Workers

| Type                 | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| **Dedicated Worker** | Runs in a single background thread for one script context.              |
| **Shared Worker**    | Can be accessed by multiple scripts across different browsing contexts. |
| **Service Worker**   | Proxy between web app and network; enables offline support and caching. |

> This documentation focuses primarily on **Dedicated Workers**.

---

## ✅ Basic Workflow

1. **Create a Worker**
2. **Send data to the worker**
3. **Perform background tasks**
4. **Send results back to the main thread**
5. **Terminate the worker (optional)**

---

## 📄 Syntax

```javascript
// Main thread
const worker = new Worker('worker.js');

// Sending message to worker
worker.postMessage(data);

// Receiving message from worker
worker.onmessage = (event) => {
  console.log('Received from worker:', event.data);
};

// Terminating the worker
worker.terminate();
```

```javascript
// Inside worker.js
onmessage = function (event) {
  const result = computeHeavyTask(event.data);
  postMessage(result);
};

function computeHeavyTask(data) {
  // CPU-intensive operation
  return processedData;
}
```

---

## 🔁 Communication

* **Message Passing**: All communication is done via `postMessage()` and the `message` event.
* **Structured Clone Algorithm**: Data passed is deep-cloned using this algorithm (supports most structured data types).

---

## 🧩 Supported Data Types in Messaging

* `String`, `Number`, `Boolean`
* `Object`, `Array`
* `ArrayBuffer`, `Blob`, `File`
* `Map`, `Set`
* `TypedArray` (e.g., `Int32Array`)
* `ImageData`
* `Transferable` objects (ownership transferred instead of copied)

---

## 📌 Important Properties & Methods

### Main Thread (Window Context)

| Method / Property      | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `new Worker(url)`      | Instantiates a new dedicated worker            |
| `worker.postMessage()` | Sends a message to the worker                  |
| `worker.onmessage`     | Callback for incoming messages from the worker |
| `worker.onerror`       | Captures uncaught errors from the worker       |
| `worker.terminate()`   | Terminates the worker manually                 |

### Worker Thread (worker.js)

| Method / Property | Description                                 |
| ----------------- | ------------------------------------------- |
| `onmessage`       | Event handler for messages from main thread |
| `postMessage()`   | Sends message to main thread                |
| `self.close()`    | Gracefully stops the worker                 |

---


## 🔄 Terminating a Worker

```javascript
worker.terminate(); // From main thread
// or inside worker.js
self.close(); // Terminates itself
```

---

## 📚 Example

### Example: Computing Prime Numbers

```javascript
// main.js
const worker = new Worker('prime-worker.js');

worker.postMessage(100000);

worker.onmessage = (e) => {
  console.log(`Found primes: ${e.data}`);
};

// prime-worker.js
onmessage = function(e) {
  const limit = e.data;
  const primes = [];

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  postMessage(primes);
};

function isPrime(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
```


