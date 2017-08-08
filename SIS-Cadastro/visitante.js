window.Vue = require('vue');
let mysql = require('mysql');

let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "q1w2e3r4",
    database: "db"
});

new Vue({
    el: 'body',
    data: {
        lista: [],
        modelo: '',
        motoristas: {
            cavalo: '',
            carreta: '',
            ter: '',
            nome: '',
            entrada: '',
            como: '',
            saida: '',
            comos: '',
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
            //id, cavalo, carreta, ter, nome, entrada, como, saida, comos,lacre 

            conexao.query("SELECT * FROM motor", (err, re) => {
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
            this.modelo = 'a';
        },
        createMotorista: function () {           
            conexao.query('INSERT INTO motor SET ?', this.motoristas, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
            this.motoristas;
            this.openMotor = false;
        },
        createV:function(motoristas){
            this.modelo = 'c';
            this.openMotor = true;           
        },
        createAjudante:function(){
            this.modelo = 'd';
            this.openMotor = true;

        },
        editarMotor: function (motoristas) {
            this.modelo = 'b';
            this.openMotor = true;
            this.motoristas = motoristas;

            conexao.query("UPDATE motor SET ? WHERE id = ?", [this.motoristas, motoristas.id], (e, r) => {
                if (e) {
                    throw e;
                }
            });
        },
         
        delMotor: function (motoristas) {
             
            conexao.query('DELETE FROM motor WHERE id = ?', [motoristas.id], function (err, res) {
                if (err) {
                    console.log("ERRO ...");
                }
                this.motoristas = motoristas;              

            });
        }
    }
});