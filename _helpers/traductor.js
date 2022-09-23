const translate = require('translate-google')

translate('Hello car', {to: 'es'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})