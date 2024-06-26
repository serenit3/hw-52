import Card from './Card';

export default class CardDeck {
    cards: Card[];

    constructor() {
        this.cards = [];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                const suit = suits[i];
                const rank = ranks[j];
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const [card] = this.cards.splice(randomIndex, 1);
        return card;
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            if (this.cards.length === 0) break;
            const card = this.getCard();
            cards.push(card);
        }
        return cards;
    }

    getAllCards(): number {
        return this.cards.length;
    }
}
