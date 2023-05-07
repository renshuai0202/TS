/** Stream抽象类 简化示例 */
function Stream() {
  if (!(this instanceof Stream))
    return new Stream();

  this.readable = false;
  this.writable = false;
}

Stream.prototype.write = function(data) {
  throw new Error('not implemented');
};

Stream.prototype.end = function() {
  throw new Error('not implemented');
};

Stream.prototype.pipe = function(dest, options) {
  throw new Error('not implemented');
};

module.exports = Stream;

/**
 * 在 Node.js 的核心库中，有一个叫做 stream 的模块，它用于处理流式数据。
 * 在这个模块中，定义了一个抽象类 Stream，它包含一些基础的流操作方法，
 * 例如 write、end 和 pipe 等，但这些方法都没有具体的实现，需要由子类来实现。

 * 有了这个抽象类，就可以为不同的具体流类型（如文件流、HTTP 请求响应流、WebSocket 数据流等）创建对应的子类，
 * 在子类实现其中的具体流操作逻辑。
 * 这样做的好处是，不同类型的流操作虽然具有相同的基础逻辑，但细节上却存在许多不同。
 * 通过使用抽象类和继承，我们可以避免重复造轮子，并且保障了代码的一致性和可维护性。
 */