
# Future Plans API

Este repositório contém a API para o sistema **Future Plans**, uma aplicação de gerenciamento de planos de viagem, fotos e destinos. O projeto é desenvolvido em Node.js e Express, com persistência de dados usando Sequelize.

## Índice

-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Instalação](#instala%C3%A7%C3%A3o)
-   [Configuração do Banco de Dados](#configura%C3%A7%C3%A3o-do-banco-de-dados)
-   [Executando o Servidor](#executando-o-servidor)
-   [Rotas da API](#rotas-da-api)
    -   [Planos](#planos)
    -   [Fotos](#fotos)
    -   [Destinos](#destinos)

## Tecnologias Utilizadas

-   Node.js
-   Express
-   Sequelize (ORM)
-   Banco de Dados Relacional (configurável)
-   Body-parser

## Instalação

1.  Clone este repositório:

    `git clone https://github.com/Matheus-Freitas0/future-plans-react.git` 
    
2.  Instale as dependências:

    `npm install` 
    

## Configuração do Banco de Dados

1.  Configure o banco de dados no arquivo `config.js` (caminho relativo `./config`), usando Sequelize para definir o tipo de banco (MySQL, SQLite, etc.) e as credenciais.
    
2.  Sincronização: O sistema usa `sequelize.sync({ force: false })` para sincronizar o banco de dados na inicialização, sem reiniciar as tabelas existentes.

## Executando o Servidor

1.  Inicie o servidor com o comando:
    
    `npm start` 
    
2.  O servidor estará rodando em `http://localhost:3000`.
    

## Rotas da API

### Planos

-   **POST** `/api/plans` - Adiciona um novo plano.
    
    -   **Body**: `{ "title": "Título do Plano", "description": "Descrição", "date": "2024-12-31", "imageUrl": "URL da imagem" }`
    -   **Resposta**: Objeto JSON do plano criado.
-   **GET** `/api/plans` - Lista todos os planos.
    
    -   **Resposta**: Array de objetos JSON com todos os planos cadastrados.

### Fotos

-   **POST** `/api/photos` - Adiciona uma nova foto.
    
    -   **Body**: `{ "url": "URL da Foto", "description": "Descrição", "relatedTo": "plano", "relatedId": 1 }`
    -   **Resposta**: Objeto JSON da foto criada.
-   **GET** `/api/photos` - Lista todas as fotos.
    
    -   **Resposta**: Array de objetos JSON com todas as fotos cadastradas.

### Destinos

-   **POST** `/api/destinations` - Adiciona um novo destino.
    
    -   **Body**: `{ "name": "Nome do Destino", "description": "Descrição", "visited": true, "imageUrl": "URL da imagem" }`
    -   **Resposta**: Objeto JSON do destino criado.
-   **GET** `/api/destinations` - Lista todos os destinos.
    
    -   **Resposta**: Array de objetos JSON com todos os destinos cadastrados.

## Observações

-   Este projeto serve como uma API para um sistema de gerenciamento básico e pode ser integrado com um front-end ou usado em uma aplicação mobile.
-   Em caso de erro na criação ou listagem de dados, a resposta incluirá uma mensagem e detalhes do erro.

----------
