import styles from './Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../icon/icon'

function Header () {
    return (
        <div className={styles.header}>
            <Title>Jogo da velha</Title>
            <Subtitle>Criado por Marcos Passos</Subtitle>
            <div className={styles.iconContent}>
                <Icon iconName="github" link="https://github.com/MarcosPassos-git"/>
            </div>
        </div>
    )
}

export default Header