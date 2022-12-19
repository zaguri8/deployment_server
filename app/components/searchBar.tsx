

// create a remix loader to use the api  https://randomuser.me/api/?results=10
// to fetch people and show them in a list
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
interface Character {
    name: string;
    email: string;
    picture: {
        thumbnail: string;
    }
}

export default function Searchbar() {

    const [data, setData] = useState<Character[]>([])

    useEffect(() => {
        (async () => await fetch("https://randomuser.me/api/?results=10")
            .then(to => to.json())
            .then(d => d.results)
            .then(setData))()
    }, [])


    return <div className="searchbar__container">
        <div className="searchbar">
            <div className="searchbar__input">
                <input type="text" placeholder="Search" />
            </div>

            <div className="searchbar__button">
                <button type="submit">
                    <span className="material-icons">
                        search
                    </span>
                </button>
            </div>
        </div>
        <div className="searchbar__results">
            {data && data.map((character) => (
                <div className="card" key={character.email}>
                    <img src={character.picture.thumbnail} alt={character.name} />
                    <p className="card__title">{Object.values(character.name).join(" ")}</p>
                    <p>{character.email}</p>
                </div>))}
        </div>
    </div>
}