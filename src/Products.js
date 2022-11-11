import React, { Component } from 'react'

export default class Products extends Component {
    constructor(){
        super();
        this.state={
            categories:[],
            products:[],
            selectedProducts: null,
        };
    }
    componentDidMount(){
        this.getAllCategories();
    }
    getAllCategories(){
        fetch('https://fakestoreapi.com/products/categories')
            .then((res=>res.json())
            .then((json)=>{
                console.log(json);
                {
                this.setState({
                    categories:json,
                });
            });
    }

    }
  render() {
    return (
      <div>Products</div>
    )
  }
}
