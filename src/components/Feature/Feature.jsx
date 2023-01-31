//css
import styles from './feature.module.css'
// prop types
import PropTypes from 'prop-types'


/**
  * @function Feature
  * @export
  * @description  component : features 
  * @param {string} imgSrc - img source
  * @param {string} imgAlt - img alt
  * @param {string} title - title
  * @param {string} description - description
  * @return {HTMLElement} component generated HTML
*/
export default function Feature({imgSrc, imgAlt, title, description}) {
    return (
        <div className={styles.featureItem}>
            <img src={imgSrc} alt={imgAlt} className={styles.featureIcon} />
            <h3 className={styles.featureItemTitle}>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}
Feature.prototype = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
