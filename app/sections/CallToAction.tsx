import Image from "next/image";
import Profile_Image from '../../public/images/profile.jpeg'
import PrimaryButton from "../components/Buttons/PrimaryButton";
import TypingText from "../components/TypingText";
import { resume_link } from "../constants/data";

export default function CallToAction() {
  return (
    <div className={`wrapper

        container 
        p-4
        lg:p-0
        flex
        flex-col

    `}>
        <section className='call-to-action py-12

            lg:pt-36
            lg:pb-24
            lg:flex
            lg:justify-between
            lg:items-end

        '>
            <div className='cta-content mb-8 relative

                lg:mb-0
                lg:w-[80%]

            '>

                <Image 
                    src={Profile_Image}
                    alt={`Profile Image`}
                    quality={100}
                    className='float-left size-[clamp(2.5rem,6vw,6rem)] rounded-full mr-2 lg:mr-4'
                />

                <TypingText />

            </div>

            <PrimaryButton title='View My Resume' href={resume_link} openInNewTab={true} />

        </section>
    </div>
  )
}
