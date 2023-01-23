//css
import styles from './footer.module.css'
// prop types
import PropTypes from 'prop-types'

/**
  * @function Footer
  * @export
  * @description  component : footer 
  * @param {string} text - text
  * @return {HTMLElement} component generated HTML
*/
export default function Footer({text}) {
    return (
        <footer  className={styles.footer}>
            <p className={styles.footerText}>{text}</p>
        </footer>
    )
}
Footer.prototype = {
    text: PropTypes.string,
}

