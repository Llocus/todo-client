import Header from '../../Components/Header';
import './PageNotFoundView.scss';

const PageNotFoundView = () => {
    return (
    <>
        <Header/>
        <div className='Center'>
        <div className='NotPageContent'>
            <h1>O que está procurando?</h1>
            <h1>Melhor voltar para a página inicial.</h1><br/>
            <a href="/">
            <button className='btn btn-warning'>Voltar</button>
            </a> 
        </div></div>
    </>
    );
    }
    
export default PageNotFoundView;
  