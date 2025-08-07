class Allergies {
  #id;
  #name;
  #effects;

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

  set effects(effects) {
      this.#effects = effects;
  }
  get effects() {
      return this.#effects;
  }

  toJSON() {
      return {
          id: this.#id,
          name: this.#name,
          effects: this.#effects
      };
  }
}

module.exports = Allergies;

