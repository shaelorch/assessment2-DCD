import Image from "next/image"

export default function NavBar() {

    return(<div className={styles.logoCont}>
        <Image src="/logo.svg"
        alt="logo"
        width={150}
        height={150}
        />
    </div>

    )
}