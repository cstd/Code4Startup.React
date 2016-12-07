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
      <h3>Qty: {this.state.qty} item(s)</h3>
      </div>
    );
  }
}

ReactDOM.render(<Product />, document.getElementById("root"));
