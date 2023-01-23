//css
import styles from './hero.module.css'
// prop types
import PropTypes from 'prop-types'

/**
  * @function Hero
  * @export
  * @description  component : hero 
  * @param {string} title - title
  * @param {string} subtitle1 - subtitle 1
  * @param {string} subtitle2 - subtitle 2
  * @param {string} subtitle3 - subtitle 3
  * @param {string} text - text
  * @return {HTMLElement} component generated HTML
*/
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
Hero.prototype = {
    title: PropTypes.string,
    subtitle1: PropTypes.string,
    subtitle2: PropTypes.string,
    subtitle3: PropTypes.string,
    text: PropTypes.string,
}