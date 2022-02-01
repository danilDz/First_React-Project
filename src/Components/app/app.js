import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: "John C.", salary: 800, id: 1},
                {name: "Daniel H.", salary: 3000, id: 2},
                {name: "Skitr O.", salary: 5000, id: 3}
            ]
        }
        this.currentId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

            // First way

            // const index = data.findIndex(elem => elem.id == id)
            
            // const before = data.slice(0, index)
            // const after = data.slice(index+1)
            // const newArr = [...before, ...after]


            // Second way

            const newArr = data.filter(item => item.id !== id)

            return{
                data: newArr
            }
        })
    }

    onSubmit = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.currentId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return{
                data: newArr
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete = {this.deleteItem}/>
                <EmployeesAddForm onSubmit={this.onSubmit}/>
            </div>
        )
    }   
}

export default App;