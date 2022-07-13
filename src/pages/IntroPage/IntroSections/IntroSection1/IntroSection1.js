import "./StyledIntroSection1.css";
import aquecedores from "../../../../images/intro/aquecedores.jpg"
import solar from "../../../../images/intro/solar.jpg"
import reparos from "../../../../images/intro/reparos.jpg"
import pressurizadores from "../../../../images/intro/pressurizadores.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection1() {
    const navigate = useNavigate();
    const data = useContext(GlobalContext);
    const parametros = data.parametros
    const setSearch = data.setSearch
    const setTitle = data.setTitle


    const setSearchFunction=(id,title)=>{
        
        setSearch(`${id}`)
        navigate(`/aggostini/produtos`)
        setTitle(title)
    }

    return (
        <div id="intro-section-1">

            <div className="body-intro-section-1">
                
                <div className="body-rigth-container">
                    
                    <div className="title-rigth-container">SOLAR</div>
                    <div className="text-rigth-container">Tudo para energia fotovoltaica </div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction("0afb5669-ac16-4af6-b6ea-38569761a07c","SOLAR")} className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div  className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de painel solar.`}target="_blank">
                        ORÇAMENTO
                        </a>
                            </div> 
                    </div>
                </div>
            </div>

            <div className="body-intro-section-1">

                <div className="body-rigth-container">
                   

                    <div className="title-rigth-container">REPAROS</div>
                    <div className="text-rigth-container">Soluções para a linha hidráulica </div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction("1d2e97cb-c11b-4593-b6c5-0a37e59fc598","REPAROS")} className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento para reparos.`}target="_blank">
                        ORÇAMENTO
                        </a> </div> 
                    </div>
                </div>

            </div>

            <div className="body-intro-section-1">
            
                <div className="body-rigth-container">
                  
                    <div className="title-rigth-container">PRESSURIZADORES</div>
                    <div className="text-rigth-container">Produtos para melhorar vazão da água em casa</div>
                    
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction("4b6897a4-1861-46fa-b0ad-7d9ce98e0898","PRESSURIZADORES")}  className="btn-rigth-container-more">VER PRODUTOS</div>  
                     <div className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de pressurizadores.`}target="_blank">
                        ORÇAMENTO
                        </a>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="body-intro-section-1">
            
                <div className="body-rigth-container">
                    
                    <div className="title-rigth-container">AQUECEDORES</div>
                    <div className="text-rigth-container">Linha gás para sua casa</div>
                    <div className="btns-rigth-container">
                     <div onClick={() => setSearchFunction("593208d5-7ea3-4719-a339-5863ae1ec1d1","AQUECEDORES")} className="btn-rigth-container-more">VER PRODUTOS </div>  
                     <div className="btn-rigth-container">
                     <a href={`https://api.whatsapp.com/send?phone=${parseFloat(parametros && parametros[0].whats)}&text=Olá! Gostária de solicitar um orçamento de aquecedores.`}target="_blank">
                        ORÇAMENTO
                        </a>
                         </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}