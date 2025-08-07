class Drug {
  #id;
  #name;
  #drugCode;

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

  set drugCode(drugCode) {
      this.#drugCode = drugCode;
  }
  get drugCode() {
      return this.#drugCode;
  }

  toJSON() {
      return {
          id: this.#id,
          name: this.#name,
          drugCode: this.#drugCode
      };
  }
}

module.exports = Drug;

