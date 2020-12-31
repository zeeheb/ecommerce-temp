import camiseta1 from "./imgs/camisetas/camiseta1.svg";
import camiseta2 from "./imgs/camisetas/camiseta2.svg";
import coming from "./styles/pages/coming3.gif"
import settings from './settings'

export default {
    comingProduct: [
        {
            id: 999,
            name: 'New Merch',
            price: "$$.$$",
            sizes: ['X' ,'XX', 'XXX'],
            url: coming,
            description: 'lorem ipsum'  
        }
    ],
    products:
        [
            {
                id: 1,
                name: 'CAMISETA SCUMBAGS a',
                price: "44.00",
                sizes: ['PP', 'P', 'G', 'GG'],
                url: camiseta1,
                description: 'lorem ipsum ducarai lorem ipsum ducarailorem ipsum ducarailorem ipsum ducarailorem ipsum ducarailorem ipsum ducarai'
            },
            {
                id: 2,
                name: 'Camiseta b',
                price: "66.00",
                sizes: ['PP', 'P', 'M', 'G', 'GG'],
                url: camiseta2,
                description: 'lorem ipsum ducarai lorem ipsum ducarailorem ipsusum ducarailorem ipsum ducarailorem ipsum ducarai'
            },
            {
                id: 3,
                name: 'Camiseta c',
                price: "77.00",
                sizes: ['PP', 'GG'],
                url: camiseta1,
                description: 'lorem ipsum ducarai loreilorem ipsum ducarailorem ipsum ducarailorem ipsum ducarailorem ipsum ducarai'
            },
            {
                id: 4,
                name: 'Camiseta c',
                price: "8.00",
                sizes: ['PP', 'P', 'M', 'G', 'GG'],
                url: camiseta2,
                description: 'lorem ipsum ducarai loremucarailorem ipsu ducarailorducarai'
            }
        ]
}