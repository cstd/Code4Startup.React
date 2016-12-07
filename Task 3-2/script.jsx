class Product extends React.Component {
  constructor(props) {
    super(props);
    this.buy = this.buy.bind(this);
    this.state = {qty: 0};
  }

  buy() {
    this.setState({qty: this.state.qty+1});
  }

  render() {
    return (
      <div>
        <h3>Android - $199</h3>
        <button onClick={this.buy}>Buy</button>
        <h4>Qty: {this.state.qty} item(s)</h4>
        <hr/>
      </div>
    );
  }
}

class Total extends React.Component {
  render() {
    return (
      <div>
        <h3>Total Cash: </h3>
      </div>
    );
  }
}

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Product/>
        <Product/>
        <Product/>
        <Total/>
      </div>
    );
  }
}

ReactDOM.render(<ProductList/>, document.getElementById("root"));
