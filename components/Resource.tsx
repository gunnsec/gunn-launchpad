import { ReactNode } from 'react';
import { RxExternalLink } from 'react-icons/rx';


export default function Resource(props: { name: string, children: ReactNode, href?: string, clubOnly?: boolean }) {
    return (
        <div className="basis-96 flex-grow relative px-5 py-3.5 rounded-lg border border-gray-400 hover:border-gray-600 dark:border-gray-500 dark:hover:border-gray-400 transition-[border] duration-200">
            {props.href && (
                <a href={props.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
            )}

            <h5 className="flex gap-1.5 items-center font-bold mb-1">
                {props.name}
                {props.href && <RxExternalLink className="pb-0.5" />}
            </h5>
            <p className="text-secondary dark:text-secondary-dark text-sm">{props.children}</p>
            {props.clubOnly && (
                <p className="text-sm pt-1 text-grapefruit">* for chartered Gunn clubs only.</p>
            )}
        </div>
    )
}

export const chartering = {
    "charter_app": 
        <Resource name="Club charter application" href="https://docs.google.com/forms/d/e/1FAIpQLSclwY3TNU4tkiHAStb9HZ-ZW83iOC-aibjyb0k-YTFNexsRIA/viewform" >
            Charter application for a Spring 2023 club. Clubs already chartered in Fall do not need to recharter.
        </Resource>,
    "advisor_list": 
        <Resource name="Club advisor availability list" href="https://drive.google.com/file/d/1dHt4OTTS_u_LSbocKiXHAIudg27hiA6-/view?usp=sharing">
            List of teachers potentially able to supervise a new club.
        </Resource>
}

export const events = {
    "event_form":
        <Resource name="Club event / fundraiser request form" href="https://docs.google.com/forms/d/e/1FAIpQLSfXaavKezsSY_i-OTcyE9mH9-XGrUYWzrYF6yo1_EgZwj5GXQ/viewform" clubOnly={true}>
            Request to host a school event or club fundraiser. Must be completed 2 weeks before the date
            of the event.
        </Resource>,
    "facilities":
        <Resource name="Facility request form" href="https://docs.google.com/forms/d/e/1FAIpQLSdPtxIMV1Ai6bnhJf6FkOm9Bq1BRWCJWLyHCwzf1qsbGnaRWQ/viewform">
            Request facility (tables, chairs, bleachers) or tech setup for an event hosted at a Gunn venue.
        </Resource>,
    "reimbursement":
        <Resource name="Reimbursement request form" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/reimbursement_request.pdf" clubOnly={true}>
            Reimburse club purchases made by individuals with funds from the club account. Print, fill out, and submit to the
            SAO no later than one month after the purchase was made.
        </Resource>,
    "purchases":
        <Resource name="Purchase request form" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/purchase_request_form.pdf" clubOnly={true}>
            Request to purchase item(s) using club funds. Club minutes where the purchase was approved need to be attached to
            the form. Print, fill out, and submit to the SAO two weeks prior to the purchase date.
        </Resource>,
    "cashbox":
        <Resource name="Cash box request form" href="https://www.gunnsec.org/uploads/1/2/3/2/123265564/cash_box_request_1.pdf" clubOnly={true}>
            Request a cash box for a club fundraiser. Print, fill out, and submit to the SAO two days prior to pick-up.
        </Resource>,
    "webstore":
        <Resource name="Titan webstore" clubOnly={true}>
            For non-physical fundraisers{/* TODO: reword */}, email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
            to request the fundraiser item be added to the Titan Webstore.
        </Resource>,
    "sound":
        <Resource name="SEC sound system">
            Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
            to request to use the SEC sound system (speakers and microphones) for an event.
        </Resource>
}

export const fundraising = {
    "ptsa": 
        <Resource name="PTSA Student Grants" href="https://gunn.paloaltopta.org/student-grants/">
            The Gunn PTSA offers grants for student projects every year. Apply for some funding!
        </Resource>,
    "stfparking":
        <Resource name="Stanford Parking" clubOnly={true}>
            Volunteer to direct traffic at PALY's parking lot during a Stanford game to earn money for your club.
        </Resource>
}

export const publicity = {
    "schoology":
        <Resource name="Schoology updates">
            Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
            to request a blurb on Schoology in the Student Activities Weekly Update.
        </Resource>,
    "publicity":
        <Resource name="Gunn Publicity Form" href="https://docs.google.com/forms/d/e/1FAIpQLSfmty9G6y5DA3dZlFAqFavDgDOXgVti_0ljvug3Z7p8kbtp3g/viewform?usp=send_form">
            Get a club event graphic and caption posted to the <code>@gunntitans</code> Instagram, Schoology, and SEC
            Updates page on Facebook.
        </Resource>,
    "poster_supplies":
        <Resource name="SAC postermaking supplies">
            Email <a href="mailto:lhall@pausd.org" className="text-grapefruit hover:underline">lhall@pausd.org</a>{' '}
            to request to use the SAC's paint markers and butcher paper for on-campus advertising. See Gunn's{' '}
            <a href="https://drive.google.com/file/d/1A0bsQgqN8bqXcI-dBvRc7BGtgcT8XFwm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-grapefruit hover:underline">poster guidelines</a>.
        </Resource>
}
