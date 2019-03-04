import selectUsers from './selectUsers'

const today = Date.now() / 1000 // API returns in seconds and JS operates in milli
const secondsIn2Months = 2628000

const users = [
  {
    birthday: {raw: today},
    name: 'Brian',
    surname: 'Morin'
  },
  {
    birthday: {raw: today + secondsIn2Months},
    name: '',
    surname: 'John Quincy Adams'
  }
]

describe('selectUsers', () => {
  test('adds isBirthdayMonth if raw dob as seconds since epoch is the same as the current month and adds display name', () => {
    const result = selectUsers(users)
    expect(result.map(u => u.isBirthdayMonth)).toEqual([true, false])
  })

  test('adds displayName and fixes name if only surname is specified', () => {
    const result = selectUsers(users)
    expect(result.map(u => u.displayName)).toEqual(['Morin, Brian', 'Adams, John Quincy'])
  })
})
