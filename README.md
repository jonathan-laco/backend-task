# Backend Task API

Este repositório contém uma API RESTful para gerenciamento de tarefas, desenvolvida como parte do teste técnico para vaga de desenvolvedor fullstack.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT para autenticação
- Bcrypt para criptografia de senhas

## 📋 Funcionalidades

- Autenticação de usuários (registro e login)
- CRUD completo de tarefas
- Proteção de rotas com JWT
- Associação de tarefas a usuários específicos

## 🛠️ Como executar o projeto

### Pré-requisitos

- Node.js (v18+ recomendado)
- PostgreSQL
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/backend-task.git
   cd backend-task
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` na raiz do projeto.
4. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor estará rodando em [http://localhost:3333](http://localhost:3333).

## 📌 Rotas da API

### Autenticação

#### Registro de usuário

- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123"
  }
  ```
- **Resposta:**
  ```json
  {
    "message": "Usuário registrado com sucesso",
    "token": "<token>",
    "user": {
      "id": "cmbax191m0000r76knd4et3m4",
      "name": "João Silva",
      "email": "joao@email.com"
    }
  }
  ```

#### Login

- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "joao@email.com",
    "password": "senha123"
  }
  ```
- **Resposta:**
  ```json
  {
    "token": "<token>",
    "user": {
      "id": "cmbax191m0000r76knd4et3m4",
      "name": "João Silva",
      "email": "joao@email.com"
    }
  }
  ```

### Tarefas (requer autenticação)

#### Listar todas as tarefas do usuário

#### Listar todas as tarefas do usuário

- **GET** `/tasks`
- **Headers:** `Authorization: Bearer <token>`
- **Resposta:**
  ```json
  [
    {
      "id": "cmbavnumg0002r7f48jx81zww",
      "title": "Implementar API Rest - Atualizado",
      "description": "Criar endpoints para gerenciamento de tarefas com testes",
      "dueDate": "2025-06-20T00:00:00.000Z",
      "status": "DONE",
      "userId": "cmbavnjm30000r7f4jhyf5tcy",
      "createdAt": "2025-05-30T14:07:38.440Z",
      "updatedAt": "2025-05-30T14:41:39.142Z"
    }
  ]
  ```

#### Criar uma nova tarefa

- **POST** `/tasks`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**

  ```json

  "title": "Título da tarefa",
  "description": "Descrição detalhada da tarefa (opcional)",
  "dueDate": "2023-12-31T23:59:59.999Z"
  ```

- **Resposta:**
  ```json
  {
    "id": "cmbaxb76a0002r76kkly78lkz",
    "title": "Título da tarefa",
    "description": "Descrição detalhada da tarefa (opcional)",
    "dueDate": "2025-05-30T23:59:59.999Z",
    "status": "PENDING",
    "userId": "cmbavnjm30000r7f4jhyf5tcy",
    "createdAt": "2025-05-30T14:53:47.407Z",
    "updatedAt": "2025-05-30T14:53:47.407Z"
  }
  ```

#### Atualizar uma tarefa

- **PUT** `/tasks/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**

  ```json
  {
    "title": "Título atualizado da tarefa",
    "description": "Nova descrição da tarefa",
    "dueDate": "2024-01-15T23:59:59.999Z",
    "status": "DONE"
  }
  ```

- **Resposta:**
  ```json
  {
    "message": "Tarefa atualizada com sucesso"
  }
  ```

#### Excluir uma tarefa

- **DELETE** `/tasks/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Resposta:**
  ```json
  {
    "message": "Tarefa deletada com sucesso"
  }
  ```

## 🧪 Estrutura do projeto

```
backend-task/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.ts
├── prisma/
│   └── schema.prisma
├── .env
├── package.json
└── README.md
```

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Desenvolvido por Jonathan Laco.
