const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000;

let user = {
    id: 0,
    name: 'Cesar',
    phone: '(00)00000-0000'
}

function render(data, obj) {
    for (let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data
}

app.get('/', (req, res) => {
    fs.readFile('./templates/user.html', 'UTF8', (err, data) => {
        if (!err) {
            // data = data.replace('{{{name}}}', user.name)
            // data = data.replace('{{{phone}}}', user.phone)

            res.send(render(data, user))
        }
    })
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})