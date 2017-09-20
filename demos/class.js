/*
数据特性：
[[Configurable]]：标识能否通过delete删除属性从而重新定义；能否修改属性的特性，默认为true
[[Enumerable]]：能否通过for……in获取，默认为true
[[Writable]]：能否修改属性值，默认为true
[[Value]]：属性值，默认为undefined
访问器特性：
[[Configurable]]：标识能否通过delete删除属性从而重新定义；能否修改属性的特性，默认为true
[[Enumerable]]：能否通过for……in获取，默认为true
[[set]]：写入属性时调用，默认undefined
[[get]]：读取属性时调用，默认为undefined
涉及函数：
  Object.defineProperty(obj, peopertyNameString, descriptorNestedObj);
  Object.defineProperties(obj, descriptorObj);
  Object.getOwnPropertyDescriptor(obj, propertyNameString);
  Object.create(obj, extraPropertyObj);//规范了原型式继承
 */
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not" + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
}