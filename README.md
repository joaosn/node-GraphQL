#Fundamentos do GraphQL na prática (Node.js + React) | Decode #019

-Quais poblemas Graphql resolve?
-overfetching busca de informaçoes de mais traz somente o que precisa

-Underfetching
-trazer dados de menos (sua rota retorna apenas nome de usuario poren voce tanben queria o endereço)
criar outra rota ou mudar back para esse serviço

no GraphQL o front fala o que ele precisa numa quey na cosnulta

Dificuldades:

- Cache
- Erros

```Gql
query {
    users {
        id
        nome
        github

        addresses {
            bairo
            cidade
        }
    }
}
```
