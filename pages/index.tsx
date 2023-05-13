import Head from 'next/head';
import Section from '../components/Section';
import { BsChevronCompactDown } from 'react-icons/bs';
import { ReactNode } from 'react';
import { events, fundraising, publicity } from '../components/Resource';


export default function Home() {
    return (
        <main>
            <Head>
                <title>Gunn Launchpad</title>
                <meta name="description" content="An SEC initiative to launch events, apps and initiatives into reality." />
            </Head>

            <section className="text-center h-screen relative flex after:absolute after:inset-0 after:bg-[url('/launch_light.webp')] after:dark:bg-[url('/launch_dark.webp')] after:bg-cover after:bg-center after:bg-fixed after:opacity-40 after:-z-10 mt-[-11rem]">
                <div className="m-auto px-4">
                    <h1 className="text-5xl sm:text-7xl font-bold mb-6">Gunn Launchpad</h1>
                    <p>
                        Launch your ideas, events, or apps into reality with the help of Gunn SEC.
                    </p>
                </div>
                <a className="text-3xl absolute bottom-0 w-full pb-16" href="#benefits">
                    <BsChevronCompactDown className="m-auto animate-bounce" />
                </a>
            </section>

            <Section id="benefits">
                <Banner num={1} name="Planning Support" description="Run your idea by SEC to get feedback and help with logistics.">
                    COMING SOON LOL!
                </Banner>
                <Banner num={2} name="Fundraising & Materials" description="Get what you need to make your idea a reality.">
                    {[fundraising.ptsa, fundraising.stfparking,
                    events.facilities, events.sound]}
                </Banner>
                <Banner num={3} name="Publicize" description="Get word out there!">
                    {[publicity.publicity, publicity.poster_supplies, publicity.schoology]}
                </Banner>
                <Banner num={4} name="To the moon!" description="See your dream lift off!">
                    examples of this working here.
                </Banner>
            </Section>

            {/*
            <Section name="Motivation" id="motivation">
                <p>___.</p>
            </Section>
            */}

            {/* ... */}
        </main>
    )
}


function Banner(props: { num: number, name: string, description: string, children: ReactNode }) {
    return (
        <div className="relative flex flex-col gap-3 py-8 pl-16 sm:pl-20">
            <h1 className="absolute left-0 flex items-center justify-center w-10 h-10 bg-grapefruit rounded-full text-3xl font-black text-gray-100 dark:text-dark">{props.num}</h1>
            <h3 className="text-3xl font-bold">{props.name}</h3>
            <p>{props.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                {props.children}
            </div>
        </div>
    )
}