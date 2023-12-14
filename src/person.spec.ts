import { Person } from "@/person"

it("should say my name", () => {
  const person = new Person()
  expect(person.sayHello()).toBe("hello world!")
})
