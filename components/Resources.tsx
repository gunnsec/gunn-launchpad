import {ReactNode} from 'react';


export default function Resources(props: {children: ReactNode}) {
    return (
        <section>
            <div className="grid grid-cols-3 gap-4 mb-6">
                {props.children}
            </div>
            <p className="text-secondary dark:text-secondary-dark">View all resources here →</p>
        </section>
    )
}
