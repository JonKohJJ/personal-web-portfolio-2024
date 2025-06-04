"use client";
import React, { useState } from 'react';
import Image from 'next/image'; 
import { ProjectDetailsProps } from '../constants/data';
import Link from 'next/link';

const ProjectHover = ({ projectDetails }: { projectDetails: ProjectDetailsProps }) => {

    const { title, subTitle_short, year, hero_image, href } = projectDetails;

    const [showImage, setShowImage] = useState(false);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setShowImage(true);
    };

    const handleMouseLeave = () => {
        setShowImage(false);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setImagePosition({
            x: event.nativeEvent.offsetX,
            y: event.nativeEvent.offsetY
        });
    };

    return (
        <Link
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className='
                py-8 
                lg:py-14 
                flex 
                flex-col-reverse 
                lg:flex-row 
                justify-between 
                lg:items-end 
                border-solid 
                border-t-[1px] 
                border-color-border-light 
                dark:border-color-border-dark
                relative
                group
            '
        >
            <div className='project-left'>
                <p className='fs-h1'>{title}</p>
                <p className='fs-base mt-2'>{subTitle_short}</p>
            </div>

            <div className="project-right">
                <p className="fs-caption italic font-light mb-4 lg:mb-0">{year}</p>
            </div>

            <div className="project-background-image
                absolute
                top-0
                z-[-1]
                h-full
                w-screen
                ml-[50%]
                translate-x-[-50%]
                opacity-0
                group-hover:opacity-10
                transition-opacity
                duration-[300ms]
            ">
                <Image
                    src={hero_image}
                    alt={`${title} Hero Image`}
                    quality={100}
                    priority
                    className='w-full h-full object-cover'
                />
            </div>

            <Image
                src={hero_image}
                alt={`${title} Hero Image`}
                quality={100}
                priority
                className="absolute aspect-[3/2] w-1/3 object-cover z-[1] pointer-events-none transition-all duration-300 ease-out rounded-lg"
                style={{
                    transform: `translate(${imagePosition.x + 10}px, ${imagePosition.y + 10}px)`,
                    opacity: showImage ? 1 : 0,
                }}
            />
        </Link>
    );
};

export default ProjectHover;