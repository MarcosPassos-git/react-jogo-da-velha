import styles from './Header.module.css'
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header () {
    return (
        <div className={styles.header}>
            <Title>Jogo da velha</Title>
            <Subtitle>Criado por Marcos Passos</Subtitle>
        </div>
    )
}

export default Header