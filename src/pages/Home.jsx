import Header from "../components/Header";
import ImgList from "../components/ImgList";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="page main-layout">
            <Header className="header"/>
            <ImgList className="contentt"/>
            <Footer className="footer"/>
        </div>
    );
}

export default Home;