export default class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error(
        "Некорректные данные! name поддерживает только строковый тип данных. Длина name должна быть от 2 до 10 символов"
      );
    } else if (
      type !== "Bowman" &&
      type !== "Swordsman" &&
      type !== "Magician" &&
      type !== "Daemon" &&
      type !== "Undead" &&
      type !== "Zombie"
    ) {
      throw new Error("Укажите корректный тип персонажа");
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    }
  }
}
