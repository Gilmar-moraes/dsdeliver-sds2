import './styles.css';
import Footer from '../Footer';
import { ReactComponent as MainImage } from './Imagem.svg'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="homme-title">
                            Faça seu pedido <br /> que entregamos <br /> para você!!!
                    </h1>
                        <h3 className="home-subtitle">
                            Escolha o seu pedido e em poucos minutos <br /> levamos na sua porta
                    </h3>
                        <Link to="/orders" className="home-btn-order">
                            FAZER PEDIDO
                    </Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;