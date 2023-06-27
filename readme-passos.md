# Para executar o projeto:

### 1.	Instale as dependências executando o seguinte código na raiz do projeto: 

```npm install```

### 2.	Crie um arquivo .env na raiz do projeto com as variáveis seguindo o modelo do arquivo .env.example:

```
NODE_ENV=development
NODE_USER= 
NODE_PASSWORD=
NODE_DATABASE= 
DATABASE_URL= "" 

```

### No caso da nossa máquina pessoal, com as configurações corretas o resultado foi:
```
NODE_ENV=development
NODE_USER=root 
NODE_PASSWORD=ADMIN_my$LI2
NODE_DATABASE=mysql
DATABASE_URL= "mysql://root:ADMIN_my$LI2@localhost:3306/mysql"
```

### A DATABASE_URL deve ser configurada seguindo o seguinte modelo: 

```DATABASE_URL=mysql://seu_usuario:sua_senha@localhost:3306/seu_banco_de_dados```

### 3. Após as configurações, execute o código: 

```npm run dev```

### 4. Verifique se o Sequelize está instalado na máquina através do comando: 

```npm list sequelize```

### Estando instalado, aparecerá algo como: 

```└── sequelize@6.19.1```

### Caso não esteja instalado, execute o código:

```npm install sequelize``` 

### Ou, para instalar globalmente:

```npm install -g sequelize-cli``` 

### 5. As tabelas do banco de dados foram criadas utilizando migrações do ```Sequelize```, portanto, para aplicar todas as migrações pendentes e criar as tabelas necessárias no banco de dados, é necessário executar:

```sequelize db:migrate```

### 6. Por fim, para migrar todos os seeders (dados das tabelas), execute o comando:

```sequelize db:seed:all```
