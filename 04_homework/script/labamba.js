
function labamba(array){
    let min = Infinity;
    let max = Infinity;
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) !== "number"){
            continue;
        }
        if (array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }
    console.log(`${max}, ${min}, ${max + min}`)
    return min + max;
    

}