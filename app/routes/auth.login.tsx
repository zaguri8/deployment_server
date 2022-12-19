import { Link } from "@remix-run/react";


export default function Login() {

    return <div> 
        Login
        <Link to={'/auth/register'}> 
            Move to registration
        </Link>
    </div>
}