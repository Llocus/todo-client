import { api } from "../../Services/Api"
import './Home.scss'
import Header from "../../Components/Header"

const Home = () => {
    api.get('users').then(response => console.log(response.data.users))
    return(
        <>
        <Header/>
        <div className="Home_PageContent">
        <img src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-image-of-hand-with-pen-over-blank-paper_HTeOEQVW4-_SB_PM.jpg" alt="hand and paper"/>
        <div className="Description">
        <span><b>Cansado de cadastrar seus usuários no papel?</b><br/><br/>
        Não se preocupe mais! Vamos te ajudar com isso.</span><br/>
        <a href="/cadastrar">
        <button>Começar a cadastrar!</button>
        </a>
        </div></div>
        </>
    )
}

export default Home