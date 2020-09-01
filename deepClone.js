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
obj2.car.push("宝马");
obj2.car[2].name = "特斯拉2";
obj2.car[3].push("法拉第未来");
obj2.job.comany = "wangyi";

console.log(obj1);
console.log(obj2);

/**
 *
 * 赋值，浅拷贝，深拷贝
 *
 * 基本类型的数据 赋值是值赋值， 引用类型的数据（数组，对象） 赋值是地址赋值，修改目标对象，来源对象也会更改
 * 浅拷贝 如果来源对象的属性都是基础数据类型，修改目标对象，来源对象不会更改。如果属性值是引用类型的数据则需要使用深拷贝（遍历）
 *
 *
 * */

/**
 * @method    深度克隆
 * @param     {obj} source 来源对象
 * @return    {obj} targetObj 目标对象
 */

function deepClone(source) {
  if (source == null) return null;
  var targetObj = {};
  for (item in source) {
    if (source[item].constructor == Object) {
      targetObj[item] = deepClone(source[item]);
    } else if (Array.isArray(source[item])) {
      targetObj[item] = arrayClone(source[item]);
    } else {
      targetObj[item] = source[item];
    }
  }
  return targetObj;
}
/**
 * @method    克隆数组
 * @param     {array} source 来源数组
 * @return    {array} targetArr 目标数组
 */
function arrayClone(source) {
  var length = source.length,
    index = -1,
    targetArr = new Array(length);
  while (++index < length) {
    if (source[index].constructor == Object) {
      targetArr[index] = deepClone(source[index]);
    } else if (Array.isArray(source[index])) {
      targetArr[index] = arrayClone(source[index]);
    } else {
      targetArr[index] = source[index];
    }
  }
  return targetArr;
}
