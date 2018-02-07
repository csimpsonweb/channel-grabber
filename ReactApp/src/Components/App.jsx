import * as React from 'react';
import Header from './Header';
import ProductsTable from './ProductsTable';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('/products').then((response) => {
            this.setState({products: response.data});
        })
    }

    render() {
        return <div>
            <Header />
            <ProductsTable products={this.state.products}/>
        </div>;
    }
}