//css
import styles from './home.module.css'
//components
import Feature from '../../components/Feature/Feature'
import Hero from '../../components/Hero/Hero'
//icons
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'


/**
 * @function Home
 * @export
 * @description Home page
 * @return {HTMLElement} component generated HTML
 */
export default function Home() {
    return (
        <main>
            <div>
                <Hero 
                 title="Promoted Content"
                 subtitle1="No fees."
                 subtitle2="No minimum deposit."
                 subtitle3="High interest rates."
                 text="Open a savings account with Argent Bank today!"
                />
            </div>

           <section className={styles.features}>
                <h2 className={styles.srOnly}>Features</h2>
                <Feature imgSrc={iconChat} imgAlt="Chat Icon" title="You are our #1 priority"
                 description="Need to talk to a representative? You can get in touch through
                 our 24/7 chat or through a phone call in less than 5 minutes." />
                <Feature imgSrc={iconMoney} imgAlt="Money Icon"
                 title="More savings means higher rates"
                 description="The more you save with us, the higher your interest rate will be!" />
                <Feature imgSrc={iconSecurity} imgAlt="Security Icon"
                 title="Security you can trust"
                  description="We use top of the line encryption to make sure your data
                  and money is always safe." />
            </section>

        </main>
    )
}