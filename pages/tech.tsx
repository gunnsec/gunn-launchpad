import {ReactNode} from 'react';
import Head from 'next/head';
import MockPage from '../components/MockPage';
import Section from '../components/Section';
import Benefit from '../components/Benefit';
import {publicity} from '../components/Resource';
import Resources from '../components/Resources';


export default function Tech() {
    return (
        <main>
            <Head>
                <title>Tech Initiative | Gunn Launchpad</title>
                <meta name="description" content="A proposed collaboration between SEC and student makers." />
            </Head>

            {/* TODO: static mb-28 is a bit hacky with changing mock-page height based on text wrapping */}
            <section className="relative flex flex-col items-center z-10 px-4 mb-28 sm:mb-0">
                <h1 className="text-7xl font-bold mb-6 text-center">Tech Initiative</h1>
                {/*
                <button className="font-medium py-2 px-4 rounded bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 shadow-md shadow-red-700 text-white">
                    Register now
                </button>
                */}
            </section>

            <div className="relative mx-auto max-w-[90%] xl:container">
                <div className="hidden sm:block">
                    <img src="/ide-dark.png" alt="IDE" className="hidden dark:block w-full opacity-60 rounded-t-lg sm:h-[16rem] md:h-[20rem] lg:h-[24rem] object-cover object-top" />
                    <img src="/ide-light.png" alt="IDE" className="dark:hidden block w-full opacity-60 rounded-t-lg sm:h-[16rem] md:h-[20rem] lg:h-[24rem] object-cover object-top" />
                </div>

                <div className="sm:container lg:max-w-[58rem] absolute z-20 -bottom-48 sm:-bottom-32 inset-x-0 mx-auto">
                    <MockPage />

                    <div className="relative bg-white dark:bg-midnight rounded-lg shadow-lg w-96 max-w-full z-10 mx-auto">
                        <div className="flex gap-2 p-2 border-b border-gray-100/20">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-lime-500" />
                        </div>
                        <div className="flex flex-col gap-3 py-3 px-4 font-light">
                            <div className="h-20 bg-gray-300/40 dark:bg-gray-300/10 rounded-lg animate-pulse" />
                            <p>
                                Tech Initiative is a proposed collaboration between SEC and student programmers, creators,
                                and innovators.
                            </p>
                            <p>
                                Through this partnership, we hope to foster student creativity and encourage student-made
                                projects that benefit everyone.
                            </p>
                            {/* <p className="mb-2">See our currently chartered projects <a>here</a>.</p> */}
                        </div>
                    </div>

                    <MockPage right />
                </div>
            </div>

            <section className="pt-64 sm:pt-48 pb-16 bg-gray-100 dark:bg-dark drop-shadow-[0_-60px_35px_rgb(0_0_0_/_0.15)] dark:drop-shadow-[0_-60px_35px_rgb(0_0_0_/_0.3)] mb-8">
                <div className="container flex flex-col gap-14">
                    <ol className="flex flex-col gap-10">
                        <Benefit name="Publicity" index={1}>
                            Seeking new users or general publicity? SEC can help promote your app or idea on Instagram,
                            Schoology, and more.
                        </Benefit>
                        {/*
                        <Benefit name="Funding" index={2}>
                            Maintenance, hosting fees, and domain name costs can be too much for some developers. SEC
                            can offer grants to cover those costs so financial concerns won't stand in the way of your
                            dream.
                        </Benefit>
                        */}
                        <Benefit name="Domain" index={2}>
                            For web projects, SEC can provide a free subdomain on <code>gunnhigh.school</code> or{' '}
                            <code>gunn.one</code> to host your project.
                        </Benefit>
                    </ol>

                    <Resources>
                        {Object.values(publicity)}
                    </Resources>
                </div>
            </section>

            <Section name="Eligibility Criteria" id="eligibility-criteria">
                <p className="mb-8">
                    Before a tech project can be chartered (and on top of the conditions listed on the home page), it must
                    meet the following criteria for eligibility:
                </p>

                <ol className="flex flex-col gap-6 pl-10 list-outside list-decimal marker:font-bold marker:text-xl marker:text-grapefruit">
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
                        does not enforce utilitarianism: games and other fun projects are totally allowed! Rather, this
                        rule disallows projects specifically for a given club, team, or group; chartered projects must
                        be usable by the whole student population.
                    </Requirement>
                </ol>
            </Section>

            <Section name="Chartering" id="chartering">
                The official charter application is currently a work-in-progress to be implemented by next year's Student
                Executive Council. Email <a href="mailto:kevinyu567@gmail.com" className="text-grapefruit hover:underline">kevinyu567@gmail.com</a>{' '}
                if you're interested in pre-registering your project as a pilot for the program, and check back next year
                for more details!
            </Section>

            {/*
            <Section name="Featured projects" id="featured-projects">
                ___.
            </Section>
            */}
        </main>
    )
}

function Requirement(props: {children: ReactNode, name: string}) {
    return (
        <li>
            <div className="flex flex-col gap-1.5 pl-6">
                <h3 className="text-lg font-bold">{props.name}</h3>
                <p className="text-sm">{props.children}</p>
            </div>
        </li>
    )
}
