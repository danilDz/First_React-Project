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
                {name: "John C.", salary: 800, increase: false, promotion: true, id: 1},
                {name: "Daniel H.", salary: 3000, increase: true, promotion: false, id: 2},
                {name: "Skitr O.", salary: 5000, increase: false, promotion: false, id: 3}
            ],
            term: '',
            filter: ''
        }
        this.currentId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
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
            promotion: false,
            id: this.currentId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return{
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(item => item.id == id)

    //         const old = data[index]
    //         const newItem = {...old, increase: !old.increase}

    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

    //         return {
    //             data: newArr
    //         }

    //     })
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id == id) {
    //                 return {...item, promotion: !item.promotion}
    //             }
    //             return item
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id == id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    allEmpl = () => {
        return this.state.data.length
    }

    awarderedEmpl = () => {
        let count = 0
        this.state.data.forEach(item => {
            if (item.increase == true) {
                count++
            }
        })
        return count
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPost = (items, filter) => {
        if (filter == 'all' || filter == '') {
            return items
        }
        if (filter == 'promotion') {
            return items.filter(item => {
                if (item.promotion) {
                    return item
                }
            })
        }
        if (filter == 'salary') {
            return items.filter(item => {
                if (item.salary > 1000) {
                    return item
                }
            })
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    render(){
        const {data, term, filter} = this.state
        let visibleData = this.searchEmp(data, term)
        visibleData = this.filterPost(visibleData, filter)

        return (
            <div className="app">
                <AppInfo allEmpl={this.allEmpl()}
                    awarderedEmpl={this.awarderedEmpl()} />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}
                                data = {visibleData} />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onSubmit={this.onSubmit}/>
            </div>
        )
    }   
}

export default App;