
import arsenal from "../assets/clubs/arsenal-logo-footylogos.png";
import chelsea from "../assets/clubs/chelsea-logo-footylogos.png";
import liverpool from "../assets/clubs/liverpool-fc-logo-footylogos.png";
import manCity from "../assets/clubs/manchester-city-logo-footylogos.png";
import manUnited from "../assets/clubs/manchester-united-logo-footylogos.png";
import tottenham from "../assets/clubs/tottenham-hotspur-logo-footylogos.png";

import premierLeague from "../assets/trophies/premier-league.png";
import faCup from "../assets/trophies/fa-cup.png";
import eflCup from "../assets/trophies/efl-cup.png";
import championsLeague from "../assets/trophies/champions-league.png";
import europaLeague from "../assets/trophies/europa-league.png";

export type Trophy = {
    id: number;
    name: string;
    quantity: number;
    image: string;
}

export type ClubData = {
    id: number;
    name: string;
    image: string;
    year: number;
    city: string;
    country: string;
    trophies: Trophy[];
}

export const clubs: ClubData[] = [
    {
        id: 1,
        name: "Arsenal",
        image: arsenal,
        year: 1886,
        city: "London",
        country: "England",
        trophies: [
            { id: 1, name: "Premier League", quantity: 14, image: premierLeague },
            { id: 2, name: "FA Cup", quantity: 14, image: faCup },
            { id: 3, name: "EFL Cup", quantity: 2, image: eflCup },
            { id: 4, name: "Champions League", quantity: 0, image: championsLeague },
            { id: 5, name: "Europa League", quantity: 0, image: europaLeague }
        ]
    },
    {
        id: 2,
        name: "Chelsea",
        image: chelsea,
        year: 1905,
        city: "London",
        country: "England",
        trophies: [
            { id: 1, name: "Premier League", quantity: 6, image: premierLeague },
            { id: 2, name: "FA Cup", quantity: 8, image: faCup },
            { id: 3, name: "EFL Cup", quantity: 5, image: eflCup },
            { id: 4, name: "Champions League", quantity: 2, image: championsLeague },
            { id: 5, name: "Europa League", quantity: 2, image: europaLeague }
        ]
    },
    {
        id: 3,
        name: "Liverpool",
        image: liverpool,
        year: 1892,
        city: "Liverpool",
        country: "England",
        trophies: [
            { id: 1, name: "Premier League", quantity: 20, image: premierLeague },
            { id: 2, name: "FA Cup", quantity: 8, image: faCup },
            { id: 3, name: "EFL Cup", quantity: 10, image: eflCup },
            { id: 4, name: "Champions League", quantity: 6, image: championsLeague },
            { id: 5, name: "Europa League", quantity: 3, image: europaLeague }
        ]
    },
    {
        id: 4,
        name: "Manchester City",
        image: manCity,
        year: 1880,
        city: "Manchester",
        country: "England",
        trophies: [
            { id: 1, name: "Premier League", quantity: 10, image: premierLeague },
            { id: 2, name: "FA Cup", quantity: 8, image: faCup },
            { id: 3, name: "EFL Cup", quantity: 9, image: eflCup },
            { id: 4, name: "Champions League", quantity: 1, image: championsLeague },
            { id: 5, name: "Europa League", quantity: 0, image: europaLeague }
        ]
    },
    {
        id: 5,
        name: "Manchester United",
        image: manUnited,
        year: 1878,
        city: "Manchester",
        country: "England",
        trophies: [
            { id: 1, name: "Premier League", quantity: 20, image: premierLeague },
            { id: 2, name: "FA Cup", quantity: 13, image: faCup },
            { id: 3, name: "EFL Cup", quantity: 6, image: eflCup },
            { id: 4, name: "Champions League", quantity: 3, image: championsLeague },
            { id: 5, name: "Europa League", quantity: 1, image: europaLeague }
        ]
    },
    {
        id: 6,
        name: "Tottenham Hotspur",
        image: tottenham,
        year: 1882,
        city: "London",
        country: "England",
        trophies: [
            { id: 1, name: "Premier League", quantity: 2, image: premierLeague },
            { id: 2, name: "FA Cup", quantity: 8, image: faCup },
            { id: 3, name: "EFL Cup", quantity: 4, image: eflCup },
            { id: 4, name: "Champions League", quantity: 0, image: championsLeague },
            { id: 5, name: "Europa League", quantity: 3, image: europaLeague }
        ]
    }
];
