let Greeter = React.createClass({
  getDefaultProps: function() {
    return{
      name : 'React',
      message: 'Default message'
    };
  },

  render: function() {
    let name = this.props.name;
    let message = this.props.message;
    return(
     <div>
      <h1>Hello {name}!</h1>
      <p> {message}!!</p>
     </div>
    );
  }

});

let firstName = ['Mike', 'James', 'Vic'];

const container = document.getElementById('root');
ReactDOM.render(<Greeter name ={firstName[1]} message='Message from prop'/>, container);
