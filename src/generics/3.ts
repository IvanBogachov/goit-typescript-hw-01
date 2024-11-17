function merge<T, P>(objA: T, objB: P): T & P {
  return Object.assign({}, objA, objB);
}
