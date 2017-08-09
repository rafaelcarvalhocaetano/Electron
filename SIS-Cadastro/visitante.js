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
        visitantes:[],
        modelo: '',
        visitant:{
            id:'',
            nome:'',
            rg:'',
            empresa:'',
            entrada:'',
            saida:''         
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

            conexao.query("SELECT * FROM visitantes", (err, re) => {
                if (err) {
                    throw err;
                }
                re.forEach((e) => {
                    JSON.stringify(e);
                    console.log(JSON.stringify(e));
                });
                this.visitantes = re;
            });
        });
    },
    methods: {
        createVisitante: function () {          
            conexao.query('INSERT INTO visitantes SET ?', this.visitant, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
            this.visitant;
            this.openMotor = false;
        },
        newAjudante:function(){
            this.modelo = 'newAjudante';
            this.openMotor = true;           
        },
        editarAjudante: function (visitant) {
            this.modelo = 'newAjudante';
            this.openMotor = true;
            this.visitant = visitant;
           

            conexao.query("UPDATE visitantes SET ? WHERE id = ?", [this.visitant, visitant.id], (e, r) => {
                if (e) {
                    throw e;
                }
            });
        },
        delMotor: function (visitant) {
            conexao.query('DELETE FROM visitantes WHERE id = ?', [visitant.id], function (err, res) {
                if (err) {
                    console.log("ERRO ...");
                }
                this.visitant = visitant;              

            });
        }
    }
});