class LogLine {
  #id;
  #date;
  #logLine;

  set id(id) {
      this.#id = id;
  }
  get id() {
      return this.#id;
  }

  set date(date) {
      this.#date = date;
  }
  get date() {
      return this.#date;
  }

  set logLine(logLine) {
      this.#logLine = logLine;
  }
  get logLine() {
      return this.#logLine;
  }

  toJSON() {
      return {
          id: this.#id,
          date: this.#date,
          logLine: this.#logLine
      };
  }
}

module.exports = LogLine;

