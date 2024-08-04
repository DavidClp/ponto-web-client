# PONTO DIGITAL

Front-End desenvolvido para desafio que consistia em desenvolver uma aplicação para realizar o controle de ponto dos colaboradores e permitir que eles tenham visibilidade das suas horas trabalhadas. Onde a solução é foca em três pontos principais:

- Visualização atualizada das horas trabalhadas no dia atual
- Possibilidade de iniciar ou finalizar um turno
- Acompanhamento do total de horas trabalhadas nos dias anteriores

## Funcionalidades

- Login: Autenticação via código do colaborador.
- Criação e Atualização de Turnos: Registra e atualiza turnos com data e hora.
- Consulta de Turnos: Recupera turnos por colaborador e período.

## Protótipo

Clique [aqui](https://www.figma.com/design/QrrQDeJAMRQ0xXpYagK6cG/Desafio-Ponto-Digital---David-Clipel?node-id=3-467&t=15juhoLKhTo9lHOn-0) para acessar o protótipo do front-end no Figma.

## Tecnologias usadas

- Front-End feito com React.js
- Typescript
- React-routes-dom
- React-icons
- Tanstack/react-query
- Eslint
- Prettier

## Instalação e Configuração

1. Clone o Repositório:

```bash
  git clone https://github.com/DavidClp/ponto-web-client
```

2. Instale as Dependências:

```bash
  npm install
```

3. Configure as Variáveis de Ambiente:
   Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```makefile
  REACT_APP_API_URL=your_api_url
```

4. Execute o Projeto:

```bash
  npm run start
```
