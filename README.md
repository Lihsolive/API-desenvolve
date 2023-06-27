<!-- # Projeto Desenvolve 2022 Squad 1

## Integrantes
- [Pedro Gomes](https://github.com/pgomesdev)
- [Liliam Oliveira](https://github.com/Lihsolive)
- [Stephane Malo](https://github.com/gstephanie)
- [Lucas Matheus](https://github.com/LucasMatheus12 ) -->

API de listagem de usuários - mentoria

# CRUD - mentoria - Programa Desenvolve
___

## Tecnologias usadas:

<div style="display: inline-block">
  <img align="center" alt="Git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"> 
  <img align="center" alt="Javascript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" >
  <img  align="center" alt="Sequelize" height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
  <img  align="center" alt="Express" height="80" width="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
  <img  align="center" alt="MySQL" height="60" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /> 
</div>


## Para executar o projeto:

1.	Instale as dependências executando o seguinte código na raiz do projeto:
    
```
npm install
```

2.	Crie um arquivo .env na raiz do projeto com as variáveis seguindo o modelo do arquivo .env.example:
```
NODE_ENV=development
NODE_USER= 
NODE_PASSWORD=
NODE_DATABASE= 
DATABASE_URL= ""
```

A DATABASE_URL deve ser configurada seguindo o seguinte modelo: 

```
DATABASE_URL=mysql://seu_usuario:sua_senha@localhost:3306/seu_banco_de_dados
```
3. Após as configurações, execute o código:
```
npm run dev
```

4. Verifique se o Sequelize está instalado na máquina através do comando: 
```
npm list sequelize
```
Estando instalado, aparecerá algo como: 
```
└── sequelize@6.19.1
```

Caso não esteja instalado, execute o código: 
```
npm install sequelize
```
Ou, para instalar globalmente:

```
npm install -g sequelize-cli 
```

5. As tabelas do banco de dados foram criadas utilizando migrações do ```Sequelize```, portanto, para aplicar todas as migrações pendentes e criar as tabelas necessárias no banco de dados, é necessário executar:
```
sequelize db:migrate
```

6. Por fim, para migrar todos os ```seeders``` (dados das tabelas), execute o comando:
```
sequelize db:seed:all
```
