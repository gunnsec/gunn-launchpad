import {BiSun} from 'react-icons/bi';


export default function ThemeToggle(props: {className?: string}) {
    const toggleTheme = () => document.documentElement.classList.toggle('dark');
    return (
        <button className={props.className} onClick={toggleTheme}>
            <BiSun />
        </button>
    )
}
