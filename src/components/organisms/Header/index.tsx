import Logo from '@/assets/LogoHeader.svg';
import User from '@/assets/icon-user.svg';
import Avatar from '@/assets/avatar.png'
import { useState } from 'react';
interface IHeader {
    isLogged: boolean
}

const Header = ({ isLogged }: IHeader) => {
    const [authenticated, setAuthenticated] = useState(isLogged)

    const login = () => {
        localStorage.setItem('user', 'logged');
        setAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('user');
        setAuthenticated(false);
    }

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
            {authenticated ?
                <button onClick={logout} className='rounded-circle flex justify-center items-center overflow-hidden w-inline-sm h-stack-sm xl:w-inline-md xl:h-stack-md'>
                    <img src={Avatar} alt="avatar" className='w-full h-full' />
                </button>
                :
                <button onClick={login} className="w-inline-sm h-stack-sm bg-primary-main rounded-circle flex justify-center items-center xl:w-inline-md xl:h-stack-md hover:opacity-90">
                    <img src={User} alt="user button" />
                </button>
            }
        </header>
    )
}

export default Header