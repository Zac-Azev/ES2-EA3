class Grandpa {
  #id;
  #nome;
  #cpf;
  #tel;
  #birth;

  set id(id) {
      this.#id = id;
  }
  get id() {
      return this.#id;
  }

  set nome(nome) {
      this.#nome = nome.toUpperCase();
  }
  get nome() {
      return this.#nome;
  }

  set cpf(cpf) {
      this.#cpf = cpf;
  }
  get cpf() {
      return this.#cpf;
  }

  set tel(tel) {
      this.#tel = tel;
  }
  get tel() {
      return this.#tel;
  }

  set birth(birth) {
      this.#birth = birth;
  }
  get birth() {
      return this.#birth;
  }

  // Método para calcular a idade
  howOld() {
      if (!this.#birth) return null;
      const birthDate = new Date(this.#birth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

  toJSON() {
      return {
          id: this.#id,
          nome: this.#nome,
          cpf: this.#cpf,
          tel: this.#tel,
          birth: this.#birth
      };
  }
}

module.exports = Grandpa;



