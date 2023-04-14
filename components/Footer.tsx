import {BsGithub} from 'react-icons/bs';


export default function Footer() {
    return (
        <footer className="mt-24 py-16 border-t border-tertiary dark:border-tertiary-dark">
            <div className="container text-secondary dark:text-secondary-dark text-sm flex justify-between">
                Copyright © 2023. All rights reserved.
                <a href="https://github.com/gunnsec/gunn-launchpad" target="_blank" rel="noopener noreferrer" className="text-base">
                    <BsGithub />
                </a>
            </div>
        </footer>
    )
}
