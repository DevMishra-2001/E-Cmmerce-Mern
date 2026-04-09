class APIFunctionality {
  constructor(query, queryStr) {
    ((this.query = query), //in mongoDb the query is product.create , find
      (this.queryStr = queryStr)); // in mongodb the queryStr is keyword after question mark
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword, //it is write for only that searching for Laptop , LAPTOP
            $options: "i",
          },
        }
      : {};
      console.log(keyword);
      
      this.query=this.query.find({...keyword})
      return this
  }
}

export default APIFunctionality;
