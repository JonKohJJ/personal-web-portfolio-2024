import { projectChildren, projectChildrenDetails, technologiesDetails } from "../constants/data"

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
                            <a key={projectDetails.title} href={projectDetails.href} className='py-8 lg:py-14 flex justify-between items-center border-solid border-t-[1px] border-color-border-light dark:border-color-border-dark'>

                                <div className='project-left'>
                                    <p className='fs-h1'>{projectDetails.title}</p>
                                    <p className='fs-base mt-2'>{projectDetails.subTitle}</p>
                                </div>

                                <div className="project-right">
                                    {projectDetails.children && 
                                        <div className="fs-caption">Click for more!</div>
                                    }
                                </div>

                            </a>
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
