import styles from './feature.module.css'


export default function Feature({imgSrc, imgAlt, title, description}) {
    return (
        <div className={styles.featureItem}>
            <img src={imgSrc} alt={imgAlt} className={styles.featureIcon} />
            <h3 className={styles.featureItemTtitle}>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

