import React from 'react';

function App() {
  return (
    <div className="App">
 <div className="App-header">
 <div class="d-flex justify-content-center">
            <div class="container">
                <blockquote class="blockquote text-center">
                    <h1>Bem Vindo :)</h1>
                </blockquote>
                <div class="container ">
                    <form class="text-center" action="logar.php" method="POST" autocomplete="on">
                        <label for="user">Usuário</label>
                        <br></br>
                        <input class="rounded" type="text" name="user" required size="20" maxlength="60" autocomplete="given-name" placeholder="Coloque o Apelido" autofocus></input>
                        <br></br>
                        <br></br>
                        <label for="senha">Senha</label>
                        <br></br>
                        <input class="rounded" type="password" name="senha" required size="20" maxlength="60" placeholder="Agora sua senha"></input>
                        <br></br>
                        <br></br>
                        <button class="btn btn-danger rounded" type="button" class="btn btn-danger">Entrar</button>
                        <br></br>
                    </form>
                </div> 
                <blockquote class="blockquote text-center">
                    <h3>Não é cadastradro? <a href="index(cadastro).html">Registra-se</a></h3>
                </blockquote>
            </div> 
        </div>    
 </div>
 </div>
  );
}

export default App;
