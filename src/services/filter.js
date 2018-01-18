const filter = (arr, filter) =>{
  return arr.filter((item) => {
    let validator = [];
    for(let param in filter){
      validator.push(item[param].toString().toLowerCase().includes(filter[param].toString().toLowerCase()));
    }
    return !validator.includes(false);
  });
}

export default filter;