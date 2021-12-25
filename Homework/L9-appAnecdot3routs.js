const express = require('express')
const app = express()
const PORT = 3000

const toMainPage = `
    <br>
    <p><a href="http://localhost:3000/">НАЗАД</a></p>
    `


app.get ('/', (req, res)=> {

    res.send(`
    <h1>ANECDOTE</h1>
    <p><a href="http://localhost:3000/about-crony">Анекдот про кумів - http://localhost:3000/about-crony</a></p>
    <p><a href="http://localhost:3000/about-IT">Анекдот про програміста - http://localhost:3000/about-IT</a></p>
    <p><a href="http://localhost:3000/about-holms">Анекдот про Шерлока Холмса - http://localhost:3000/about-holms</a></p>
    `)
})


app.get ('/about-crony', (req, res)=> {

    res.send(('<pre>– Куме, а ви можете випити відро води?\n'+
        ' – Я що – корова?\n' +
        ' – А відро горілки?\n' +
        ' – А я що, не козак?</pre>') +  toMainPage)

})


app.get ('/about-IT', (req, res)=> {

    res.send(('<pre>Жінка до чоловіка-програміста:\n' +
        ' — Вирішуй: або я, або пиво!\n' +
        ' — А скільки пива?.</pre>') + toMainPage)

})


app.get ('/about-holms', (req, res)=> {

    res.send(('<pre> Шерлок Холмс і Ватсон гуляють долиною. Раптом чути дикі крики.\n' +
        '— Холмсе, це виє собака Баскервилів?\n' +
        '— Ні, Ватсоне, це сера Генрі годують вівсянкою.</pre>') + toMainPage)

})



app.listen(PORT, () => {

    console.log(`Example app listen on http://localhost:${PORT}`)
})