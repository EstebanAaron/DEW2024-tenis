/* eslint-env jest */

const Player = require('./Player')

test('Crear un jugador ', () => {
  const player1 = new Player('Pepe')
  expect(player1.name).toBe('Pepe')
})

test('Crea un jugador con ranking', () => {
  const player1 = new Player('Pepe', 200)
  expect(player1.ranking).toBe(200)
})

test('Crear un jugador sin ranking ', () => {
  const player1 = new Player('Pepe')
  expect(player1.name).toBe('Pepe')
  expect(player1.ranking).toBe(500)
})

test('Crea un jugador con ranking y sexo', () => {
  const player1 = new Player('Pepe', 200, 'male')
  expect(player1.getSex()).toBe('male')
})

test('Crea un jugador con ranking y sexo femenino', () => {
  const player1 = new Player('Pepa', 200, 'female')
  expect(player1.getSex()).toBe('female')
})

test('Crea un jugador con ranking y sexo default', () => {
  const player1 = new Player('Pepa', 200)
  expect(player1.getSex()).toBe('female')
})

test('Crea un jugador con ranking y sexo femenino', () => {
  const player1 = new Player('Pepa', 200, 'femalea')
  expect(player1.getSex()).toBe('female')
})

test('Crea un jugador con ranking , sexo y fecha de nacimiento', () => {
  const player1 = new Player('Pepa', 200, 'female', '01/08/1996')
  expect(player1.birthday).toStrictEqual(new Date(1996, 7, 1))
})

test('Crea un jugador sin fecha', () => {
  const player1 = new Player('Pepa', 200, 'femalea')
  expect(player1.getSex()).toBe('female')
  expect(player1.birthday).toStrictEqual(new Date(2000, 0, 1))
})

test('Crea un jugador con ranking , sexo y fecha de nacimiento', () => {
  const player1 = new Player('Pepa', 200, 'female', '31/30/1996')
  expect(player1.birthday).toStrictEqual(new Date(1998, 5, 31))
})

test('Crea un jugador con ranking , sexo y fecha de nacimiento', () => {
  const player1 = new Player('Pepa', 200, 'female', '01/8/1996')
  expect(player1.getBirthday()).toBe('01/08/1996')
})

test('Crea un jugador con fecha de nacimiento y su cumpleaños', () => {
  const player1 = new Player('Pepe', 200, 'male', '01/8/1996')
  expect(player1.getBirthday()).toBe(28)
  const player2 = new Player('Pepa', 200, 'female', '17/10/1996')
  expect(player1.getBirthday()).toBe(27)
})

