import moment from 'moment';
import 'moment/locale/id'
import image from 'src/assets/image';

export const data = [
    {
        "id": 1,
        "name": "Sweet Pancake",
        "image": image.pancake,
        "price": 15000,
        "date": moment().add(2, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 2,
        "name": "Nachos With Bachamel Sauce ",
        "image": image.nachos,
        "price": 25000,
        "date": moment().add(2, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 3,
        "name": "Spicy Meatball Aldente",
        "image": image.meatball,
        "price": 35000,
        "date": moment().add(2, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 4,
        "name": "Avocado Egg Salad With Holandaise Sauce",
        "image": image.salad,
        "price": 45000,
        "date": moment().add(2, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 5,
        "name": "Avocado Egg Salad With Holandaise Sauce",
        "image": image.salad,
        "price": 45000,
        "date": moment().add(2, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 6,
        "name": "Sweet Pancake",
        "image": image.pancake,
        "price": 15000,
        "date": moment().add(2, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 7,
        "name": "Nachos With Bachamel Sauce ",
        "image": image.nachos,
        "price": 25000,
        "date": moment().add(3, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 8,
        "name": "Spicy Meatball Aldente",
        "image": image.meatball,
        "price": 35000,
        "date": moment().add(3, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 9,
        "name": "Avocado Egg Salad With Holandaise Sauce",
        "image": image.salad,
        "price": 45000,
        "date": moment().add(3, 'days').format("dddd. DD MMMM YYYY")
    },
    {
        "id": 10,
        "name": "Avocado Egg Salad With Holandaise Sauce",
        "image": image.salad,
        "price": 45000,
        "date": moment().add(3, 'days').format("dddd. DD MMMM YYYY")
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
