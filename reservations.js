const express = require('express')
const app = express()
const reservations = require('./reservations.json')


//Middleware
app.use(express.json())

app.get('/reservations', (req,res) => {
    res.status(200).json(reservations)
})

app.get('/reservations/:id', (req,res) => {
    const id = parseInt(req.param.id)
    const reservation = reservations.find(reservation => reservation.id === id)
    res.status(200).json(reservation)
})

app.post('/reservations', (req,res) => {
    reservation.push(req.body)
    res.status(200).json(reservations)
})

app.put('/reservations/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let reservation = reservations.find(reservation => reservation.id === id)
    reservation.name =req.body.name,
    reservation.city =req.body.city,
    reservation.type =req.body.type,
    res.status(200).json(reservation)
})

app.delete('/reservations/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let reservation = reservations.find(reservation => reservation.id === id)
    reservations.splice(reservations.indexOf(reservation),1)
    res.status(200).json(reservations)
})

app.listen(8080, () => {
    console.log('serveur à l\'écoute')
})
