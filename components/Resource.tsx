import {ReactNode} from 'react';


export default function Resource(props: {name: string, children: ReactNode, href?: string}) {
    return (
        // TODO: rendering an `<a>` for all resources, even if they are not external links, is a bit hacky
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="basis-96 flex-grow">
            <div className="px-5 py-3.5 rounded-lg border border-gray-400 hover:border-gray-600 dark:border-gray-500 dark:hover:border-gray-400 transition-[border] duration-200 h-full">
                <h5 className="font-bold mb-1">{props.name}</h5>
                <p className="text-secondary dark:text-secondary-dark text-sm">{props.children}</p>
            </div>
        </a>
    )
}
