# CRUD-Users-Ts

# 🧩 CRUD de Usuários - TypeScript + Prisma + Docker

Este projeto é uma API RESTful desenvolvida em **TypeScript** que realiza operações de **CRUD de usuários** utilizando **Prisma ORM** com **PostgreSQL**. A aplicação está totalmente containerizada com **Docker** e pode ser executada facilmente com um único comando.

---

### 🚀 Tecnologias Utilizadas

- Node.js + TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker & Docker Compose

---

### 📦 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/PedroAugcardozo/CRUD-Users-Ts.git
cd CRUD-Users-Ts
```
Execute a aplicação com Docker Compose:

bash
```
docker-compose up
```
Isso irá subir automaticamente os containers com a API e o banco PostgreSQL já prontos para uso.

A aplicação estará disponível por padrão em:
📍 http://localhost:3000

### 📁 Estrutura básica do Projeto
bash

```
├── prisma/                 # Migrações e schema do Prisma
├── src/
│   ├── controllers/        # Lógica dos endpoints
│   ├── dtos/               # Interfaces para validação dos dados
│   ├── routes/             # Definição das rotas
│   ├── services/           # Regras de negócio
│   └── server.ts           # Arquivo principal da aplicação
├── docker-compose.yml
├── Dockerfile
└── README.md
```
### 🧪 Endpoints Disponíveis
GET /users – Lista todos os usuários

GET /users/:id – Retorna um usuário específico

POST /users – Cria um novo usuário

PUT /users/:id – Atualiza um usuário existente

DELETE /users/:id – Remove um usuário

### 🛠️ Problemas Encontrados & Soluções
Durante o desenvolvimento, alguns obstáculos surgiram:

Configuração do Prisma: houve dificuldades iniciais na geração do cliente e nas migrações, principalmente por falhas no DTO.

DTO Incorreto: o DTO estava mal definido, o que causava erros ao utilizar o Prisma.

Docker Compose: configurar corretamente os serviços e volumes levou algum tempo, mas foi solucionado.

Todos os problemas foram resolvidos com ajustes simples e aprendizado contínuo durante o processo.

### 📚 Aprendizados
Esse projeto foi essencial para aprofundar meu conhecimento em:

Criação de APIs REST com boas práticas e separação de responsabilidades

Uso eficiente do Prisma ORM, entendendo desde o schema até as migrações e integrações com o banco

Estruturação de DTOs e como isso influencia diretamente na integridade dos dados

Criação de ambientes containerizados com Docker, algo essencial para escalabilidade e testes

Foi um excelente exercício prático que reforçou minha habilidade de lidar com problemas reais de configuração e arquitetura.

### 🌱 Potencial de Expansão
Este projeto pode servir como base sólida para aplicações maiores. A arquitetura já está pensada para ser escalável, e você pode:

Integrar autenticação com JWT

Adicionar validações com Zod ou class-validator

Conectar com um frontend em React, Next.js ou qualquer outro

Criar testes automatizados com Jest ou Supertest

Subir para ambientes de produção como Railway, Render, ou AWS

Feito com 💻 por Pedro Augusto de Lima Cardozo

--
