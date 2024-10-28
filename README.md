# Controle de Fluxo de Estoque - Projeto com Ferramentas Google

## Objetivo
Este projeto tem como objetivo criar um sistema de controle de estoque para uma loja, registrando e atualizando itens recebidos de fornecedores. 

Utilizando as ferramentas Google, o projeto serve para demonstrar habilidades na integração do **Google Sheets**, **Google Forms** e **Google Apps Script**.

## Ferramentas Utilizadas
- **Google Sheets**: Para armazenar e organizar os dados dos produtos em estoque.
- **Google Forms**: Para registro de entrada de produtos por meio de um formulário.
- **Google Apps Script**: Para automatizar o processamento e manipulação dos dados entre as abas da planilha.

## LINKS RELACIONADOS AO PROJETO
**1 - GOOGLE FORMS**
https://docs.google.com/forms/d/e/1FAIpQLSfM1-n9HTXIWyiO2FIjPH_49vxbzGwzK1Uk0a3nCZzkrTImnw/viewform

**2 - PLANILHA**
https://docs.google.com/spreadsheets/d/1vubGW8NVO_xntHqN4wgqP-RsL4i5cx-PO1yIynsbWU4/edit?usp=sharing

**3 - SITE**
https://script.google.com/macros/s/AKfycbzOuJZmm6_Ki5FxtqnvILdrcSSXcWatjTCgmx6VecuEh5c80KqE4aLF6Jo_9koH2ZFd/exec


## Funcionalidades

### 1. Registro de Entrada de Produtos
O funcionário responsável por receber os produtos do fornecedor preenche um formulário no Google Forms, especificando a quantidade de cada produto recebido.

### 2. Armazenamento de Dados
As informações preenchidas no formulário são automaticamente registradas em uma planilha no Google Sheets.

### 3. Classificação de Produtos
- **Produto já cadastrado**: Se o produto já existir no sistema, a quantidade recebida é somada ao estoque atual na aba chamada "estoque".
- **Produto novo**: Caso o produto ainda não esteja registrado, ele será listado na aba "a cadastrar", indicando a necessidade de uma classificação antes de ser incluído no estoque.

### 4. Interface para Cadastro de Produtos
Uma interface em HTML e CSS exibe os produtos que precisam ser classificados, permitindo que o usuário categorize e registre os novos produtos.

### 5. Atualização no Estoque
Após a classificação, o produto é incluído na aba "estoque" junto aos demais itens, consolidando a quantidade disponível para venda.


