import {ReactNode} from 'react';
import {FiLink} from 'react-icons/fi';


type SectionProps = {children: ReactNode, secondary?: boolean, className?: string, name?: string, id?: string};
export default function Section(props: SectionProps) {
    return (
        <section className={'relative py-10 ' + (props.secondary ? 'bg-gray-100 dark:bg-dark' : 'bg-white dark:bg-midnight')}>
            {props.id && <span id={props.id} className="absolute -top-16" />}

            <div className={'container' + (props.className ? ` ${props.className}` : '')}>
                {props.name && (
                    // Section header
                    <a href={`#${props.id}`} className="group flex gap-2 mb-5 items-center hover:underline decoration-1 underline-offset-4 decoration-secondary dark:decoration-secondary-dark decoration-dotted">
                        <h2 className="text-2xl font-bold">
                            {props.name}
                        </h2>
                        <FiLink className="hidden group-hover:block text-xl pb-0.5 mt-2 stroke-[1.5px]" />
                    </a>
                )}

                {props.children}
            </div>
        </section>
    )
}
