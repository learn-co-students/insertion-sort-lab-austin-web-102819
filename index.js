function findMinAndRemove(array){
    let min;
    let ind;
    for(let i=0; i<array.length; i++){
        if(array[i]<min || min === undefined){
            min = array[i]
            ind = i
        }
    }
    array.splice(ind, 1)
    return min
}

function insertionSort(array){
    let sorted = []
    while(array.length != 0){
        let place = findMinAndRemove(array)
        sorted.push(place)
    }
    return sorted
}
