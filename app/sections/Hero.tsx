import PrimaryButton from "../components/Buttons/PrimaryButton";
import LinkComponent from "../components/Links/LinkComponent";
import { footerLinks } from "./Footer";

export default function Hero() {
  return (
    <section className='hero pt-48 pb-12
        
        lg:pt-80
        lg:pb-36

    '>
        <div className='hero-top mb-12

            lg:grid
            lg:items-end
            lg:grid-cols-[8fr_4fr]
            lg:gap-12
            lg:mb-36

        '>
            <p className='fs-hero-title
                
            '>Software Engineer</p>

            <p className='fs-base opacity-[0.6] mt-6 max-w-[300px]

                lg:opacity-[1]  
                lg:mt-0 
                lg:mb-9

            '>specialized in Web Design, UX / UI, Webflow, and Front End Development.</p>
        </div>

        <div className='hero-bottom

            lg:grid
            lg:items-start
            lg:grid-cols-[10fr_2fr]
            lg:gap-12

        '>
            <div className="hero-bottom-left">
                <p className='fs-h5 lg:max-w-[800px]
                    
                '>I engineer seamless software solutions, from web applications to scalable systems, to empower businesses in the digital age.</p>
                <PrimaryButton title='Drop me a line' href='' additionalClasses='mt-6 lg:mt-10'/>
            </div>

            <div className='hero-bottom-right hidden
                lg:block
            '>
                <p className='fs-caption opacity-[0.5] pb-4 mb-4 border-solid border-b-[1px] border-color-border'>Let's get conected</p>
                {footerLinks.map(link => {
                    return(
                        <LinkComponent key={link.title} title={link.title} href={link.href} additionalClasses='block mb-2 w-fit' openInNewTab={true}/>
                    )
                })}
            </div>


        </div>
    </section>
  )
}
