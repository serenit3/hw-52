import React from "react";

interface Props {
    rank: string;
    suit: string;
}

const suitChar: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};

const MyCard: React.FC<Props> = ({ rank, suit }) => {
    const suitSymbol = suitChar[suit];

    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbol}</span>
        </span>
    );
};

export default MyCard;
