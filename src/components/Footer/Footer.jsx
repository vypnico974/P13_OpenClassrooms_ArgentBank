import styles from './footer.module.css'


export default function Footer({text}) {
    return (
        <footer  className={styles.footer}>
            <p className={styles.footerText}>{text}</p>
        </footer>
    )
}

