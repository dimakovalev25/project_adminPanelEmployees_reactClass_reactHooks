import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'John C.', salary: 900, like: true, increase: true},
                {id: 2, name: 'Mark A.', salary: 1900, like: true, increase: false},
                {id: 3, name: 'Jo C.', salary: 1900, like: true, increase: false},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId +1
        }
        this.setState(({data}) => {
            const newData = [newItem, ...data];
            return {
                data: newData
            }
        })
    }

    render() {
        return (
            <div className='app'>
                by_react
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                    <EmployeesList
                        onDelete={this.deleteItem}
                        data={this.state.data}/>
                    <EmployeesAddForm
                    onAdd={this.addItem}
                    />
                </div>
            </div>
        )
    }
}

export default App;