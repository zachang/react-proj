let Greeter = React.createClass({
  getDefaultProps: function() {
    return{
      name : 'React',
      message: 'Default message'
    };
  },

  onButtonClick: function(e){
    e.preventDefault();
    let name = this.refs.name.value;
    alert(name);
  },

  render: function() {
    let name = this.props.name;
    let message = this.props.message;
    return(
     <div>
      <h1>Hello {name}!</h1>
      <p> {message}!!</p>

      <form onSubmit={this.onButtonClick}>
        <input type='text' ref='name'/>
        <button>Set Name</button>
      </form>
     </div>
    );
  }

});

let firstName = ['Mike', 'James', 'Vic'];

const container = document.getElementById('root');
ReactDOM.render(<Greeter name ={firstName[1]} message='Message from prop'/>, container);
