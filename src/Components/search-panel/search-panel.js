import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    inputText = (e) => {
        this.setState({
            text: [e.target.value]
        })
        this.props.onUpdateSearch([e.target.value])
    }
    
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find employee"
                value={this.state.text}
                onChange={this.inputText} />
        )
    }
}

export default SearchPanel;