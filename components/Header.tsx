import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useScroll} from '../util/useScroll';
import ThemeToggle from './ThemeToggle';


export default function Header() {
    const scroll = useScroll();

    return (
        <header className={'z-40 flex items-center px-6 lg:px-14 sticky top-0 mb-28 bg-white/60 dark:bg-midnight/60 transition-shadow duration-200 backdrop-blur ' + (scroll > 0 ? 'shadow-sm' : 'hover:shadow-sm')}>
            {/* TODO: logo */}
            <HeaderItem href="/">Home</HeaderItem>
            <HeaderItem href="/art">Art</HeaderItem>
            <HeaderItem href="/tech">Tech</HeaderItem>
            <HeaderItem href="/events">Events</HeaderItem>
            <ThemeToggle className="ml-auto mr-4" />
        </header>
    )
}

function HeaderItem(props: {href: string, children: ReactNode}) {
    const {pathname} = useRouter();
    const active = pathname === props.href;

    return (
        <Link href={props.href} className={'px-3.5 py-6 font-medium tracking-narrow text-sm ' + (active ? 'text-grapefruit' : 'text-secondary dark:text-secondary-dark')}>
            {props.children}
        </Link>
    )
}
