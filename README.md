# Api básico utilizando TypeScript + express

## Usuário

### Criação do usuário
```http request
POST http://localhost:8080/users/
```

### Obter lista de todos os usuários
```http request
GET http://localhost:8080/users/
```
ou listar 1 usuário específico
```http request
GET http://localhost:8080/users/:id
```

### Deletar usuário
```http request
DELETE http://localhost:8080/users/:id
```

## Produto

### Criação do produto
```http request
POST http://localhost:8080/products/
```

### Obter lista de todos os produtos
```http request
GET http://localhost:8080/products/
```
ou listar 1 produto específico
```http request
GET http://localhost:8080/products/:id
```

### Deletar produto
```http request
DELETE http://localhost:8080/products/:id
```