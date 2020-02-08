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

## Quando o angular atualiza a tela
- Quando algum evento assincrono for disparado
  - Quando quiser pegar algum evento do usuário: https://developer.mozilla.org/en-US/docs/Web/Events
- Quando algum dado do modelo (.ts) for alterado (Two Way data binding)
