import Character from "../Character";

test("initial class", () => {
  expect(new Character("Ivan", "Zombie")).toEqual({
    name: "Ivan",
    type: "Zombie",
    health: 100,
    level: 1,
  });
});

test("error if typeof this.name !== string", () => {
  expect(() => new Character(123, "Bowerman")).toThrow();
});

test("error if this.name.length < 2", () => {
  expect(() => new Character("I", "Bowerman")).toThrow();
});

test("error if this.name.length > 10", () => {
  expect(() => new Character("Ivanivanivanivan", "Bowerman")).toThrow();
});

test("error if this.type is not valid", () => {
  expect(() => new Character("Ivan", "Hunter")).toThrow();
});
