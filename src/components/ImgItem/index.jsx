import styles from "./ImgItem.css"

function ImgItem({img}){
    return(
      <div className="image mt-4 col-sm-6 col-lg-3">
        <a href={img.href} className="link">
          <img src={img.img} alt={img.alt} className="style"/>
        </a>
        <p className="title">{img.title}</p>
      </div>
    );
}

export default ImgItem;