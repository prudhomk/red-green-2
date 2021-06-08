import fetch from 'node-fetch';


export default ({name}) => {
    return name;
};

export function copyPush(arr, x) {
    const copyArr = [...arr];
    copyArr.push(x);
    return [arr, copyArr];
}

export function capitalizeAndFilter(arr) {
    const fixedArr = [];
    const regex = /[Ff]/g;
    const filteredArr = arr.filter(n => !n.match(regex));
    fixedArr.push(filteredArr.map(n => n.toUpperCase()));
    return fixedArr[0];
}



export function fetchQuotes() {
    
    return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => ({
        name: data[0].character,
        text: data[0].quote,
        image: data[0].image
     }));
    

}