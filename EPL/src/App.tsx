
import React from "react";
import "./App.css";

import Club from "./components/Club";
import { clubs } from "./components/ClubData";
import type { ClubData } from "./components/ClubData";

type AppState = {
    selectedClub: ClubData | null;
}

export default class App extends React.Component<{}, AppState> {

    state: AppState = {
        selectedClub: null
    };

    selectClub = (id: number) => {
        const club = clubs.find(club => club.id === id);

        console.log("Selected club:", club);

        this.setState({
            selectedClub: club ?? null
        });
    };

    render() {
        const selectedClub = this.state.selectedClub;

        return (
            <div className="app">

                <h1>Premier League</h1>
                <h2>Big Six Clubs</h2>

                <div className="clubs-palette">
                    {clubs.map(club => (
                        <Club
                            key={club.id}
                            club={club}
                            selectClub={this.selectClub}
                        />
                    ))}
                </div>

                {selectedClub && (
                    <>
                        <div className="club-info">
                            <h2>{selectedClub.name}</h2>
                            <p>Country: {selectedClub.country}</p>
                            <p>City: {selectedClub.city}</p>
                            <p>Founded: {selectedClub.year}</p>
                        </div>

                        <div className="club-trophies">
                            <h2>Trophies</h2>

                            <div className="trophies-list">
                                {selectedClub.trophies.map(trophy => (
                                    <div className="trophy" key={trophy.id}>
                                        <img src={trophy.image} alt={trophy.name} />
                                        <h3>{trophy.name}</h3>
                                        <p>{trophy.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

            </div>
        );
    }
}
