const CurrentDate = (props) => {
  return <p>The current date is: {props.date}</p>;
};

class Calendar extends React.Component {
  render() {
    const currentDate = new Date().toString();
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
}

ReactDOM.render(<Calendar />, document.getElementById('challenge-node'));
