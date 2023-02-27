import React, {useEffect, useRef, useState} from 'react';
import IconMoon from "./icons/IconMoon.jsx";
import IconSun from "./icons/IconSun.jsx";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    const refHeader = useRef(null)


    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-x1" ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font font-bold tracking-[0.3 em]">
                    Todo
                </h1>
                <button onClick={() => { setDarkMode(!darkMode)}}>
                    {
                        darkMode ? <IconSun /> : <IconMoon />
                    }

                </button>
            </div>
        </header>
    )
    };

export default Header;