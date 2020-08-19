/* eslint-disable react-hooks/rules-of-hooks */
const saveOnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
        const storage = localStorage.getItem(key)
        if(storage){
            return JSON.parse(storage)
        }else {
            return value
        }
}

export default saveOnLocalStorage;