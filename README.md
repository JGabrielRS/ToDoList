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

Para rodar o túnel do ngrok é necessário o seguinte comando:

```bash
ngrok http 8080
```

### Páginas do Projeto

#### Login
<img width="1920" height="1047" alt="Captura de tela_2026-07-24_21-39-54" src="https://github.com/user-attachments/assets/51f038c4-dc8e-4bdb-b3f0-4d3cd118f8c4" />

#### Criar Perfil
<img width="1920" height="1047" alt="Captura de tela_2026-07-24_21-48-41" src="https://github.com/user-attachments/assets/199713e1-2f3b-4d79-85ba-b1eac2f8d754" />

#### Página Inicial
<img width="1920" height="1047" alt="Captura de tela_2026-07-24_21-44-13" src="https://github.com/user-attachments/assets/78f2c50b-71cd-41ad-8e8b-2158789c3ea3" />

#### Adicionando e Modificando Task
<img width="1920" height="1047" alt="Captura de tela_2026-07-24_21-44-56" src="https://github.com/user-attachments/assets/4b081778-3c13-46a7-8c8b-6db13298abdc" />
<img width="1920" height="1047" alt="Captura de tela_2026-07-24_21-45-14" src="https://github.com/user-attachments/assets/9344eb81-7b42-498f-b538-1c59ce4e79d6" />

#### Página de Detalhes da Task
<img width="1920" height="1047" alt="Captura de tela_2026-07-24_21-45-24" src="https://github.com/user-attachments/assets/cd90f6a9-d307-4140-976b-0ebe987af1a3" />
