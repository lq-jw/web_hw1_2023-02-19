import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import ImgList from "../components/ImgList";
import Descriptions from "../components/Descriptions";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="page main-layout">
            <Header className="header"/>
            <TitleSection className="titleSection"/>
            <ImgList className="contentt"/>
            <Descriptions className="descriptions"/>
            <Footer className="footer"/>
        </div>
    );
}

export default Home;