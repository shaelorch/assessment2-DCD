import Image from "next/image"
import styles from '../styles/Home.module.css'

export default function NavBar() {

    return(<div className={styles.logoCont}>
        <Image src="/logo.svg"
        alt="logo"
        width={150}
        height={150}
        />
        <Image 
        src="/menu.svg"
        alt="menu"
        width={40}
        height={40}/>
    </div>

    )
}