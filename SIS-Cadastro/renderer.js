// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.Vue = require('vue');
let mysql = require('mysql');

let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "q1w2e3r4",
    database: "sisseguranca"
});

new Vue({
    el: 'body',
    data: {
        lista: [],
        motoristas: {
            cavalo: '',
            carreta: '',
            tipo: '',
            nome: '',
            entrada: '',
            modo: '',
            saida: '',
            modos: '',
            lacre: ''
        },
        openMotor: false
    },
    ready: function () {
        //conecta-se ao banco de dados
        conexao.connect((err, result) => {
            if (err) {
                throw err
                console.log("Erro ao conectar");
            }
            console.log("CONECTADO COM SUCESSO AO MYSQL");

            conexao.query("SELECT * FROM dados", (err, re) => {
                if (err) {
                    throw err;
                }
                re.forEach((e) => {
                    JSON.stringify(e);
                    console.log(JSON.stringify(e));
                });
                this.lista = re;
            });
        });
    },
    methods: {
        openModal: function () {
            this.openMotor = true;
        },
        createMotorista: function () {
            conexao.query('INSERT INTO dados SET ?', this.motoristas, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
            this.motoristas;
            this.openMotor = false;
        },
        editarMotor: function (motoristas) {
            this.openMotor = true;

            let input = JSON.parse(JSON.stringify(motoristas));
            console.log(input);
            let id = input.id;
            console.log(id);






        },
        delMotor: function (motoristas) {
            conexao.query('DELETE FROM dados WHERE id = ?', [motoristas.id], function (err, res) {
                if (err) {
                    console.log("ERRO ...");
                }
                this.motoristas = motoristas;

            });


        }

    }
});


/*
var query = conectar.query('insert into cadastro set ?', info, function(err, result){
      if(err){
        console.log(err);
      }else{
        console.log("secesso");
      }
      console.log(query.sql);
 });
conectar.end();
}
  let clientes = inserir;
  new Vue({
    el: 'body', //recebe o conteúdo do body
      data: {
         clientes:[],
         mode:'',
         client:{
           nome:'',
           cpf:'',
           telefone:''
         }
})
*/
