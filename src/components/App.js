import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resource: ''
        }
    }
    render() {
        return ( 
            < >
                <div>
                    <button onClick={()=>{this.setState({resource: 'Post'})}}>Posts</button>
                    <button onClick={()=>{this.setState({resource: 'Todos'})}}>Todos</button>
                </div>
                {this.state.resource}
            </ >
        );
    }
}

export default App;