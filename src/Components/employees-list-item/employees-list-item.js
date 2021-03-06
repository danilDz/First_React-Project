import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {name, salary, onDelete, onToggleProp, increase, promotion, onChangeSalary} = this.props

        let classNames = "list-group-item d-flex justify-content-between"
        if(increase){
            classNames += ' increase'
        }
        if(promotion){
            classNames += ' like'
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle='promotion'>{name}</span>
                <input type="text" 
                        className="list-group-item-input" 
                        defaultValue={salary + '$'}
                        onChange={onChangeSalary} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;