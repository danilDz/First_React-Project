import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props)
    }

    onFilter = (e) => {
        this.props.onUpdateFilter(e.target.name)
        const classNames = 'btn btn-outline-light'
        const buttons = document.querySelectorAll('.btn-group .btn')
        buttons.forEach(item => {
            item.classList.replace('btn-light', 'btn-outline-light')
            if (item.name == e.target.name) {
                item.classList.replace('btn-outline-light', 'btn-light')
            }
        })
    }
    
    render() {
        const dataButtons = [
            {name: 'all', label: 'All employees', colored: false},
            {name: 'promotion', label: 'For promotion', colored: false},
            {name: 'salary', label: 'Salary more than 1000$', colored: true},
            {name: 'award', label: 'For award', colored: false}
        ]

        const buttons = dataButtons.map(({name, label, colored}, index) => {
            const style = colored ? {color: 'red'} : null
            if (index == 0) {
                return (
                    <button 
                        className="btn btn-light"
                        type="button"
                        key={name}
                        name={name}
                        style={style}
                        onClick={this.onFilter}>
                            {label}
                    </button>
                )
            } else {
                return (
                    <button 
                        className="btn btn-outline-light"
                        type="button"
                        key={name}
                        name={name}
                        style={style}
                        onClick={this.onFilter}>
                            {label}
                    </button>
                )
            }
            
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default AppFilter;