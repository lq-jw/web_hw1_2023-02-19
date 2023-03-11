import styles from "./header.css"

function Header(){
    return(
        <header className="header">
            <div className="container d-flex flex-column align-items-center">
                <img className="avatar" src="./images/avatar.png" alt="avatar" />
                <h1 className="title">Name</h1>
                <hr className="divider--light" />
                <p className="slogan">Slogan</p>
            </div>
        </header>
    );
}

export default Header;