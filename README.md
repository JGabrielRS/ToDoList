# ToDoList

Aplicação web de gerenciamento de tarefas desenvolvida com React e Java, com foco em componentização, manipulação de estado, autenticação de usuários e integração com banco de dados.

## Funcionalidades

* Login e cadastro de usuários
* Adição de tarefas
* Marcação de tarefas como concluídas
* Remoção de tarefas
* Interface simples e responsiva
* Atualização dinâmica da lista utilizando React
* Integração com API REST em Java

## Tecnologias utilizadas

### Frontend

* Vite
* React
* Tailwind CSS
* JavaScript

### Backend

* Java
* Gson

### Banco de Dados

* PostgreSQL

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais do desenvolvimento web full stack, utilizando React, incluindo:

* Componentização no React
* Manipulação de estado
* Renderização dinâmica
* Consumo e criação de APIs REST
* Integração entre frontend e backend
* Persistência de dados com PostgreSQL
* Programação orientada a objetos em Java

## Como executar o projeto

###  Clonar o repositório

```bash
git clone https://github.com/JGabrielRS/ToDoList.git
```

### Instalar as dependências do frontend
```bash
npm install
```

### Rodar o frontend
```bash
npm run dev
```

### Rodar o servidor Java (Back\src\api\Server.java):
```bash
javac Server.java
java Server
```
## Observação

O projeto atualmente utiliza uma URL gerada pelo ngrok para comunicação com a API.

Caso deseje executar o backend localmente, será necessário alterar a URL presente no arquivo:

```bash
Front/src/services/api.js
```
