export const groupBy = (array, groupByProperty) => {
    return (array.reduce(function(groups, item) {
      const val = item[groupByProperty];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {}))
  };

  export const categories = [
    { name: "Currently Reading", value: "currentlyReading" },
    { name: "Read", value: "read" },
    { name: "Want to Read", value: "wantToRead" }
  ];