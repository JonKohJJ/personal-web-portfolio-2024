import { MoonIcon } from '@heroicons/react/24/solid'
import LinkComponent from '../components/Links/LinkComponent'

const navigationLinks = [
    {
        title: 'About',
        href: '',
    },
    {
        title: 'Work',
        href: '',
    },
    {
        title: 'Process',
        href: '',
    },
    {
        title: 'Drop me a line',
        href: '',
    },
]


export default function Navigation() {
  return (
    <div className='Navigation flex justify-between items-start lg:items-center p-0 lg:p-6'>


        {/* Header Logo */}
        <LinkComponent title='Jonathan Koh' href='/' additionalClasses='
            hidden
            lg:block
            after:h-0
        ' />


        {/* Header Nav Links */}
        <div className='header-links flex flex-col lg:flex-row'>
            {navigationLinks.map(link => {
                return(
                    <LinkComponent key={link.title} title={link.title} href={link.href} additionalClasses='
                        py-1 
                        lg:mr-12
                    '/>
                )
            })}
        </div>

        {/* Header Theme Switcher */}
        <div className='theme-switcher flex items-center cursor-pointer'>
            <MoonIcon className='w-4 h-4'/>
            <p className='fs-caption pl-2'>Dark</p>
        </div>
    </div>
  )
}
