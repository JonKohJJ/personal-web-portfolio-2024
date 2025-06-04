import PrimaryButton from "@/app/components/Buttons/PrimaryButton"
import { projectChildrenDetails, technologiesDetails } from "@/app/constants/data"
import React from "react"
import Image from "next/image";

export default function Dojo() {

    let projectDetails = projectChildrenDetails["Dojo"]

    return (
        <div className='wrapper
            container
            p-4
            lg:p-0
            flex
            flex-col
            min-h-screen
        '>
            <div className="project-hero-image 
                    h-[500px]
                    w-screen
                    ml-[50%]
                    translate-x-[-50%]
                ">
                <Image 
                    src={projectDetails.hero_image}
                    alt={`${projectDetails.title} Hero Image`}
                    quality={100}
                    priority
                    className='w-full h-full object-cover object-center'
                />
            </div>

            <div className="project-summary 
                max-w-[1000px]
                mb-16
            ">
                <p className="fs-h1 mb-8 mt-20">{projectDetails.title}</p>
                <p className="fs-base mb-6">{projectDetails.subTitle_long}</p>
                <div className="technologies
                    flex 
                    flex-col 
                    gap-2
                    lg:gap-4
                    lg:flex-row 
                    lg:items-center
                ">
                    <p className="fs-base">Build with:</p>
                    <div className="technologies-icons
                        flex 
                        gap-4
                        items-center
                    ">
                        {projectDetails.technologies.map((tech, index) => {
                            const IconComponent = technologiesDetails[tech].icon
                            return (
                                <div key={index} className="technologies-icon-div h-[30px] w-[30px]">
                                    {React.cloneElement(IconComponent, { className: "w-full h-full" })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="project-buttons
                max-w-[1000px]
                mb-16
                flex 
                flex-col 
                gap-4
                lg:flex-row 
            ">
                <PrimaryButton title='Visit Website' href={projectDetails.href_livesite} openInNewTab={true} additionalClasses="w-fit"/>
                <PrimaryButton title='GitHub Repository' href={projectDetails.href_github} openInNewTab={true} additionalClasses="w-fit"/>
            </div>

            <div className="project-description
                max-w-[1000px]
                mb-16
            ">
                {projectDetails.description.map((des, index) => {
                    return <div key={index} className="mb-8">
                        {des.map((d, index) => {
                            if (index === 0) {
                                return <p key={index} className="fs-base">{d}</p>
                            }
                            return <p key={index} className="fs-base font-light">{d}</p>
                        })}
                    </div>
                })}
            </div>

        </div>
    )
}
