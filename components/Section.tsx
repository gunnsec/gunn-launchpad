import {ReactNode} from 'react';


export default function Section(props: {children: ReactNode, secondary?: boolean, className?: string}) {
    return (
        <section className={'py-10 ' + (props.secondary ? 'bg-gray-100 dark:bg-dark' : 'bg-white dark:bg-midnight')}>
            <div className={'container' + (props.className ? ` ${props.className}` : '')}>
                {props.children}
            </div>
        </section>
    )
}
