// function Produtos(){
//     return(
//         <>
//          <main className="principal-produtos">
//         <h2>PRODUTOS EM ALTA</h2>
//         <article className="sobre-produtos">
//             <img src="img/Notebook.jpg" alt="Imagem de um Notebook da Dell" class="notebook">
//             <p>Notebook Gamer Acer Nitro 5 <br> R$ 5.318,98</p>
//             <button>Ver Produto</button>
//         </article>

//         <article className="sobre-produtos">
//             <img src="img/Cadeira Gamer Mymax.jpg" alt="">
//             <p>Cadeira Gamer MyMax <br> R$ 759,99</p>
//             <button>Ver Produto</button>
//         </article>


//         <article className="sobre-produtos">
//             <img src="img/fone.png" alt="imagem de um fone de ouvido" class="fone-de-ouvido">
//             <p>Fone de Ouvido Sony (Bluetooth) <br>R$ 267,99</p>
//             <button>Ver Produto</button>
//         </article>

//         <article className="sobre-produtos">
//             <img src="img/PC gamer neologic gtx1660.jpg" alt="">
//             <p>PC Gamer NeoLogic GTX1660 <br>R$ 4.299,99</p>
//             <button>Ver Produto</button>
//         </article>

//         <article className="sobre-produtos">
//             <img src="img/placa de video.jpg" alt="">
//             <p>Placa de Vídeo Asus GEForce RTX 3060 <br>R$ 3.459,99</p>
//             <button>Ver Produto</button>
//         </article>

//         <article class="sobre-produtos">
//             <img src="img/Mouse Microsoft.jpg" alt="">
//             <p>Mouse Genérico <br> R$ 128,49</p>
//             <button>Ver Produto</button>
//         </article>

//         <article class="sobre-produtos">
//             <img src="img/memoria xpg.jpg" alt="">
//             <p>Memória XPG Lancer, RGB 32GB <br>R$ 1.337,99</p>
//             <button>Ver Produto</button>
//         </article>

//         <article class="sobre-produtos">
//             <img src="img/kindle.jpg" alt="">
//             <p>Kindle 11° Geração Amazon <br>R$ 419,99</p>
//             <button>Ver Produto</button>
//         </article>       
//     </main>        
//         </>
//     )
// }
// export default Produtos;

function Produtos() {
    return (
        <main className="principal-produtos">
            <h2>PRODUTOS EM ALTA</h2>
            <article className="sobre-produtos">
                <img src="img/Notebook.jpg" alt="Imagem de um Notebook da Dell" className="notebook" />
                <p>Notebook Gamer Acer Nitro 5 <br /> R$ 5.318,98</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/Cadeira Gamer Mymax.jpg" alt="" />
                <p>Cadeira Gamer MyMax <br /> R$ 759,99</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/fone.png" alt="imagem de um fone de ouvido" className="fone-de-ouvido" />
                <p>Fone de Ouvido Sony (Bluetooth) <br />R$ 267,99</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/PC gamer neologic gtx1660.jpg" alt="" />
                <p>PC Gamer NeoLogic GTX1660 <br />R$ 4.299,99</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/placa de video.jpg" alt="" />
                <p>Placa de Vídeo Asus GEForce RTX 3060 <br />R$ 3.459,99</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/Mouse Microsoft.jpg" alt="" />
                <p>Mouse Genérico <br /> R$ 128,49</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/memoria xpg.jpg" alt="" />
                <p>Memória XPG Lancer, RGB 32GB <br />R$ 1.337,99</p>
                <button>Ver Produto</button>
            </article>

            <article className="sobre-produtos">
                <img src="img/kindle.jpg" alt="" />
                <p>Kindle 11° Geração Amazon <br />R$ 419,99</p>
                <button>Ver Produto</button>
            </article>
        </main>
    );
}

export default Produtos;

//em analise / nos brs e, classes duplicadas nos elementos article e fechamento das tags img