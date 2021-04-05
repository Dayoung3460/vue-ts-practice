<template>
  <div>
    hello2 {{ sayHi('ccccc') }}
    <button @click="getArea({ kind: 'triangle', x: 3, y: 4})">getArea</button>
    <span>{{ greeter(user3) }}</span>
    <p>{{ notSure }}</p>
    <p>{{ notSureSecond.toFixed() }}</p>
    <p>{{ list[2] }}</p>
    <button @click="warnUser">warnUser</button>
    <button @click="error('hi')">error</button>
    <button @click="fail">fail</button>
    <p>{{ mySqure.color }}, {{ mySqure.area }}</p>
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
  notSure: any = 'hi'
  notSureSecond: any = 4
  list: any[] = [1, true, 'free']
  u: undefined = undefined
  n: null = null
  mySqure = this.createSquare({ color: 'block' })

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

  warnUser(): void {
    console.log('this is my warning message')

    // basically, null and undefined are lower types of all other types.
    // which means null and undefined can be assigned to the type 'number' for example.
    let u: undefined = undefined
    let n: null = null
    console.log(u, n)
  }

  // The function that returns 'never' can't reach to the end of function.
  error(message: string): never {
    throw new Error(message)
  }

  // Return type can be assumed as 'never'.
  fail() {
    return this.error('Something failed')
  }

  createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if(config.color) {
      newSquare.color = config.color
    }
    if(config.width) {
      newSquare.area = config.width * config.width
    }
    return newSquare
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

let notSure: any = 4
notSure = 'maybe a string instead'
console.log(notSure)

let prettySure: Object = 4
// error: property 'toFixed()' doesn't exist in object
// prettySure.toFixed()
console.log(prettySure)

// has optional property: along with the keyword '?'
interface SquareConfig {
  color?: string
  width?: number
}

















</script>

<style scoped>

</style>
