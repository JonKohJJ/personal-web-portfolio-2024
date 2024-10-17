import PrimaryButton from "@/app/components/Buttons/PrimaryButton"
import { projectChildrenDetails, technologiesDetails } from "@/app/constants/data"
import Link from "next/link"
import React from "react"

export default function ProjectDetails({ 
    
    params

}: { 

    params: { projectName: string }

}) {

    let projectDetails = projectChildrenDetails[params.projectName]

    return (
        <div className='wrapper
            container
            p-4
            lg:p-0
            flex
            flex-col
            min-h-screen
        '>
            <div className="project-summary 
                max-w-[1000px]
                mb-16
                mt-80
            ">
                <p className="fs-h1 mb-8">{projectDetails.title}</p>
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
                                <div key={index} className="technologies-icon-div h-[40px] w-[40px]">
                                    {React.cloneElement(IconComponent, { className: "w-full h-full" })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="project-buttons
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

            {/* Might be empty */}
            {projectDetails.concepts ? 
                <div className="project-concepts
                    mb-16
                ">
                    <p className="fs-base">Concepts:</p>
                    {projectDetails.concepts.map((des, index) => {
                        return <p key={index} className="fs-base font-light">{des}</p>
                    })}
                </div>
                : null
            }

        </div>
    )
}
