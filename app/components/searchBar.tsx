

// create a remix loader to use the api  https://randomuser.me/api/?results=10
// to fetch people and show them in a list
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Searchbar() {

    
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
           
        </div>
    </div>
}