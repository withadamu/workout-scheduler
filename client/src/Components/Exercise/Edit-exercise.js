import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Exercise.css';

export default class EditExercise extends Component {
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/exercise/' +this.props.match.params.id)
      .then(res => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date)
        })
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
    .then(res => {
      if(res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username),
        })
      }
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercise/update/'+this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render(){
    return(
      <div>
        <h3>Edit New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-block">
            <div className="form-item">
              <label>Username: </label>
              <select required
                className="form-input"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user){
                    return <option
                            key={user}
                            value={user}>{user}
                          </option>
                  })
                }
              </select>
            </div>
            <div className="form-item">
              <label>Description: </label>
              <input type="text"
                  required
                  className="form-input"
                  value={this.state.description}
                  onChange={this.onChangeDescription} />
            </div>
            <div className="form-item">
              <label>Duration (in Minutes): </label>
              <input type="text"
                  required
                  className="form-input"
                  value={this.state.duration}
                  onChange={this.onChangeDuration} />
            </div>
            <div className="form-item">
              <label>Date: </label>
              <DatePicker
                  className="form-input"
                  selected={this.state.date}
                  onChange={this.onChangeDate} />
            </div>
            <div className="form-item">
              <input type="submit"
                  className="form-button"
                  value="Edit Exercise Log" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
