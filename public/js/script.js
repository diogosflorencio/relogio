var badMutable = require('dayjs/plugin/badMutable')
dayjs.extend(badMutable)
// with 🚨 BadMutable 🚨 plugin
const today = dayjs()
today.add(1, 'day')
console.log(today) // update itself, value will be tomorrow