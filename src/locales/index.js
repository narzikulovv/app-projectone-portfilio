import {LENLUAGE} from "../tools/constans";
import {uz} from "./UZ"
import {ru} from "./RU"
import {en} from "./EN"


export const getLenguage = () => {
    return localStorage.getItem(LENLUAGE)
};

export const getText = (word) => {
    return getLenguage() === "uz" ?
        uz[word] :
        getLenguage() === "ru" ?
            ru[word] :
            en[word]
};