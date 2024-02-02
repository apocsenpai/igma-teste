import Logo from '@/assets/LogoHeader.svg';
import User from '@/assets/icon-user.svg';

const Header = () => {
    return (
        <header
            className="fixed top-0 w-full h-stack-xxl pr-inline-xxs flex items-center justify-between bg-background-01 z-10
                            lg:pr-inline-lg xl:pr-inline-xl 2xl:pr-36 animate-fadeDown"
        >
            <img
                src={Logo}
                alt="logotipo"
                className="w-inline-xl xl:w-stack-xxxl"
            />
            <button className="w-inline-sm h-stack-sm bg-primary-main rounded-circle flex justify-center items-center xl:w-inline-md xl:h-stack-md">
                <img src={User} alt="user button" />
            </button>
        </header>
    )
}

export default Header