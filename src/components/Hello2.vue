<template>
  <div>
    hello2 {{ sayHi('ccccc') }}
    <button @click="getArea({ kind: 'triangle', x: 3, y: 4})">getArea</button>
    <span>{{ greeter(user3) }}</span>

  </div>
</template>

<script lang="ts">
import HelloWorld from './HelloWorld.vue'
import { Component } from 'vue-property-decorator';

@Component
export default class Hello2 extends HelloWorld {


  user = new UserAccount('Clara', 2)
  user2 = { firstName: 'Jane', lastName: 'User'}
  user3 = new Student('Jane', 'M', 'User')


  created() {
    console.log(this.name)
  }

  mounted() {
    console.log(this.user.getAdmin('da', 0))
    logText<LengthWise>({ length: 10, value: 'hi' })
  }

  getArea(obj: Shape) {
    area(obj)
  }

  greeter(person: Person) {
    return "Hello, " + person.firstName + ' ' + person.lastName
  }

}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }

  getAdmin(adminName: string, adminId: number): String {
    this.name = adminName
    this.id = adminId
    return `${this.name} + ${this.id}`
  }
}

interface LengthWise {
  length: number
  value: string
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length)
  return text
}

type Shape = { kind: "circle"; radius: number } | { kind: "square"; x: number } | { kind: "triangle"; x: number; y: number }
function area(s: Shape): number {
  if(s.kind === 'circle') {
    console.log('shape', Math.PI * s.radius * s.radius)
    return Math.PI * s.radius * s.radius
  } else if(s.kind === 'square') {
    console.log('shape2', s.x * s.x)
    return s.x * s.x
  } else {
    console.log('shape3', (s.x * s.y) / 2)
    return (s.x * s.y) / 2
  }
}

interface Person {
  firstName: string
  lastName: string
}

class Student {
  fullName: string
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}










</script>

<style scoped>

</style>
