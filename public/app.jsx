let Greeter = React.createClass({
render: () => {
  return(
   <div>
    <h1>Hello, React!</h1>
    <p>This is from a component</p>
   </div>
  );
}

});

const container = document.getElementById('root');
ReactDOM.render(<Greeter/>, container);
