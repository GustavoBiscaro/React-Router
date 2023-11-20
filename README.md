# Projeto Inicial
Criar um projeto React com controle de rotas, seguindo as boas práticas deste framework.

# Estrutura do projeto
- Componentização
- Criar três páginas simples: Home, Tarefa e Sobre.
- Cada página pode ser um componente funcional simples.

# SPA: Single Page Applications, ou Aplicações de Página Única
<p>A principal diferença é a maneira na qual a página será carregada. Normalmente as páginas são renderizadas do lado do servidor, independente da tecnologia utilizada, então gera carregamento a cada nova requisição, o que numa aplicação real pode gerar perda de performance.</p>

<p>Aplicações baseadas em SPA funcionam de maneira diferente, pois não é necessário fazer requisição para carregar novas páginas. A aplicação seria carregada por inteiro na primeira requisição, onde todo código seria carregado de uma vez.</p>

# Passos utilizados na criação
## Axios
O **Axios** é uma escolha popular para lidar com a comunicação de dados entre o frontend e o backend em aplicações web. Ele fornece uma API simples e flexível para realizar chamadas de API assíncronas, como obter dados de uma API RESTful, enviar dados para um servidor ou atualizar dados em tempo real.

1) npm create vite@latest
Este comando gera o template básico de um projeto, podendo ser react.
2) npm i axios react-router-dom
npm **install** axios e react-router-dom
## React-router-dom
O **React Router Dom** é uma biblioteca para o React criada com o objetivo de resolver problemas de rotas para as páginas de um site e tornar o desenvolvimento muito mais simples e escalável.

# Para executar
2.1) cd rotas
<br>
2.2) npm run dev

# Extensão
ES7 + React/Redux/React-Native Snippets

**Comando utilizado:** rafce

## createBrowserRouter

Através de uma função chamada de createBrowserRouter() que recebe um array, onde cada item desse array possui um caminho, um elemento e se possui filhos, quais são eles.

## RouterProvider

Os objetos são passados para esse componente para renderizar seu aplicativo e habilitar o restante das APIs de dados.

## Outlet

Um outlet deve ser utilizado numa rota do pai para renderizar os filhos.

