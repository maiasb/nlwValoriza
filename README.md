## NLW Valoriza

### Funcionalidades
- API para aplicação que tem como finalidade, a realização de elogios dos usuários da plataforma, uns com os outros.
- É possível realizar a criação de tags e elogios para cada usuário cadastrado, assim como receber elogios.

### Execução
- Ao baixar o repositório, utilizar no terminal o comando `yarn` no seu terminal para instalar todas as dependências necessárias.
- Para rodar o servidor, executar o comando `yarn dev` em seu terminal.
- As rotas necessárias para o envio de dados para a API estão em [Insomnia-nlwValoriza](https://github.com/maiasb/Insomnia-nlwValoriza)

### Regras

- Cadastro de usuário:

    [ x ] Não é permitido cadastrar mais de um usuário com o mesmo email

    [ x ] Não é permitido cadastrar usuário sem email

- Cadastro de TAG:

    [ x ]Não é permitido cadastrar tag sem nome

    [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

    [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios:

    [ x ] Não é permitido usuário cadastrar um elogio para si

    [ x ] Não é permitido cadastrar elogios para usuários inválidos (O usuário precisa estar autenticado na aplicação)

- Resolução de problemas:

    [ x ] Corrigir ensureAdmin
    
    [ x ] Correção compliments
