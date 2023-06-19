import React from 'react';
import Iframe from 'react-iframe';

function Home() {
    return (
        <main className="principal">
            <article className="sobre">
                <h2>SOBRE NÓS</h2>
                <img
                    src="../src/assets/MicrosoftTeams-image (1).png"
                    alt="Imagem de uma loja de informática com três pessoas, sendo dois homens e uma mulher. Mulher vestida com social azul clara sendo abraçada por homem branco com camisa social azul escura e homem vestido de camisa social branca com perfil de vendedor."
                />
                <p>
                    Na Nodeshop, somos uma equipe de especialistas em informática dedicados a fornecer as melhores soluções tecnológicas para nossos clientes. Desde a fundação de nossa empresa, há mais de 10 anos, temos sido reconhecidos por nossa excelência em atendimento ao cliente, suporte técnico e uma ampla gama de produtos de qualidade.
                </p>

                <p>
                    Com um amplo conhecimento sobre hardware e software, nossa equipe está sempre atualizada sobre as mais recentes tecnologias e inovações do setor. Estamos comprometidos em oferecer a você a melhor experiência de compra possível, seja você um cliente experiente em tecnologia ou apenas um iniciante.
                </p>

                <p>
                    Na Nodeshop, acreditamos que a tecnologia deve ser acessível a todos. Por isso, estamos empenhados em oferecer produtos de qualidade a preços acessíveis. Além disso, nossa loja on-line está sempre aberta, tornando mais fácil e conveniente para você comprar a qualquer hora e em qualquer lugar.
                </p>

                <p>
                    A Nodeshop é muito mais do que uma loja de informática. Somos apaixonados por tecnologia e estamos empenhados em ajudar nossos clientes a alcançar seus objetivos. Se você precisar de ajuda com um projeto de computador, instalação de software ou simplesmente estiver procurando o produto certo para sua necessidade, estamos aqui para ajudar. Não hesite em nos contatar para obter ajuda ou mais informações sobre nossos produtos e serviços.
                </p>
            </article>
            <aside className="onde-estamos">
                <h2>Onde Estamos</h2>
                <p>Rua: Tito, n° 54 - Vila Romana - São Paulo - SP - Brasil</p>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14632.490301897229!2d-46.70057017151952!3d-23.52809335518882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1678296604377!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></Iframe>
                <h2>Contatos</h2>
                <ul>
                    <li>
                        <i className="fa-solid fa-phone"></i>4002-8922
                    </li>
                    <li>
                        <i className="fa-brands fa-whatsapp"></i>(11)94002-8922
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>infoecia@senac.com.br
                    </li>
                </ul>
            </aside>
        </main>
    );
}

export default Home;
