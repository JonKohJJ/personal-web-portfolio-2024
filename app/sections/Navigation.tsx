
import LinkComponent from '../components/Links/LinkComponent'
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher'
import { navigationLinks } from '../constants/data'


export default function Navigation() {
  return (
    <div className={`wrapper

        container 
        p-4
        lg:p-0
        flex
        flex-col
        
    `}>
        <nav className='Navigation flex justify-between items-start lg:items-center p-0 lg:p-6'>


            {/* Header Logo */}
            <LinkComponent title='Jonathan Koh' href='/' additionalClasses='
                hidden
                lg:block
                after:!h-0
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
            <ThemeSwitcher />
        </nav>
    </div>
  )
}
