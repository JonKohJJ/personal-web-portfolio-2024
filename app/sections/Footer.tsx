import Link from 'next/link'
import LinkComponent from '../components/Links/LinkComponent'
import { footerLinks } from '../constants/data'

export default function Footer() {
  return (
    <div className={`wrapper

        container 
        p-4
        lg:p-0
        flex
        flex-col

    `}>
        <footer className='footer py-[2em] text-center border-solid border-t-[1px] border-color-border-light dark:border-color-border-dark mt-[auto]

            lg:flex 
            lg:flex-row-reverse
            lg:justify-between
        '>

            <div className='footer-links flex justify-center mb-[10px] 

                lg:mb-[0]
            '>
                {footerLinks.map(link => {
                    return(
                        <LinkComponent key={link.title} title={link.title} href={link.href} hasDestination={link.hasDestination} 
                            additionalClasses='mr-4 md:mr-8 last:mr-0' 
                        />
                    )
                })}
            </div>

            <div className='lg:flex gap-8'>
                <p className='fs-caption mb-[10px] lg:mb-0'>&copy; 2024 All Rights Reserved. Coded with ❤️️</p>
                <LinkComponent title='Portfolio V1 (2021)' href='https://jonkohjj.github.io/Personal-Web-Portfolio-2021/' hasDestination={true}
                    additionalClasses='mr-4 md:mr-8 last:mr-0 opacity-[0.6]' 
                />
            </div>
        </footer>
    </div>
  )
}
