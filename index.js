const express = require('express')
const server = require('./server')

// App
const app = new server.Server().app

app.listen(3000)