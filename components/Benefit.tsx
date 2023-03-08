import {ReactNode} from 'react';


export function Benefit(props: {children: ReactNode, name: string, index: number}) {
    return (
        <div className="relative flex flex-col gap-3 pl-20 sm:pl-24">
            <div className="absolute left-0 flex items-start justify-center w-10 h-10 bg-grapefruit rounded-full">
                <span className="absolute -bottom-1.5 text-4xl font-black text-gray-100 dark:text-dark">{props.index}</span>
            </div>

            <h3 className="text-3xl font-bold">{props.name}</h3>
            <p>{props.children}</p>
        </div>
    )
}
