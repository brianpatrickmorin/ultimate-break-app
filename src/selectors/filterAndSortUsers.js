function anyUserFieldContainsSearch(user, search) {
  const searchLower = search.toLowerCase()
  return ['name', 'surname', 'region', 'email', 'phone'].some(field => user[field].toLowerCase().includes(searchLower))
}

function sortByField(a, b, {field, ascending}) {
  const ascendingMultiplier = ascending ? 1 : -1
  return ((a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0)) * ascendingMultiplier;
}

export default function filterAndSortUsers(users, search, sortOn) {
  return (search ? users.filter(u => anyUserFieldContainsSearch(u, search)) : users
  ).sort((a, b) => sortByField(a, b, sortOn))
}
