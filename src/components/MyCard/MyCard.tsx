import React from "react";

interface Props {
    rank: string;
    suit: string;
}

const MyCard: React.FC<Props> = ({ rank, suit }) => {
    return (
        <>
            <span className={`card rank-${rank.toLowerCase()} suit-${suit.toLowerCase()}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{suit}</span>
            </span>
        </>
    );
};

export default MyCard;
