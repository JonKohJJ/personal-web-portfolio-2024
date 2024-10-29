import Link from "next/link"
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { FiArrowUpRight } from "react-icons/fi";

export default function LinkComponent({ 
    
    title, 
    href, 
    additionalClasses,
    hasDestination

} : 
{   
    title: string, 
    href: string,
    additionalClasses?: string,
    hasDestination?: boolean,
    
}) {
    
    return (
        <Link href={href} target={hasDestination ? '_blank' : ''} className={`
            link-component
            fs-caption
            relative

            after:content-['']
            after:absolute
            after:left-0
            after:bottom-0
            after:w-0
            after:hover:w-full
            after:h-[1px]
            after:bg-color-dark
            after:dark:bg-color-light
            after:transition-all
            after:duration-[.3s]
            after:block

            ${hasDestination && 'flex items-center'}

            ${additionalClasses}
        `}>
            <p>{title}</p>
            {hasDestination ? <FiArrowUpRight className="w-6 h-6"/> : null}
        </Link>
    )
    
}
