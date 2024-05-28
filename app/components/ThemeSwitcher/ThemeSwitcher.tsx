'use client'
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false)
    useEffect(() =>  setMounted(true), [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    if (!mounted) { 
        return <div className="theme-switcher-placeholder min-w-[100px]"></div>
    }

    return (
        <div className={`theme-switcher flex items-center justify-end cursor-pointer min-w-[100px]`} onClick={toggleTheme}>
            {theme === 'dark' && 
                <>
                    <MoonIcon className='size-5'/>
                    <p className='fs-caption pl-2'>Dark</p>
                </>
            }

            {theme === 'light' && 
                <>
                    <SunIcon className='size-5'/>
                    <p className='fs-caption pl-2'>Light</p>
                </>
            }
        </div>
    );
    


}