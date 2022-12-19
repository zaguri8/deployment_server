import { Link } from "@remix-run/react";

export default function Login() {

    return <div> 
        Register
        <Link to={'/auth/login'}>
            Back to login
        </Link>
    </div>
}