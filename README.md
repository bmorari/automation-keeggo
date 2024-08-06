# Cypress Test Keeggo

Este projeto contém testes automatizados escritos em Cypress usando Cucumber para validação de APIs e interfaces web.

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou yarn (opcional)

## Instalação

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar os testes em sua máquina local.

### 1. Clonar o Repositório

Clone o repositório para sua máquina local usando o comando abaixo:

```bash
git clone https://github.com/bmorari/automation-keeggo.git
```

### 2. Navegar até o Diretório do Projeto

Entre no diretório do projeto clonado:

```bash
cd cypress-test-project
```

### 3. Instalar Dependências

Instale as dependências do projeto usando npm

```bash
npm install
```

### 4. Executar os testes
Existem duas maneiras de executar os testes Cypress: no modo interativo e no modo headless

#### Modo interativo
Abra o Cypress no modo interativo para executar e depurar testes:

```bash
npx cypress open
```

#### Modo headless
Execute todos os testes no modo headless (sem interface gráfica):

```bash
npx cypress run
```
