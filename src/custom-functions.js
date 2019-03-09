export function sortBy (collection, sortField, order) {

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