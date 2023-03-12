import styles from "./header.module.css"
import { DividerLight } from "../Divider";

function Header(){
    return(
        <header className={`${styles.header} ${styles.box}`} >
            <img className={styles.avatar} src="./images/avatar.png" alt="avatar" />
            <h1 className={styles.name}>Name</h1>
            <DividerLight/>
            <p className={styles.slogan}>Slogan</p>
        </header>
    );
}

export default Header;