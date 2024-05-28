import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export default function PrimaryButton({

    title,
    href,
    additionalClasses,
    openInNewTab,

}: {

    title: string,
    href: string,
    additionalClasses?: string,
    openInNewTab?: boolean,

}) {

    if (openInNewTab) {
        return (
            <Link href={href} target='_blank' className={`primary-button group 
                bg-color-dark 
                dark:bg-color-light
                text-color-light 
                dark:text-color-dark
                pl-6 lg:pl-8 pr-1 py-1 
                rounded-[100px] 
                inline-flex 
                items-center 
                gap-x-6
                ${additionalClasses}
            `}>
                <span className='fs-base'>{title}</span>

                <div className='button-icon rounded-full bg-color-light dark:bg-color-dark w-10 lg:w-12 h-10 lg:h-12
                    flex
                    justify-center
                    items-center
                    scale-[0.2]
                    transition-all
                    duration-200
                    group-hover:scale-[1]
                '>
                    <ArrowUpRightIcon className='w-6 h-6 
                        fill-[var(--color-dark)]
                        dark:fill-[var(--color-light)]
                        hidden
                        group-hover:block
                    '/>
                </div>
            </Link>
          )
    }
    else {
        return (
            <Link href={href} className={`primary-button group 
                bg-color-dark 
                dark:bg-color-light
                text-color-light 
                dark:text-color-dark
                pl-6 lg:pl-8 pr-1 py-1 
                rounded-[100px] 
                inline-flex 
                items-center 
                gap-x-6
                ${additionalClasses}
            `}>
                <span className='fs-base'>{title}</span>

                <div className='button-icon rounded-full bg-color-light dark:bg-color-dark w-10 lg:w-12 h-10 lg:h-12
                    flex
                    justify-center
                    items-center
                    scale-[0.2]
                    transition-all
                    duration-200
                    group-hover:scale-[1]
                '>
                    <ArrowUpRightIcon className='w-6 h-6 
                        fill-[var(--color-dark)]
                        dark:fill-[var(--color-light)]
                        hidden
                        group-hover:block
                    '/>
                </div>
            </Link>
          )
    }
  
}
