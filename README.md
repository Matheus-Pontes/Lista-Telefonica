# Aplicação de Lista Telefônica 
- Projeto feito com auxilio das Aulas sobre AngularJs de Rodrigo Branas no youtube:
    - [Playlist do youtube](https://www.youtube.com/watch?v=6kIorm_gCO4&list=PLQCmSnNFVYnTD5p2fR4EXmtlR6jQJMbPb&index=16)

    - A maior diferença está em usar o metodo `.then()... e .catch()...`
    um responsável pela chamada no backend e o outro se houve algum erro.

## Funcionamento
- Os contatos estão sendo enviados pelo servidor NodeJS com express
    - Requisição feita em ajax pelo AngularJs;
    - Para iniciar o server use o comando no prompt de comando:
        - ` node server.mjs`
- Na tela inicial tem os contatos enviados pelo servidor;
- Na segunda tela temos como adicionar os contatos no servidor, enviados pelo metódo ` ...post()...` e posteriormente renderizando em tela;
- É possível apagar os contatos contudo, está apenas em tela e não do servidor. Obs: 'está faltando isso...kkkk'.
- Caso o servidor não esteja ligado está com um tratamento para aparecer um modal informando.

## Tecnologias 
- AngularJs
- CSS
- NodeJS

