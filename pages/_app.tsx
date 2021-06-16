import type {AppProps} from 'next/app'
import Script from 'next/script'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Script strategy="afterInteractive" src="http://localhost:3030/oc-client/client.js"/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
