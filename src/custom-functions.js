export const sortBy = (collection, sortField, order) => {

    const sortTypeNum = order === 'asc'? 1 : -1;
  
    return collection.sort((a, b) => {
      if (a[sortField] > b[sortField]) {
      return sortTypeNum;
    }
      if(a[sortField] < b[sortField]) {
        return -sortTypeNum;
      }
      return 0;
    })
  }

  export const chunk = (array, size) => {
    if (array.length === 0 || size < 1) {
      return []
    }
    let newArr = [];
  
    for(let i = 0; i <= array.length; i += size) {
      newArr.push(array.slice(i, size + i))
    }
    return newArr;
  }