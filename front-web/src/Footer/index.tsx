import './styles.css';
import { ReactComponent as Youtube } from './Youtube.svg';
import { ReactComponent as Instagram } from './Instagram.svg';
import { ReactComponent as Linkendin } from './Linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="new">
                    <Youtube />
                </a>
                <a href="https://www.linkendin.com/school/devsuperior/" target="new">
                <Linkendin />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="new">
                <Instagram />
                </a>
            </div>
        </footer>
    )
}

export default Footer;