import styles from "./ImgItem.module.css"

function ImgItem({img}){
    return(
      <div className={styles.image}>
        <a href={img.href} className={styles.link}>
          <img src={img.src} alt={img.alt} className={styles.style}/>
        </a>
        <p className={styles.title}>{img.title}</p>
      </div>
    );
}

export default ImgItem;