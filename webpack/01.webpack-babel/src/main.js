

import './css/index.css'

import './css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'

import 'open-iconic/font/css/open-iconic-bootstrap.css'


class Person {
    // 静态属性, 可通过类名直接访问的属性
    // 实例属性, 只能通过类的实例来访问的属性
    static info = { name: 'zs', age: 20 }
}

console.log(Person.info);

// function Person(name){
//     this.name = name
// }

// var p1 = new Person('hello')

// console.log(p1.name);