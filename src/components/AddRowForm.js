import React, {Component} from 'react'

class AddRowForm extends Component {

    constructor() {
        super()
        this.state = {
            data : {
                name : '',
                hobby: '',
                age : ''
            }
        }
    }

    getFieldValue = (e) => {
        this.setState({
            data: {...this.state.data, [e.target.name] : e.target.value}
        })
    }

    submitRow = (e) => {
        e.preventDefault()
        const userdata = {
            name : this.state.data.name,
            age : this.state.data.age,
            hobby : this.state.data.hobby
        }
        this.props.addRowToArray(userdata)
        document.getElementById('addRowForm').reset()
    }

    render() {
        return (
            <form onSubmit={this.submitRow} className="form-inline" id="addRowForm">
                <div className="form-group">
                    <input 
                        type="text"
                        name="name"  
                        className="form-control col-sm-4"
                        placeholder="Name"
                        onChange={this.getFieldValue} 
                    />
                    <input 
                        type="text"
                        name="hobby"  
                        className="form-control col-sm-4"
                        placeholder="Hobby"
                        onChange={this.getFieldValue} 
                    />
                    <input 
                        type="text"
                        name="age"  
                        className="form-control col-sm-2"
                        placeholder="Age"
                        onChange={this.getFieldValue} 
                    />
                    <button className="btn btn-success col-sm-2">
                        Submit Row
                    </button> 
                </div>
            </form>
        )
    }
}

export default AddRowForm