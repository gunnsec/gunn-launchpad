import {ReactNode} from 'react';
import Link from 'next/link';


export default function Resources(props: {children: ReactNode}) {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {props.children}
            </div>
            <Link href="/resources" className="text-secondary dark:text-secondary-dark hover:underline">
                View all resources here →
            </Link>
        </section>
    )
}
