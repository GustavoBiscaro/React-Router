
import Imagem1 from "../assets/Section1.png"
import Imagem2 from "../assets/Section2.png"
import "./Home.css"

const Home = () => {
  return <div className="mainHome">
    <h1>Olá, seja bem-vindo a página principal do site!</h1>
    <h2>Seção 1</h2>
  
    <img src={Imagem1} alt="Seção 1" width="1000px" />
    <h2>Seção 2</h2>
    <img src={Imagem2} alt="Seção 2" width="1000px" />
    
</div>
};

export default Home