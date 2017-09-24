# Electron
Projetos de aplicações multiplataforma com html, js e css, usando o ELECTRON
Para estilização dos projetos será utilizado Materialize, Bootstrap e JQuery.

 - [Configurações iniciais](#configurações-iniciais)
 - [Formulário](#formulário)
 - [SIS-Sistema Integrado de Segurança](#sis-sistema-integrado-de-segurança)


### Configurações iniciais

Configuração minima permitida para rodar uma aplicação electron.

Ter o node.js instalado globalmente em sua máquina juntamente com o electron.

package.json
```
{
  "name": "projeto-electron",
  "version": "1.0.0",
  "description": "Minha aplicação clone",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "author": " nome-do-developer",
  "license": "CC0-1.0",
  "devDependencies": {
    "electron": "~1.6.2"
  }
}
```
index.html
```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>PRINCIPAL</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/photon.css">

    <!-- Electron Javascript -->
   <!-- <script src="app.js" charset="utf-8"></script> -->
  </head>
  <body>
   
  </body>
  <script>
    require('./renderer.js')
  </script>
</html>
```

renderer.js
```
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

```
Para melhor configuração do sistema acessar o https://electron.atom.io/

### Formulário

Está aplicação represeta um pequeno sistema para lojas, disponibilizando armazenamento e controle do fluxo de informação.
Aplicação ainda em processo de construção.


<img src="https://github.com/rafaelcarvalhocaetano/Electron/blob/master/formulario/img/formulario.png">

### SIS-Sistema Integrado de Segurança

- Tema:
 <p>SIS - Sistema Integrado de Segurança</p>

- Resumo:

 <p>Esta aplicação de Controle de Acesso, envolve a integração de elementos como html, css, js, vue e mysql, buscando forcener ao   usuário final um melhor funcionamento e desempenho.</p>

 <p>A aplicação busca fornecer uma usabilidade ao usuário, simples e dinâmica, sem a necessidade de muitos processos como de busca, cadastramentos e verificação. A aplicão tem como foco principal, o controle de acesso, para portarias de empresa do ramo logistico, em específico transportadoras.</p>

- Introdução:
- Objetivos Gerais e objetivos Específicos:
- Base bibliográfica:
- Justificativa:
- Hipóteses:
- Metodologia de pesquisa:



Para ter esta aplicação em sua máquina, exigirá alguns requisitos para roda-la:

- 1° Ter o MySql instalado em sua máquina.
- 2° Criar um banco de dados com os seguintes atributos.
 
 ```
   host: "localhost",
   user: "root",
   password: "q1w2e3r4",
   database: "db"
 
 ```


<img src="https://github.com/rafaelcarvalhocaetano/Electron/blob/master/SIS-Cadastro/img/sis.png">
