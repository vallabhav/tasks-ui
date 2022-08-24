# Tasks client application

 This is tasks ui projects build with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [Node (above 16)](https://nodejs.org/en/) + 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup(Development): 

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Setup(Development): Run within docker

### Build docker

```sh
docker build -t tasks-ui .
```

### Verify the docker image

```sh
docker images | grep "tasks-ui"
```

### Run docker image(Test the site at: http://localhost:8085)

```sh
docker run -d -p 8085:80 tasks-ui:latest 
```