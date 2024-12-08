function proxyFunction(target, handler) {
  return new Proxy(target, handler);
}

const originalFunction = (a, b) => a + b;
const proxyHandler = {
  apply(target, thisArg, args) {
    return target(...args.reverse());
  }
};

const reversedFunction = proxyFunction(originalFunction, proxyHandler);

console.log(reversedFunction(1, 2)); // 2 + 1 = 3
