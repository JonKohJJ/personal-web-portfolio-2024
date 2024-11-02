import PrimaryButton from "../components/Buttons/PrimaryButton";
import LinkComponent from "../components/Links/LinkComponent";
import { footerLinks } from "../constants/data";
import { resume_link } from "../constants/data";

export default function Hero() {

      
  return (
    <div className={`wrapper

        container 
        p-4
        lg:p-0
        flex
        flex-col

    `}>
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
                <p className='fs-hero-title'>Software Engineer</p>

                <p className='fs-base opacity-[0.6] mt-6 max-w-[400px]

                    lg:opacity-[1]  
                    lg:mt-0
                    lg:mb-9

                '>specialized in Front End Development.</p>
            </div>

            <div className='hero-bottom

                lg:grid
                lg:items-start
                lg:grid-cols-[10fr_2fr]
                lg:gap-12

            '>
                <div className="hero-bottom-left">
                    <p className='fs-h5 lg:max-w-[800px]'>
                        I craft dynamic software solutions, from engaging web applications to transformative systems, empowering businesses to thrive in the digital era.
                    </p>
                    <PrimaryButton title='View My Resume' href={resume_link} openInNewTab={true} additionalClasses='mt-6 lg:mt-10'/>
                </div>

                <div className='hero-bottom-right hidden
                    lg:block
                '>
                    <p className='fs-caption opacity-[0.5] pb-4 mb-4 border-solid border-b-[1px] border-color-border-light dark:border-color-border-dark'>Let&apos;s get conected</p>
                    {footerLinks.map(link => {
                        return( 
                            <LinkComponent key={link.title} title={link.title} href={link.href} hasDestination={link.hasDestination} additionalClasses='block mb-2 w-fit' />
                        )
                    })}
                </div>


            </div>
        </section>
    </div>
  )
}
