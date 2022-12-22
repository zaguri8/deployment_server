import { Link } from "@remix-run/react";
import Sidemenu from "./sidemenu";

export default function Toolbar() {

    return <div className="flex justify-between bg-blue-500 w-full p-5 shadow-sm shadow-slate-200 lg:w-3/12 lg:h-screen lg:fixed lg:z-10 lg:bg-white" dir="ltr">
        <div className="flex items-center gap-5 lg:hidden">
            <div className="material-icons cursor-pointer">menu</div>
            <Link to="/">
                <label className="text-white font-bold text-lg lg:text-black cursor-pointer">Cossci</label>
            </Link>
        </div>
        <Sidemenu />
    </div>

}