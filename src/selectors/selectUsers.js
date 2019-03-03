function getDisplayName(name, surname) {
  // this function really isn't applicable to possible mistakes in the name fields, but
  // in the malformed data I saw form the API, it would fix the surname and name names because
  // the surname names aren't multiple words in those cases

  // an example I found was "José Luis Rojas" in a single JSON property which this will convert to "Rojas, José Luis"

  if (name && surname) {
    return `${surname}, ${name}`
  }

  const fullKnownName = `${name}${surname}`
  const wordsInName = fullKnownName.trim().split(' ')
  const likelySurname = wordsInName[wordsInName.length - 1]
  const likelyName = wordsInName.slice(0, wordsInName.length - 1).join(' ')

  return `${likelySurname}, ${likelyName}`
}

function isBirthdayMonth(rawBirthday) {
  const birthday = new Date(rawBirthday * 1000)

  const birthMonth = birthday.getMonth()

  const today = new Date()
  const todayMonth = today.getMonth()

  return birthMonth === todayMonth
}


export default function selectUsers(users) {
  return users.map(user => ({
    isBirthdayMonth: isBirthdayMonth(user.birthday.raw),
    displayName: getDisplayName(user.name, user.surname),
    ...user
  }))
}
