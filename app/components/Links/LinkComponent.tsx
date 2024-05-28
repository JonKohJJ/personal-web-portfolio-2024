import Link from "next/link"

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
    
        if (hasDestination) {
            return (
                <Link href={href} target='_blank' className={`
                    link-component
                    fs-caption

                    after:content-['']
                    after:w-0
                    after:hover:w-full
                    after:h-[1px]
                    after:bg-color-dark
                    after:dark:bg-color-light
                    after:transition-all
                    after:duration-[.3s]
                    after:block

                    ${additionalClasses}
                `}>
                    {title}
                </Link>
            )
        }
        else {
            return (
                <Link href={href} className={`
                    link-component
                    fs-caption
                    
                    after:content-['']
                    after:w-0
                    after:hover:w-full
                    after:h-[1px]
                    after:bg-color-dark
                    after:dark:bg-color-light
                    after:transition-all
                    after:duration-[.3s]
                    after:block

                    ${additionalClasses}
                `}>
                    {title}
                </Link>
            )
        }
        
    
}
