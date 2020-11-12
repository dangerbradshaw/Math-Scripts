function findFactorsOf(){
    const fraction = prompt('Add your fraction'); 
    const numbers = fraction.split(/\s*\/\s*/).map(n=> n.replace(/\D+/g,''));
    const a = numbers[0], b = numbers[1];
    const smallest_number = Math.min(...[a,b]);
    const isWholeNumber = (x,n) => ((x/n) % 1 == 0);
    const contain_arr = [];
    for(let i=1; i<=smallest_number; i++){
        let first = isWholeNumber(a,i);
        let second = isWholeNumber(b,i);
        if( first && second ) {
            contain_arr.push(i);
        }
    }
    const largest_factor = contain_arr.length > 0 ? Math.max(...contain_arr) : 1;
    alert(`${a/largest_factor}/${b/largest_factor}`);
}

findFactorsOf()
