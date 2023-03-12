import Styles from "./Title.module.css"
import { Row , Col} from "antd";
import { DividerLight , DividerDark} from "../Divider";

function TitleImg(){
    return(
        <Col justify="center" align="middle">
            <h1 className={Styles.imgtitle}>IMAGES</h1>
            <DividerDark/>
        </Col>
        
    );
}

function TitleDes(){
    return(
        <Col justify="center" align="middle">
            <h1 className={Styles.destitle}>DESCRIPTIONS</h1>
            <DividerLight/>
        </Col>
        
    );
}

export {TitleImg, TitleDes};