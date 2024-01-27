import style from './style.module.css';
import igniteLogo from '../../assets/Ignite-logo.svg';

export const Header = () => {
    return (
        <>

            <header className={style.header}>
                <img
                    src={igniteLogo}
                    alt='Logotipo do Ignite'
                />
            </header>
        </>
    )
}