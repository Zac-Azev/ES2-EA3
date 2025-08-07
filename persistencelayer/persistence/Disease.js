class Disease {
  #id;
  #name;
  #description;

  set id(id) {
      this.#id = id;
  }
  get id() {
      return this.#id;
  }

  set name(name) {
      // O nome da doença também pode ser padronizado para maiúsculas
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

  toJSON() {
      return {
          id: this.#id,
          name: this.#name,
          description: this.#description
      };
  }
}

module.exports = Disease;


