import styles from './Header.module.css';
import igniteLogo from '../assets/Ignite-logo.svg';

export const Header = () => {
    return (
        <>

            <header className={styles.header}>
                <img
                    src={igniteLogo}
                    alt='Logotipo do Ignite'
                />
            </header>
        </>
    )
}