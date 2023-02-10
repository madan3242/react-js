// React.createContext
const MyContext = React.createContext(defaultValue);

// Context.Provider
<MyContext.Provider value={/* some value */}>

</MyContext.Provider>

// Class.contextType
class MyClass extends React.Component {
    componentDidMount() {
      let value = this.context;
      /* perform a side-effect at mount using the value of MyContext */
    }
    componentDidUpdate() {
      let value = this.context;
      /* ... */
    }
    componentWillUnmount() {
      let value = this.context;
      /* ... */
    }
    render() {
      let value = this.context;
      /* render something based on the value of MyContext */
    }
  }
  MyClass.contextType = MyContext;

  class MyClass extends React.Component {
    static contextType = MyContext;
    render() {
      let value = this.context;
      /* render something based on the value */
    }
  }

// Context.Consumer
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>

//Context.displayName
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools