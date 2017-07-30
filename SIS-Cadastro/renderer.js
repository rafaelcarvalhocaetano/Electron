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

            conexao.query("SELECT * FROM dados", (err, bb) => {
                if (err) {
                    throw err;
                }
                bb.forEach((e) => {
                    JSON.stringify(e);
                    console.log(JSON.stringify(e));
                });
                this.lista = bb;
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
            this.motoristas = {
                cavalo: '',
                carreta: '',
                tipo: '',
                nome: '',
                entrada: '',
                modo: '',
                saida: '',
                modos: '',
                lacre: ''
            };
            this.openMotor = false;
        },
        editarMotor: function (motoristas) {
            this.openMotor = true;
            this.motoristas = motoristas;
           
            conexao.query('UPDATE dados SET nome = "'+this.motoristas.nome+'" WHERE id = ?',[motoristas.id], (err, r) => {
                if (err) {
                    throw err;
                }
                console.log("OK ...");
            });    
            },
                delMotor: function (motoristas) {
                    let query = "DELETE FROM dados WHERE id = ?";
                    conexao.query(query, [motoristas.id], function (err, res) {
                        if (err) {
                            console.log("ERRO ...");
                        }

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