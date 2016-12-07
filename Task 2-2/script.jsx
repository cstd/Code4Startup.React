class Product extends React.Component {
  buy() {
    alert("You bought an Android mobile!");
  }

  render() {
    return (
      <div>
      <p>Android - $199</p>
      <button onClick={this.buy}>Buy</button>
      </div>
    );
  }
}

ReactDOM.render(<Product />, document.getElementById("root"));
