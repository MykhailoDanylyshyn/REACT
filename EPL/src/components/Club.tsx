import React from "react";
import type { ClubData } from "./ClubData";

export type Trophy = {
    id: number;
    name: string;
    quantity: number;
    image: string;
}

type ClubProps = {
    club: ClubData;
    selectClub: (id: number) => void;
}

export default class Club extends React.Component<ClubProps> {

    onClubSelected = () => {
        this.props.selectClub(this.props.club.id);
    }

    render() {
        const club = this.props.club;

        return (
            <div className="club" onClick={this.onClubSelected}>
                <img src={club.image} alt={club.name} />
                <h3>{club.name}</h3>
            </div>
        );
    }
}