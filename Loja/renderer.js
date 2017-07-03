// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var loki = require('lokijs')
var db = new loki('loki.json')
var children = db.addCollection('children')
clientes.insert({
    nome: 'Rafael Carvalho',
    email: 'rapha.pse@outlook.com'
});
db.save()
