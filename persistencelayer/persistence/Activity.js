class Activity {
  #id;
  #name;
  #description;
  #isDone;

  set id(id) {
      this.#id = id;
  }
  get id() {
      return this.#id;
  }

  set name(name) {
      this.#name = name.toUpperCase();
  }
  get name() {
      return this.#name;
  }

  set description(description) {
      this.#description = description;
  }
  get description() {
      return this.#description;
  }

  set isDone(isDone) {
      this.#isDone = isDone;
  }
  get isDone() {
      return this.#isDone;
  }

  toJSON() {
      return {
          id: this.#id,
          name: this.#name,
          description: this.#description,
          isDone: this.#isDone
      };
  }
}

module.exports = Activity;



