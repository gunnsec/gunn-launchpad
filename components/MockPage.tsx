export default function MockPage(props: {right?: boolean}) {
    return (
        <div className={'hidden sm:block bg-white dark:bg-midnight rounded-lg shadow-lg w-72 absolute inset-y-0 my-auto h-max ' + (props.right ? 'right-0' : 'left-0')}>
            <div className="flex gap-2 p-2 border-b border-gray-100/20">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-lime-500" />
            </div>
            <div className="flex flex-col gap-4 p-3">
                <div className="h-20 bg-gray-300/40 dark:bg-gray-300/10 rounded-lg animate-pulse mb-1" />
                <div className="flex flex-col gap-2">
                    <FillerText />
                    <FillerText width={60} />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                    <FillerText />
                    <FillerText width={60} />
                </div>
            </div>
        </div>
    )
}

function FillerText(props: {width?: number}) {
    const {width = 100} = props;

    return (
        <span
            className="block h-4 bg-gray-300/40 dark:bg-gray-300/10 rounded-full animate-pulse"
            style={{width: `${width}%`}}
        />
    )
}
