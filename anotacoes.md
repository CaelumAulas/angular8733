## Design Systems
- Forms se baseia aqui: https://material.angular.io/
- Geralzao aqui: https://pinterest.github.io/gestalt/#/Video
- Le a doc do bootstrap entendendo a classificação das coisas de tela

## Como o whatsapp funciona?
- https://www.youtube.com/watch?v=vvhC64hQZMk


## Melhorando codigos
- https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599/ref=asc_df_0134757599/?tag=googleshopp00-20&linkCode=df0&hvadid=379735814613&hvpos=&hvnetw=g&hvrand=18424682779189824874&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-464425925893&psc=1


## Como o redux funciona/event emitter
- https://www.youtube.com/watch?v=DbEpBeZ6yic

## Testes
- https://www.cypress.io/

## RxJS
- https://www.learnrxjs.io/learn-rxjs/operators/transformation/map


## Compilações do Front
- JS --> Babel
- 


## Dicas de organização
- https://hipsters.tech/cultura-frontend-no-itau-hipsters-on-the-road-13/

## Dicas VsCode
- https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes

## Dicas de Git e Github
- https://hipsters.tech/guia-do-iniciante-em-github-hipsters-184/
- https://docs.google.com/presentation/d/1NaWOqurFn9aSN4n8iNC6rX29MEbB-4VpvOF_gQiJEIo/edit?usp=sharing


## Curso: 

### Fluxo de renderização inicial da app

```sh
- index.html
- app.module.ts (registramos os componentes)
- app.component.ts (declaramos um componente)
- app.component.html 
  <cmail-header titleHeader="Valor">
  cmailHeader(titleHeader)
  new CmailHeader(titleHeader)
    - header.component.ts
    - header.component.html
```


### Mapeando funcionalidades p/ o usuário
```sh
## Usuario
- Clica no botao
- Espera
- Vê abrindo

## Dev
- Ter o botao OK 
- registrar que estamos monitorando os clicks OK
    - criar uma ação de click e:
      - Vai mudar um valor booleano existente em header.component.ts
      - O menu precisa abrir
```


## LIVROS
- Clean Code: https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=asc_df_8576082675/?tag=googleshopp00-20&linkCode=df0&hvadid=379792215563&hvpos=1o1&hvnetw=g&hvrand=2957289896902905473&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-398225630878&psc=1
  - Ou tenta ver os vídeos pelo menos: https://www.youtube.com/watch?v=9w3o9NHXqu0


## Random
- https://medium.com/@omariosouto/001-como-lidar-de-uma-forma-mais-feliz-com-classes-css-condicionais-no-react-dicas-de-react-915c13a2ab0e


## Dicas pra vida
- https://github.com/frontendbr/vagas/
- https://twitter.com/loiane
- https://www.meetup.com/pt-BR/AngularJS-Sao-Paulo/?chapter_analytics_code=UA-1805748-5
- https://semver.org/
- Como o angular funciona: https://medium.com/reverse-engineering-angular/angular-deep-dive-zone-js-how-does-it-monkey-patches-various-apis-9cc1c7fcc321
- Como mexer com arrays (dia 4): https://javascript30.com/
- #campoPara="ngModel"
  - Essa é a sintaxe que converte o tipo de um elemento para um tipo de forms do angular
- ngSumbit vs Submit = Por padrão o ngSubmit faz o preventDefault()
- Clean Archtechure = https://www.youtube.com/watch?v=Nsjsiz2A9mg
- SOLID para ninjas do Aniche = https://www.casadocodigo.com.br/products/livro-oo-solid
- Para quem quiser fazer um router: https://developer.mozilla.org/en-US/docs/Web/API/History_API;
- DDD: https://www.amazon.com.br/Implementando-Domain-Driven-design-Vernon/dp/8576089521/ref=asc_df_8576089521/?tag=googleshopp00-20&linkCode=df0&hvadid=379748659420&hvpos=1o1&hvnetw=g&hvrand=5727399598867156421&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-460804278877&psc=1
- Sigam a talita pagani: https://www.youtube.com/watch?v=4URTZHk6tz0
- Patterns de input (CPF, CNPJ e coisas assim):
  - https://www.youtube.com/watch?v=r-8isv_TnVA
  - https://github.com/text-mask/text-mask/tree/master/angular2#readme
- Arrummando trampo fora
  - https://vanhack.com/
  - https://www.hackerrank.com/
  - https://www.amazon.com/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932
  - Como pensar pra resolver os desafios? https://www.youtube.com/watch?v=5EBCcP2JMoQ
- Flexbox Froggy: https://flexboxfroggy.com/
- Post de Regex: https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex
- Como funciona o arrow function?
```md
// function()
O this da function, sempre aponta pro objeto no contexto de execução

// arrow () =>
O this da () =>, sempre aponta pro objeto no contexto de criação
```
- Guia de update do angular: https://update.angular.io/#4.0:9.0l2

- Erros do http
  - 20x BOM
  - 30x Coisas de rede
  - 40x Algo deu ruim (e vc sabe)
  - 50x Algo deu ruim no servidor
  - https://httpstatusdogs.com/
- Para entender um exemplo como aplicar angular no trampo: https://hipsters.tech/cultura-frontend-no-itau-hipsters-on-the-road-13/
- Documentação de componentes
  - https://storybook.js.org/docs/guides/guide-angular/
- Como criar senhas seguras:
  - https://www.alura.com.br/artigos/como-criar-uma-boa-senha
- Lidando com tratamento de erros:
  - https://www.youtube.com/watch?v=ZgWyha2d6iY&t=16s

## Quando o angular atualiza a tela
- Quando algum evento assincrono for disparado
  - Quando quiser pegar algum evento do usuário: https://developer.mozilla.org/en-US/docs/Web/Events
- Quando algum dado do modelo (.ts) for alterado (Two Way data binding)


## Fluxo do cadastro


### Campos
- Nome
- Usuario
- Senha
- Avatar

### Como salvar os dados?
- API, serviço

### Depois vamos pro login
