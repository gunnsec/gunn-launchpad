import {ReactNode} from 'react';
import Head from 'next/head';
import MockPage from '../components/MockPage';
import Section from '../components/Section';
import Header from '../components/Header';


export default function Tech() {
    return (
        <div>
            <Head>
                <title>Tech Initiative | Gunn Launchpad</title>
                <meta name="description" content="___." />
            </Head>

            <Header />

            <section className="relative flex flex-col items-center -mb-5 z-10">
                <h1 className="text-7xl font-bold mb-6 text-center">Tech Initiative 🚀{/* 🚀*/}</h1>
                <button className="font-medium py-2 px-4 rounded bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 shadow-md shadow-red-700 text-white">
                    Register now
                </button>
            </section>

            <div className="relative mx-auto max-w-[90%] xl:container">
                <img src="/ide.png" alt="IDE" className="w-full opacity-60 rounded-t-lg sm:h-[16rem] md:h-[20rem] lg:h-[24rem] object-cover object-top" />

                <div className="container lg:max-w-[58rem] absolute z-20 -bottom-32 inset-x-0 mx-auto">
                    <MockPage />

                    <div className="relative bg-white dark:bg-midnight rounded-lg shadow-lg w-96 z-10 mx-auto">
                        <div className="flex gap-2 p-2 border-b border-gray-100/20">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-lime-500" />
                        </div>
                        <div className="flex flex-col gap-3 py-3 px-4 font-light">
                            <div className="h-20 bg-gray-300/40 dark:bg-gray-300/10 rounded-lg animate-pulse" />
                            <p>
                                Tech Initiative is a collaboration between SEC and student programmers, creators, and
                                innovators.
                            </p>
                            <p>
                                Through this partnership, ___.
                            </p>
                            <p className="mb-2">See our currently chartered projects <a>here</a>.</p>
                        </div>
                    </div>

                    <MockPage right />
                </div>
            </div>

            <section className="pt-48 pb-16 bg-gray-100 dark:bg-dark">
                <div className="container">
                    <ol className="flex flex-col gap-12 pl-20 list-outside list-decimal marker:font-bold marker:text-4xl marker:text-grapefruit">
                        <Benefit name="Publicity">
                            Seeking new users and publicity? SEC can help promote your app or idea on ___, ___.
                        </Benefit>
                        <Benefit name="Funding">
                            Maintenance and hosting fees and domain name costs can be too much for some developers. SEC
                            can help cover those costs so ___.
                        </Benefit>
                        <Benefit name="___">
                            ___.
                        </Benefit>
                    </ol>
                </div>
            </section>

            <Section>
                <div className="flex gap-8">
                    <div className="w-52 flex-none">
                        <h2 className="text-4xl font-bold mb-5">Eligibility Criteria</h2>
                        <p>Before a project can be chartered, it must meet the following criteria for eligibility.</p>
                    </div>
                    <ol className="flex flex-col gap-10 pl-16 list-outside list-decimal marker:font-bold marker:text-2xl marker:text-grapefruit">
                        <Requirement name="Open source">
                            All chartered projects must have their source code available online for transparency and
                            accountability. We recommend using <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-grapefruit hover:underline">GitHub</a> to
                            host your code, but any online hosting / version control service works.
                        </Requirement>
                        <Requirement name="Gunn-made">
                            All chartered projects must be made primarily by Gunn students. {/* vetting? */}
                        </Requirement>
                        <Requirement name="General use">
                            All chartered projects must be applicable to the student body at large. To clarify, this rule
                            does not enforce utilitarianism or discourage fun projects: games, ___, and ___ are totally
                            allowed! Rather, this rule disallows projects specifically for a given club, team, or group;
                            chartered projects must be usable by the whole school.
                        </Requirement>
                    </ol>
                </div>
            </Section>

            <Section secondary>
                <h2 className="text-4xl font-bold mb-5">Chartering</h2>
                ___.
            </Section>

            <Section>
                ___.
            </Section>
        </div>
    )
}

function Benefit(props: {children: ReactNode, name: string}) {
    return (
        <li>
            <div className="flex flex-col gap-3 pl-8">
                <h3 className="text-4xl font-bold">{props.name}</h3>
                <p>{props.children}</p>
            </div>
        </li>
    )
}

function Requirement(props: {children: ReactNode, name: string}) {
    return (
        <li>
            <div className="flex flex-col gap-3 pl-8">
                <h3 className="text-2xl font-bold">{props.name}</h3>
                <p>{props.children}</p>
            </div>
        </li>
    )
}
