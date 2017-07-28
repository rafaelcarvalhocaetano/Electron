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
        tela: '',
        visit: {
            nome: '',
            empresa: '',
            rg: '',
            data: ''
        },
        openVisitante: false,
        openMotor: false,
        openTerceiro: false,
        openAjudante: false
    },
    ready: function () {
        //conecta-se ao banco de dados
        conexao.connect((err, result) => {
            if (err) {
                throw err
                console.log("Erro ao conectar");
            }
            console.log("CONECTADO COM SUCESSO AO MYSQL");

            conexao.query("SELECT codigo, nome, empresa, rg, data FROM cadastro", (err, bb) => {
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
        createVisitante: function () {
            this.openMotor = true;
            conexao.query('INSERT INTO cadastro SET ?', this.visit, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
        }



    }
});


/*

//inserindo dados com sucesso
function enviar(){

 var info = {
   nome:$("#nome").val(),
   empresa:$("#empresa").val(),
   rg:$("#rg").val(),
   data:$("#data").val()
 };

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