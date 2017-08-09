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

            conexao.query("SELECT * FROM motoristas", (err, re) => {
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
            this.modelo = 'cadMotorista';
            this.openMotor = true;
        },
        createMotorista: function () {          
            conexao.query('INSERT INTO motoristas SET ?', this.motoristas, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
            this.motoristas;
            this.openMotor = false;
        },
        newVisitante:function(){
            this.modelo = 'newVisitante'
            this.openMotor = true;
        },
        addMotorista:function(){
            this.modelo = 'addMotorista';
            this.openMotor = true;           
        },
        addVisitante:function(){
           this.modelo = 'addVisitante';
           this.openMotor = true;
        },
        editarMotor: function (motoristas) {
            this.modelo = 'cadMotorista';
            this.openMotor = true;
            this.motoristas = motoristas;

            conexao.query("UPDATE motoristas SET ? WHERE id = ?", [this.motoristas, motoristas.id], (e, r) => {
                if (e) {
                    throw e;
                }
            });
        },
         
        delMotor: function (motoristas) {
             
            conexao.query('DELETE FROM motoristas WHERE id = ?', [motoristas.id], function (err, res) {
                if (err) {
                    console.log("ERRO ...");
                }
                this.motoristas = motoristas;              

            });
        }
    }
});