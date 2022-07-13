

EM DESENVOLVIMENTO

<h1 align="center" id="top">Projeto Aggostini</h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#surge">Surge</a> &#xa0; | &#xa0;
  <a href="#imagens">Imagens</a> &#xa0; | &#xa0;
  <a href="#desenvolvedor">Desenvolvedor</a> | &#xa0;
<a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#comousar">Como Usar</a> &#xa0; | &#xa0;

</p>
<h2 id="sobre"> Sobre </h2>

Projeto baseado em site e-comerce de produtos

<br />


<h2 id="surge"> Surge: </h2>

[]


<h2 id="imagens"> Imagens </h2>





<h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>

<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2> Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>


<h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>

- Javascript
- CSS
- React
- HTML
- Axios
- React-router-dom
- Styled Components

<h2 id="comousar"> Como usar </h2>

Teste o código no seu navegador pelo surge <a href="#surge">AQUI</a> ou pelo seu computador assim:
- Clone o código para seu computador.
- Rode o comando npm instal (para instalar bibliotecas).
- Rode o comando "npm run start", código ira abrir pelo localhost do seu computador.


<a href="#top">Voltar para o topo</a>




<div className="footer-container">
                <div className="footer-phone-email-container">
                    <div className="footer-phone-container" data-aos="fade-down">
                        <div className="footer-icon-box">
                            <img className="footer-icon-email" src={iconPhone} alt="icon-phone" />
                        </div>
                        <div className="footer-phone-number">{parametros && parametros[0].whats} | {parametros && parametros[0].telefone}</div>
                    </div>
                    <div className="footer-email-container" data-aos="fade-up">
                        <div className="footer-icon-box">
                            <img className="footer-icon-email" src={iconEmail} alt="icon-email" />
                        </div>
                        <div className="footer-email">{parametros && parametros[0].email}</div>
                    </div>
                </div>
                <div className="footer-edress-container">
                    <div className="footer-edress">{parametros && parametros[0].endereco}</div>
                    <div className="footer-developer">@2022 developer-CFS</div>
                </div>
            </div>
