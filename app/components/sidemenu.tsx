import Search from "./search";


export default function Sidemenu() {
    return <ul className="hidden lg:flex text-black lg:flex-col lg:items-center w-full gap-4">
        <Search/>
        <br/>
        <li className="text-xl">קורסים</li>
        <li className="text-xl">שיעורים פרטיים</li>
        <li className="text-xl">מצגות וחומר כתוב</li>
        <li className="text-xl">צור קשר</li>
    </ul>
}