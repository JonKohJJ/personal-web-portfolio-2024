import PrimaryButton from "@/app/components/Buttons/PrimaryButton"
import { projectChildrenDetails } from "@/app/constants/data"
import Link from "next/link"

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
            <p className="fs-h1 mt-80">{projectDetails.title}</p>


            <div className='project-details max-w-[1000px]
                border-solid
                border-[1px]
                border-white
            '>
                
                <p className="fs-h5">{projectDetails.description}</p>

                <PrimaryButton title='Visit Website' href={projectDetails.href_livesite} openInNewTab={true}/>
                <PrimaryButton title='GitHub Repository' href={projectDetails.href_github} openInNewTab={true}/>

                <p className="fs-base">{projectDetails.improvements}</p>
            </div>

        </div>
    )
}
