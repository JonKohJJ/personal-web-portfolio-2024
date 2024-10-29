import { projectChildren, projectChildrenDetails } from "../constants/data"
import ProjectHover from "../components/ProjectHover";

export default function Projects() {

    return (
        <div className={`wrapper

            container 
            p-4
            lg:p-0
            flex
            flex-col

        `}>
            <section className='selected-projects py-36'>

                <div className='projects-header flex'>
                    <p className='fs-h5 pb-6'>Some of My Work</p>
                    <span className='fs-base ml-2'>({projectChildren.length})</span>
                </div>

                <div className='projects-list flex flex-col'>
                    {projectChildren.map((projectName: string) => {
                        let projectDetails = projectChildrenDetails[projectName]
                        return(
                            <ProjectHover key={projectDetails.title} projectDetails={projectDetails}/>
                        )
                    })}
                </div>

                <div className='projects-footer pt-8 lg:pt-14 border-solid border-t-[1px] border-color-border-light dark:border-color-border-dark'>
                    <p className='fs-h5 mb-1'>Want to see more?</p>
                    <p className='fs-base'>Reach out to me at jonathan.koh75@gmail.com</p>
                </div>

            </section>
        </div>
    )
}
