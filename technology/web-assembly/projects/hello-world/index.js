const { instance } = await WebAssembly.instantiateStreaming(fetch('./build/index.wasm'));

console.log(instance.exports.add(1, 2));
