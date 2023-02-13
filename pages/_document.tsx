import Document, {Html, Head, Main, NextScript} from 'next/document';


class LaunchpadDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="text-dark dark:text-white dark:bg-midnight">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default LaunchpadDocument;
