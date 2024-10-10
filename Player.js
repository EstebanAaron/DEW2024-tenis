class Player {
  name
  ranking
  birthday
  #sex

  constructor (name, ranking = 500, sex = 'female', birthday = '1/1/2000') {
    this.name = name
    this.ranking = ranking
    sex = sex === 'male' ? 'male' : 'female'
    this.#sex = sex
    birthday = birthday.split('/')
    const fecha = new Date(birthday[2], birthday[1] - 1, birthday[0])
    this.birthday = fecha
  }

  getSex () {
    return this.#sex
  }

  getBirthday () {
    return new Intl.DateTimeFormat('es-ES' ,{
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(this.birthday)
  }

  get age () {
    const now = new Date()
    const diff = now.getDate() - this.birthday.getDate()
    return diff
  }
}

module.exports = Player
