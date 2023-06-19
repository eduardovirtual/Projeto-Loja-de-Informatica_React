// function Contatos() {
//     return(
//         <>
//         <main>
//         <h2>Precisa de Suporte? Entre em contato conosco!</h2>
//         <form action="" method="post">
//             <input type="text" name="nome" id="nome" placeholder="Insira o seu nome completo: ">
//             <input type="text" name="email" id="email" placeholder="Informe o seu e-mail de contato: ">
//             <textarea name="assunto" id="assunto" cols="30" rows="10">Nos informe o motivo do seu contato: </textarea>
//         </form>
//         <button onclick="enviar()">Enviar</button>
//         </main>
//         </>
//     )
// }
// export default Contatos; 

function Contatos() {
  const enviar = () => {
    // Lógica para enviar o formulário
  };

  return (
    <main>
      <h2>Precisa de Suporte? Entre em contato conosco!</h2>
      <form action="" method="post">
        <input type="text" name="nome" id="nome" placeholder="Insira o seu nome completo: " />
        <input type="text" name="email" id="email" placeholder="Informe o seu e-mail de contato: " />
        <textarea name="assunto" id="assunto" cols="30" rows="10" placeholder="Nos informe o motivo do seu contato: "></textarea>
      </form>
      <button onClick={enviar}>Enviar</button>
    </main>
  );
}

export default Contatos;

//em analise
