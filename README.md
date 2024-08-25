
# Projeto Chuck Norris

Este projeto web interativo foi desenvolvido como parte das atividades de monitoria da disciplina de Práticas de Programação na faculdade GRAN. Seu objetivo é demonstrar a aplicação prática das tecnologias HTML, CSS e JavaScript, além de proporcionar uma experiência divertida e educativa para os usuários. Ao clicar no botão, uma nova e hilária façanha do Chuck Norris é exibida na tela. Além disso, o usuário pode filtrar os fatos por categoria, utilizando a lista suspensa.


## Funcionalidades

- Gerador de fatos: A cada clique, um novo fato aleatório sobre o Chuck Norris é apresentado.
- Filtragem por categoria: O usuário pode selecionar uma categoria específica para ver fatos relacionados.


## Tecnologias utilizadas

- **Html 5**
- **CSS 3**
- **JavaScript**


## Autor

[João Paulo Pereira](https://www.github.com/jpcp0614)


## Demonstração

[Fatos do Chuck Norris](https://jpcp0614.github.io/Projeto_Chuck_Norris/)


## Documentação da API

#### Retorna o fato de forma randômica

```http
  GET https://api.chucknorris.io/jokes/random
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `random` | `string` | Recupera um fato aleatório do Chuck no formato JSON. |

#### Retorna o fato por categoria

```http
  GET https://api.chucknorris.io/jokes/random?category={category}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `category`      | `string` | Recupera um fato aleatório de Chuck Norris de uma determinada categoria. |


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


