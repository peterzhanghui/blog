// 测试数据
var obj1 = {
  name: "obj1",
  age: 12,
  car: ["奔驰", "保时捷", { name: "特斯拉" }, ["byd", "小鹏"]],
  lanage: function () {
    console.log(this.name);
  },
  job: {
    name: "web",
    comany: "alibaba",
  },
};
var obj2 = deepClone(obj1);

obj2.name = "obj2";
obj2.car.push("宝马2");
obj2.car[2].name = "特斯拉2";
obj2.car[3].push("小鹏2");
obj2.job.comany = "alibaba22";

console.log(obj1);
console.log(obj2);

/**
 *
 * 赋值，浅拷贝，深拷贝
 *
 * 1、值类型的数据 赋值是值赋值， 引用类型的数据（数组，对象） 赋值是地址赋值，修改目标对象，来源对象也会更改
 * 2、浅拷贝 如果来源对象的属性都是值类型的数据，修改目标对象，来源对象不会更改。如果属性值是引用类型的数据则需要使用深拷贝（遍历）
 * 3、JSON.parse(   JSON.stringify()   ) 序列化和反序列    JSON在执行字符串化的这个过程时，会先进行一个JSON格式化，获得安全的JSON值，因此如果是非安全的JSON值，就会被丢弃掉。
 *    其中undefined、function、symbol这三种类型的值就是非安全的（包括该对象的属性循环赋值该对象），所以格式化后，就被过滤掉了，而set、map这种数据格式的对象，也并没有被正确处理，而是处理成了一个空对象
 *
 * 3、object.assgn()   属于浅拷贝
 *
 *
 * 待完善：考虑 正则，Date这种类型的数据
 * 类型判断的方法 对比   typeof    其中typeof返回的类型都是字符串形式
 *                    instanceof  通常用于typeof结果为object时，判断是否是具体制定的类型（注意类型需要大小写精确）  eg:  [1,2,3] instanceof Array   // true
 *                    Object.prototype.toString.call()  对象原型链判断方法：   eg:  Object.prototype.toString.call({name: 'Hello'})   // [object Object]
 *                    constructor   判断方法跟instanceof相似,但是constructor检测Object与instanceof不一样,constructor还可以处理基本数据类型的检测,不仅仅是对象类型 
 *                      1.null和undefined没有constructor;
                        2.判断数字时使用(),比如  (123).constructor,如果写成123.constructor会报错
                        3.constructor在类继承时会出错,因为Object被覆盖掉了,检测结果就不对了
 * */

/**
 * @method    深度克隆
 * @param     {obj} source 来源数据
 * @return    {obj} target 目标对象
 */

function deepClone(source) {
  if (source == null) return null;

  var target = dataType(source) == "Object" ? {} : [];
  // 遍历source的所有可枚举属性
  for (item in source) {
    if (
      dataType(source[item]) == "Object" ||
      dataType(source[item]) == "Array"
    ) {
      target[item] = deepClone(source[item]);
    } else {
      target[item] = source[item];
    }
  }
  return target;
}
function dataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
