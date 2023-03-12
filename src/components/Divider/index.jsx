import styles from "./Divider.module.css"

function DividerDark(){
    return(
        <hr className={styles.dark}/>
    );
}

function DividerLight(){
    return(
        <hr className={styles.light}/>
    );
}

export {DividerLight,DividerDark};