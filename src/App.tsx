import './App.css';
import MyCard from "./components/MyCard/MyCard";
import { useState } from "react";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";

const App = () => {
    const [deck, setDeck] = useState(new CardDeck());
    const [cards, setCards] = useState<Card[]>([]);

    const getFiveCards = () => {
        const fiveCards = deck.getCards(5);
        setCards(fiveCards);
        setDeck(deck);
    };

    return (
        <>
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <MyCard key={index} rank={card.rank} suit={card.suit} />
                ))}
            </div>
            <button onClick={getFiveCards}>Достать пять карт</button>
            {cards.length > 0 ? <p>Карты есть</p> : <p>Карт нет</p>}
            <p>Оставшиеся карты: {deck.getAllCards()}</p>
        </>
    );
};

export default App;
