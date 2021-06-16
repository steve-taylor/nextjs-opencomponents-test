import {useState} from 'react'

export default function OcTest(): JSX.Element {
    const [rendered, setRendered] = useState(true)

    return (
        <main>
            <h1>oc-component client-side rendering test</h1>
            {rendered && (
                <div>
                    <oc-component href="//localhost:3030/react/1.0.0/"/>
                </div>
            )}
            <button onClick={() => setRendered(rendered => !rendered)}>
                {rendered ? 'Rendered (click to stop rendering)' : 'Not rendered (click to render)'}
            </button>
        </main>
    )
}
