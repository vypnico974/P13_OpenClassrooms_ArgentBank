import styles from './hero.module.css'


export default function Hero({title,subtitle1,subtitle2,subtitle3,text}) {
    return (
        <div className={styles.hero}>
            <section className={styles.heroContent}>
                <h2 className={styles.srOnly}>{title}</h2>
                <p className={styles.subtitle}>{subtitle1}</p>
                <p className={styles.subtitle}>{subtitle2}</p>
                <p className={styles.subtitle}>{subtitle3}</p>
                <p className={styles.text}>{text}</p>
            </section>
        </div>
    )
}