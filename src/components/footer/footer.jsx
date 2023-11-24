import style from './footer.module.css'
import logo from '../../img/logo.png'
import whatsapp from '../../img/whatsapp.png'
import twitter from '../../img/twitter.png'
import gitHub from '../../img/gitHub.png'
import instagram from '../../img/Instagram.png'

function FooterComponent (){
    return(
        <footer>
            <div className={style.left}>
                <img src={logo}/>
                <p>R. Culto à Ciência, 177 - Centro, Campinas - SP, 13020-060</p>
            </div>
            <div className={style.right}>
                <div className={style.redesSocias}>
                    <a href='https://www.whatsapp.com/?lang=pt_BR'><img src={whatsapp}/></a>
                    <a href='https://twitter.com/'><img src={twitter}/></a>
                    <a href='https://github.com/Mesuring'><img src={gitHub}/></a>
                    <a href='https://www.instagram.com/'><img src={instagram}/></a>
                </div>
                <div className={style.direitos}>
                    <p>© todos os  direitos reservado para a Measuring</p>
                </div>
            </div>
            
        
        </footer>
    )
}

export default FooterComponent