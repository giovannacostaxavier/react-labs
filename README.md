# React Labs 🧪

Repositório de estudos e prática de React — espaço organizado para exercícios de todos os tópicos do roadmap.

## Sobre

Este repositório reúne exercícios práticos de React, com uma estrutura pensada para facilitar a localização e revisão de conteúdo. Cada exercício vive isolado em sua própria pasta, junto com todos os componentes relacionados a ele.

## Estrutura

```
src/
  exercicios/
    nome-do-exercicio/
      Componente1.jsx
      Componente2.jsx
      ...
```

Para visualizar um exercício, basta trocar o import correspondente em `App.jsx`.

## Tópicos do roadmap

- `useState`
- `useEffect`
- `useRef`
- `useContext` / Context API
- `useReducer`
- Lists e Keys
- Render Props
- Higher Order Components (HOC)
- Novos tópicos adicionados conforme o roadmap avança (React Router, formulários, integração com backend, entre outros)

## Convenções de código

- Arrow functions com destructuring de props no parâmetro
- `export default` ao final do arquivo
- Retorno implícito quando o corpo da função é uma única expressão JSX
- `async/await` para código assíncrono
- Estado que depende do valor anterior sempre usa a forma funcional do setter (`setEstado(prev => ...)`)
- Commits seguindo [Conventional Commits](https://www.conventionalcommits.org/)

## Tecnologias

- React
- Vite

---

Projeto pessoal de estudos, sem fins comerciais.
