import moment from 'moment';
import 'moment/locale/id'

export const data = [
    {
        "id": 1,
        "name": "Sego Goreng",
        "image": "https://picsum.photos/200/300",
        "price": 15000,
        "date": moment().format("dddd. DD MMMM YYYY")
    },
    {
        "id": 2,
        "name": "Sego Bandeng",
        "image": "https://picsum.photos/200/300",
        "price": 25000,
        "date": moment().format("dddd. DD MMMM YYYY")
    },
    {
        "id": 3,
        "name": "Sego Tiwul",
        "image": "https://picsum.photos/200/300",
        "price": 35000,
        "date": moment().format("dddd. DD MMMM YYYY")
    },
    {
        "id": 4,
        "name": "Sego Kucing",
        "image": "https://picsum.photos/200/300",
        "price": 45000,
        "date": moment().format("dddd. DD MMMM YYYY")
    },
]

export const address = [
    {
        "id": 1,
        "address": "Kulina",
        "subAddress": "Jalan Tulodong Atas 28, Senayan, Kebayoran"
    },
    {
        "id": 2,
        "address": "Kaliurang",
        "subAddress": "Jalan Kaliurang Atas"
    },
    {
        "id": 3,
        "address": "Gondomanan",
        "subAddress": "Jalan Gondomanan"
    },
    {
        "id": 4,
        "address": "Sayagan",
        "subAddress": "Jalan Sayegan"
    },
    {
        "id": 5,
        "address": "Kauman",
        "subAddress": "Jalan Haji Sarmili"
    }
]
