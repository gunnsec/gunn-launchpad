import {ReactNode} from 'react';
import {RxExternalLink} from 'react-icons/rx';


export default function Resource(props: {name: string, children: ReactNode, href?: string}) {
    return (
        <div className="basis-96 flex-grow relative px-5 py-3.5 rounded-lg border border-gray-400 hover:border-gray-600 dark:border-gray-500 dark:hover:border-gray-400 transition-[border] duration-200">
            {props.href && (
                <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0"/>
            )}

            <h5 className="flex gap-1.5 items-center font-bold mb-1">
                {props.name}
                {props.href && <RxExternalLink className="pb-0.5" />}
            </h5>
            <p className="text-secondary dark:text-secondary-dark text-sm">{props.children}</p>
        </div>
    )
}
