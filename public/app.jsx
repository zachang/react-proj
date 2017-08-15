let GreeterMessage = React.createClass({
  render: function(){
    let name = this.props.name
    let message = this.props.message
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p> {message}</p>
      </div>
    );
  }
});

let GreeterForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();

    let nameRef = this.refs.name;
    let name = nameRef.value;
    nameRef.value = '';

    if(typeof name === 'string' && name.length > 0) {
        nameRef.value = '';
        this.props.onNewName(name);
    }
  },

  render: function(){
      return(
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type='text' ref='name'/>
            <button>Display Name</button>
          </form>
        </div>
      );
  }
});

let Greeter = React.createClass({
  getDefaultProps: function() {
    return{
      name : 'React',
      message: 'Default message'
    };
  },

  handleNewName: function(name) {
      this.setState({
        name:name
      });
  },

  getInitialState: function() {
    return{
      name: this.props.name
    };
  },

  render: function() {
    let name = this.state.name;
    let message = this.props.message;
    return(
     <div>
       <GreeterMessage name={name} message='Welcome to react app'/>
       <GreeterForm onNewName={this.handleNewName} />
     </div>
    );
  }

});

//let firstName = ['Mike', 'James', 'Vic'];

const container = document.getElementById('root');
ReactDOM.render(<Greeter name ="" message='Message from prop'/>, container);
