const express = require('express')
const router = express.Router()
const fetch =(...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

router.get('/', (req,res)=> {
    const URL = 'https://api.sampleapis.com/health/professions'
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        res.render('pages/professions', {
            title: 'All Health',
            name: 'Health List',
            data
        })
    })
})

router.get('/:id', (req,res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/health/professions/${id}`

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        if(Object.keys(data).length >= 1) {
            res.render('pages/single-profession', {
                title: `Extended Name`,
                name: `Extended Name`,
                data
            })
        }
    })
    .catch(error => {
        console.log('ERROR', error)
    })
})

module.exports = router