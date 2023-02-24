import Image from "next/image"

export default function NavBar() {

    return(<div>
        <Image src="/logo.svg"
        alt="logo"
        width={100}
        height={100}
        />
    </div>

    )
}