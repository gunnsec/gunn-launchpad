import {ReactNode} from 'react';


export default function Resource(props: {name: string, children: ReactNode}) {
    return (
        <div className="px-5 py-3.5 rounded-lg border border-gray-400 hover:border-gray-600 transition-[border] duration-200">
            <h5 className="font-medium mb-1">{props.name}</h5>
            <p className="text-secondary dark:text-secondary-dark text-sm">{props.children}</p>
        </div>
    )
}
