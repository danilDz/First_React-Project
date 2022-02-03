import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const elements = data.map(item => {

        const {id, increase, promotion, ...itemProps} = item;

        return <EmployeesListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            increase={increase}
            promotion={promotion}
            onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value)}/>
        // return <EmployeesListItem name={item.name} salary={item.salary}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;