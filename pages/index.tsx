import Head from 'next/head'
import Link from 'next/link'
import {DetailedHTMLProps, HTMLAttributes} from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'oc-component': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { href: string }
        }
    }
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>OpenComponent Next.js POC</title>
            </Head>

            <main>
                <h1>
                    OpenComponents Next.js POC
                </h1>
                <Link href="/oc-test">
                    oc-component client-side rendering test
                </Link>
            </main>
        </div>
    )
}
