Nesse desafio voc� colocar� em pr�tica o que aprendemos em rela��o a utiliza��o do nginx como proxy reverso. A id�ia principal � que quando um usu�rio acesse o nginx, o mesmo far� uma chamada em nossa aplica��o node.js. Essa aplica��o por sua vez adicionar� um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplica��o node.js para o nginx dever� ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo dever� estar funcionando e dispon�vel na porta: 8080.

Suba tudo em um reposit�rio e fa�a a entrega.