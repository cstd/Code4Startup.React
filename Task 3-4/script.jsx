class Product extends React.Component {
  constructor(props) {
    super(props);
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
    this.state = {qty: 0};
  }

  buy() {
    this.setState({qty: this.state.qty+1});
    this.props.handleTotal(this.props.price);
  }

  show() {
    this.props.handleShow(this.props.name);
  }

  render() {
    return (
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>-
        <button onClick={this.show}>Show</button>
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
        <h3>Total Cash: {this.props.total}</h3>
      </div>
    );
  }
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.showProduct = this.showProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {total: 0};
  }

  showProduct(name) {
    alert("You selected " + name);
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
  }

  render() {
    return (
      <div>
        <Product name="Android" price={121}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}/>
        <Product name="Apple" price={123}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}/>
        <Product name="Nokia" price={65}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}/>
        <Total total={this.state.total}/>
      </div>
    );
  }
}

ReactDOM.render(<ProductList/>, document.getElementById("root"));
