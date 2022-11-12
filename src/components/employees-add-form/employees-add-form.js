import './employees-add-form.css'
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Add new employees</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="name"
                           name='name'
                           value={this.state.name}
                           onChange={this.onValueChange}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="salary $"
                           name='salary'
                           value={this.state.value}
                           onChange={this.onValueChange}
                    />

                    <button type="submit"
                            className="btn btn-outline-light">Add
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;