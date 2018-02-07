import * as React from 'react';

export default class ProductsTable extends React.Component {

    /*constructor(props) {
        
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    }*/

    sortByPriceAsc() {
        /*this.setState(prevState => {
          this.state.products.sort((a, b) => (a.price - b.price))
        });*/

        console.log("sortByPriceAsc");
        return this.props.products.map((product) => {
            console.log(product.sort((a, b) => (a.price - b.price)));
        });
    }

    sortByPriceDesc() {
        /*this.setState(prevState => {
          this.state.products.sort((a, b) => (b.price - a.price))
    });*/
    console.log("sortByPriceDesc");
    }

    utilities()   {
        console.log("update price");
        return this.props.products.map((product) => {
            var prodPrice = product.price.toFixed(2)/100;
            console.log(prodPrice);
            return prodPrice;
        });
    }
    renderProducts() {
        return this.props.products.map((product) => {
            return <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{this.utilities()}</td>
                <td>{product.updated}</td>
            </tr>
        });
    }

    render() {
        console.log("render")
        return <div className="container">
            <h1>Products</h1>
            <button onClick={this.sortByPriceAsc}>ASC</button>
            <button onClick={this.sortByPriceDesc}>DESC</button>
            <table className="table-products">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>product</td>
                        <td>price</td>
                        <td>updated</td>
                    </tr>
                </thead>
                <tbody>
                {this.renderProducts()}
                </tbody>
            </table>
        </div>
    }
}