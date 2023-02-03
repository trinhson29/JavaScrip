

const oneWord = function (str) {
    return str.replace (/ /g, '').tolowerCase();
};

const upperFirsword = function (str){
    const [first, ...others] = str.split(''); 
    return [first.toUpperCase(), ...others].join('');
};

const transformer = function (str, fn){
    console.log
}
