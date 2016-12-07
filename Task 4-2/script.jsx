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

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    //alert('Name: ' + this.refs.name.value + " - $" + this.refs.price.value);

    this.refs.name.value = "";
    this.refs.price.value = "";
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Product Name" ref="name"/><br/><br/>
        <input type="text" placeholder="Product Price" ref="price"/><br/><br/>
        <button>Create Product</button><br/><br/>
      </form>
    );
  }
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.showProduct = this.showProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {
      total: 0,
      productList: [
        {name: "Android", price: 121},
        {name: "Apple", price: 123},
        {name: "Nokia", price: 65}
      ]
    };
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
    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product name={product.name} price={product.price}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}/>
      );
    });
    return (
      <div>
        <ProductForm/>
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
}

ReactDOM.render(<ProductList/>, document.getElementById("root"));
