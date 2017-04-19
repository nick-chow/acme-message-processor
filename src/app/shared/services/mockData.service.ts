import { Injectable } from '@angular/core';
import { Gift, Message, MessageType } from '../../index';

@Injectable()
export class MockDataService {
    constructor() { }

    public getMockGifts(): Array<Gift> {
        const MOCK_GIFT = [
            'Lego',
            'Monopoly',
            'Dungeons and Dragons',
            'Wii',
            'Nintendo',
            'Scrabble',
            'Transformers',
            'Connect Four',
            'Rubix Cube',
            'Mickey Mouse',
        ];
        return MOCK_GIFT.map((v, i) => (
            {
                id: i,
                name: v
            }
        ));
    }

    public getMockMessages(): Array<Message>  {
        let randomNo = Math.floor(Math.random() * 5) + 5;
        let messages: Array<Message> = [];
        for (let i = 1; i <= randomNo; i++) {
            messages.push({
            id: i,
            type: ((Math.floor(Math.random() * 2) + 10)  % 2 === 0) ? MessageType.Wish : MessageType.Congratulation,
            });
        }
        return messages;
    }

    public getMockNames(): Array<string> {
        return [
            'AMELIA',
            'OLIVIA',
            'EMILY',
            'AVA',
            'ISLA',
            'JESSICA',
            'POPPY',
            'ISABELLA',
            'SOPHIE',
            'MIA',
            'RUBY',
            'LILY',
            'GRACE',
            'EVIE',
            'SOPHIA',
            'ELLA',
            'SCARLETT',
            'CHLOE',
            'ISABELLE',
            'FREYA',
            'CHARLOTTE',
            'SIENNA',
            'DAISY',
            'PHOEBE',
            'MILLIE',
            'EVA',
            'ALICE',
            'LUCY',
            'FLORENCE',
            'SOFIA',
            'LAYLA',
            'LOLA',
            'HOLLY',
            'IMOGEN',
            'MOLLY',
            'MATILDA',
            'LILLY',
            'ROSIE',
            'ELIZABETH',
            'ERIN',
            'MAISIE',
            'LEXI',
            'ELLIE',
            'HANNAH',
            'EVELYN',
            'ABIGAIL',
            'ELSIE',
            'SUMMER',
            'MEGAN',
            'JASMINE',
            'OLIVER',
            'JACK',
            'HARRY',
            'JACOB',
            'CHARLIE',
            'THOMAS',
            'OSCAR',
            'WILLIAM',
            'JAMES',
            'GEORGE',
            'ALFIE',
            'JOSHUA',
            'NOAH',
            'ETHAN',
            'MUHAMMAD',
            'ARCHIE',
            'LEO',
            'HENRY',
            'JOSEPH',
            'SAMUEL',
            'RILEY',
            'DANIEL',
            'MOHAMMED',
            'ALEXANDER',
            'MAX',
            'LUCAS',
            'MASON',
            'LOGAN',
            'ISAAC',
            'BENJAMIN',
            'DYLAN',
            'JAKE',
            'EDWARD',
            'FINLEY',
            'FREDDIE',
            'HARRISON',
            'TYLER',
            'SEBASTIAN',
            'ZACHARY',
            'ADAM',
            'THEO',
            'JAYDEN',
            'ARTHUR',
            'TOBY',
            'LUKE',
            'LEWIS',
            'MATTHEW',
            'HARVEY',
            'HARLEY',
            'DAVID'
        ];
    }
}
