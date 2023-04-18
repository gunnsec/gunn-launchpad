import {ReactNode} from 'react';


export default function Benefit(props: {children: ReactNode, name: string, index: number}) {
    return (
        <div className="relative flex flex-col gap-3 pl-16 sm:pl-20">
            <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-grapefruit rounded-full text-3xl font-black text-gray-100 dark:text-dark">
                {props.index}
            </div>

            <h3 className="text-3xl font-bold">{props.name}</h3>
            <p>{props.children}</p>
        </div>
    )
}
