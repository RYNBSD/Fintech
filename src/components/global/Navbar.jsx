import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return (
        <nav className="w-full absolute top-0 left-0">
            <div className="container flex items-center justify-between">
                <img
                    className="w-[378px] h-[40px]"
                    src="/asset/logo-white.png"
                    alt="RiseFinance logo"
                />
                <IoMenu width="44px" height="17px" color="#fff" />
            </div>
        </nav>
    );
}
