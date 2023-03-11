import styles from "./footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="above py-5">
                <div className="container">
                    <div className="row my-3">
                        <h5 className="description col-lg-8">
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                        </h5>
                        <ul className="list col-lg-4">
                            <li className="item"><a href="" className="link"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="item"><a href="" className="link"><i className="fab fa-google-plus-g"></i></a></li>
                            <li className="item"><a href="" className="link"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="below">
                <div className="container">
                    <h6>
                    &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
      </footer>
    );
}

export default Footer;