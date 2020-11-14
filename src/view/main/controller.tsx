import * as React from 'react';
import moment from 'moment';
import 'moment/locale/id'
import { address, data } from 'src/utils/dummyData';

interface InitialState {
    today: string
    modal: boolean
    modalCart: boolean
    buttonLeft: boolean
    buttonRight: boolean
    setDate: string
    searchLocation: string
    resultFood: any
    resultAddress: any
    items: any,
    price: any,
    addressDestination: string
    setModal: Function
    setButton: Function
    addToCart: Function
    filterFood: Function
    pushToCart: Function
    setLocation: Function
    setDestiny: Function
}

const initialState = {
    today: new Date().toString(),
    modal: false,
    modalCart: false,
    buttonLeft: false,
    buttonRight: true,
    setDate: "",
    searchLocation: "",
    addressDestination: "",
    resultFood: [],
    resultAddress: [],
    items: [],
    price: [],
    setModal: () => { },
    setButton: () => { },
    addToCart: () => { },
    filterFood: () => { },
    pushToCart: () => { },
    setLocation: () => { },
    setDestiny: () => { }

}

export const MainContext = React.createContext<InitialState>(initialState)
export const { Provider: MainProvider } = MainContext

export const MainController = ({ children }: any) => {

    const [state, setState] = React.useState<InitialState>(initialState)
    const [items, setItems] = React.useState([])
    const [price, setPrice] = React.useState([])

    const pushToCart = (e: any) => {
        const name = e.items
        const price = e.price
        setItems((v: any) => v.concat({ name: name }))
        setPrice((v: any) => v.concat(price))
        if (items.length >= 0) {
            setState((prevState) => ({
                ...prevState,
                modalCart: true
            }))
        }
    }

    const setLocation = (val: any) => {
        const value = val.target.value
        const filterAddress = address.filter(function (v) {
            if (value.length >= 3) {
                return (
                    v.address.toLocaleLowerCase().includes(value) ||
                    v.subAddress.toLocaleLowerCase().includes(value) ||
                    v.address.toLocaleUpperCase().includes(value) ||
                    v.subAddress.toLocaleUpperCase().includes(value) ||
                    v.address.includes(value) ||
                    v.subAddress.includes(value)
                )
            } else if (value.length === 0) {
                return v
            }
            return false
        })
        setState((prevState) => ({
            ...prevState,
            resultAddress: filterAddress
        }))
        setState((prevState) => ({
            ...prevState,
            searchLocation: value,
        }))
    }


    const setModal = () => {
        setState((prevState) => ({
            ...prevState,
            modal: !state.modal
        }))
    }

    const setButton = () => {
        setState((prevState) => ({
            ...prevState,
            buttonLeft: !state.buttonLeft,
            buttonRight: !state.buttonRight
        }))
    }

    const addToCart = () => {
        setState((prevState) => ({
            ...prevState,
            modalCart: !state.modalCart
        }))
    }

    const filterFood = (val: any) => {
        const filteringFood = data.filter((food) => food.date === moment(val).format("dddd. DD MMMM YYYY"))
        setState((prevState) => ({
            ...prevState,
            setDate: moment(val).format("dddd. DD MMMM YYYY"),
        }))
        setState((prevState) => ({
            ...prevState,
            resultFood: filteringFood
        }))

    }

    const setDestiny = (val: any) => {
        setState((prevState) => ({
            ...prevState,
            addressDestination: val,
            modal: !state.modal
        }))
    }

    return (
        <MainProvider value={{
            ...state,
            setModal: setModal,
            setButton: setButton,
            addToCart: addToCart,
            filterFood: filterFood,
            pushToCart: pushToCart,
            items,
            price,
            setLocation: setLocation,
            setDestiny: setDestiny
        }}>
            {children}
        </MainProvider>
    )
}