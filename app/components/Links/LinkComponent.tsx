import Link from "next/link"

export default function LinkComponent({ 
    
    title, 
    href, 
    additionalClasses,
    openInNewTab,

} : 
{   
    title: string, 
    href: string,
    additionalClasses?: string,
    openInNewTab?: boolean,
    
}) {
    
        if (openInNewTab) {
            return (
                <Link href={href} target='_blank' className={`
                    link-component
                    fs-caption
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
                    ${additionalClasses}
                `}>
                    {title}
                </Link>
            )
        }
        
    
}
