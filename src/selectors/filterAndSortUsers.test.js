import filterAndSortUsers from './filterAndSortUsers'

const francis = {name: 'Francis', surname: 'Canela', region: 'US', email: 'francis.canela@ef.com', phone: '123'};
const kyle = {name: 'Kyle', surname: 'Edwards', region: 'MA, US', email: 'kyle.edwards@ef.com', phone: '123'};
const cole = {name: 'Cole', surname: 'Kerr', region: 'US', email: 'cole.kerr@ef.com', phone: '123'};
const james = {name: 'James', surname: 'Simone', region: 'US', email: 'james.simone@ef.com', phone: '123'};
const chris = {name: 'Chris', surname: 'Campbell', region: 'ME', email: 'c.campbell@ef.com', phone: '123'};

const unsortedUsers = [
  francis,
  kyle,
  cole,
  james,
  chris
]

const ascendingUsers = [
  chris,
  cole,
  francis,
  james,
  kyle,
]

const descendingUsers = [...ascendingUsers].reverse()

describe('filterAndSortUsers', () => {
  test('sorts users ascending by specified property', () => {
    const result = filterAndSortUsers(unsortedUsers, '', {field: 'name', ascending: true})
    expect(result).toEqual(ascendingUsers)
  })

  test('sorts users descending by specified property', () => {
    const result = filterAndSortUsers(unsortedUsers, '', {field: 'name', ascending: false})
    expect(result).toEqual(descendingUsers)
  })

  test('filters case insensitively', () => {
    // matches "Campbell" and "Canela"
    const result = filterAndSortUsers(unsortedUsers, 'ca', {field: 'name', ascending: true})
    expect(result).toEqual([chris, francis])
  })
})
