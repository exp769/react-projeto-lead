import Header from "./Header"
import Main from './MainDiv';
import Footer from './Footer';

function Home(){
    
    return(
        <>
            <Header/>
            <Main leads = {this.props.leads}/>
            <Footer/>
        </>
    )
}

export default Home;