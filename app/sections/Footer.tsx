import LinkComponent from '../components/Links/LinkComponent'

export const footerLinks = [
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/jonathankohjj/',
    },
    {
        title: 'Github',
        href: 'https://github.com/JonKohJJ',
    },
    {
        title: 'Instagram',
        href: '',
    },
    {
        title: 'Email',
        href: '',
    },
    
]

export default function Footer() {
  return (
    <footer className='footer py-[2em] text-center border-solid border-t-[1px] border-color-border mt-[auto]

        lg:flex 
        lg:flex-row-reverse
        lg:justify-between
    '>

        <div className='footer-links flex justify-center mb-[10px] 

            lg:mb-[0]
        '>
            {footerLinks.map(link => {
                return(
                    <LinkComponent key={link.title} title={link.title} href={link.href} additionalClasses='mr-8' openInNewTab={true}/>
                )
            })}
        </div>

        <p className='fs-caption'>&copy; {new Date().getFullYear()} All Rights Reserved. Coded with ❤️️</p>
            
    </footer>
  )
}
