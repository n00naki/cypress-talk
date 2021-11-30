<h2 align="center">
2ª Talk Gazin Tech
</h2>

<h2 align="center">
    <img src="./logo-gazin/logo-gazin-tech.png" width="380px" />
</h2>

<br/>

<p align="center">
  <a href="#sobre-o-SendEmail">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar--">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## Sobre o Cypress

Cypress é uma ferramenta para testes automatizados, que pode ser utilizada para testes de front, back e até teste da interface da aplicação

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

[NodeJS][nodejs] 💻 </br>
[Typescript][typescript] 📘 </br>
[Cypress][cypress] 🐳 </br>

## Como usar ? 🤔

É necessário que você tenha algumas ferramentas instaladas antes de clonar este projeto.

- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com/) ou algum outro editor de sua prferência
- [Node.js](https://nodejs.org/) (recomendado a versão LTS do site oficial)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes. _Ao instalar o **NodeJS** o **NPM** é instalado automaticamente_.

### Vamos começar!! ✍

Este projeto está utilizando o cypress para testar o site de homologação do gazin atacado: https://stage.gazinatacado.com.br/
Abra o terminal como administrador e clone o repositório:

```bash
# Clone o repositório
$ git clone https://github.com/n00naki/cypress-talk.git
```

## Rodando o cypress

```bash
# Instale as dependências
$ yarn
# Rodando testes com a interface do cypress
$ yarn cypress open
# Rodando testes no terminal
$ yarn cypress run
```

Rodando os comandos acima os testes iniciam na pasta cypress/integration onde pode ser criado novos testes também.

## Como contribuir

- Faça um fork;
- Crie uma nova branch com a sua feature: `git checkout -b my-feature`;
- Commit as suas alterações: `git commit -m 'feat: My new feature'`;
- Empurre para o repositório remoto a sua nova branch: `git push origin my-feature`.

Abra um pull request para analisarmos as mudanças.

Você também pode nos ajudar abrindo issues.

[typescript]: https://www.typescriptlang.org/
[nodejs]: https://nodejs.org/en/
[cypress]: https://docs.cypress.io/guides/overview/why-cypress
