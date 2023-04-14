import {ReactNode} from 'react';
import {FiLink} from 'react-icons/fi';


export default function SectionHeader(props: {children: ReactNode, id: string}) {
    return (
        <div className="relative">
            <span id={props.id} className="absolute -top-24" />
            <a href={`#${props.id}`} className="group flex gap-2 mb-5 items-center hover:underline decoration-1 underline-offset-4 decoration-secondary dark:decoration-secondary-dark decoration-dotted">
                <h2 className="text-2xl font-bold">
                    {props.children}
                </h2>
                <FiLink className="hidden group-hover:block text-xl pb-0.5 mt-2 stroke-[1.5px]" />
            </a>
        </div>
    )
}
