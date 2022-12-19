import { ActionArgs, json } from "@remix-run/node";
import { Link, Links, useFetcher, useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "react-router";
import { Fragment } from "react";
export async function loader({ request }: LoaderFunctionArgs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(json({ name: "John" }))
        }, 2500)
    })
}

export async function action({ request, params }: ActionArgs) {
    const data = await request.formData()
    console.log(data)
    return json({ message: "You may return back home" })
}

export default function Login() {
    const data = useLoaderData<{ name: string }>()
    const fetcher = useFetcher()

    return <div>
        <h1>Auth section</h1>
        <div className="content">
            <p>Hello,  {data.name} please enter your email address to continue</p>
            <fetcher.Form method="post">
                <input type="email" name="email" />
                <button type="submit">Submit</button>
            </fetcher.Form>
            {fetcher.data ? <Fragment>
                <p>{fetcher.data.message}</p>
                <Link to={'/auth/login'}>Continue to Login</Link>
            </Fragment> : fetcher.state === 'idle' ? null : fetcher.state === 'loading' ? <p>Loading...</p> : null}
        </div>
    </div>
}