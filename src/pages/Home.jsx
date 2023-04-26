import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import ImgList from "../components/ImgList";
import Descriptions from "../components/Descriptions";
import Footer from "../components/Footer";
import { useImgs } from "../react-query";
//import { orderByChild } from "firebase/firestore";
//import { orderBy } from "firebase/firestore";

function Home(){
    const { data, isLoading } = useImgs();
    const imgs = data || [];
    imgs.sort((a, b) => a.id - b.id);

    return(
        <div className="page main-layout">
            <Header className="header"/>
            <TitleSection className="titleSection"/>
            <ImgList 
                imgs = {imgs}
                isLoading = {isLoading}
                className="contentt"/>
            <Descriptions className="descriptions"/>
            <Footer className="footer"/>
        </div>
    );
}

export default Home;