//css
import styles from './account.module.css'
// prop types
import PropTypes from 'prop-types'


/**
 * @function Account
 * @export
 * @description Account component
 * @param {string} title - title
 * @param {string} money - money
 * @param {string} balanceType - balance type
 * @return {HTMLElement} component generated HTML
 */
export default function Account({title,money, balanceType}) {

    return(
        <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>{title}</h3>
            <p className={styles.accountAmount}>{money}</p>
            <p className={styles.accountAmountDescription}>{balanceType}</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}> View transactions </button>
        </div>        
    </section>
    )
}
Account.prototype = {
    title: PropTypes.string,
    money: PropTypes.string,
    balanceType: PropTypes.string,
}