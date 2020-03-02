import React, { Fragment } from 'react'
import logo from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component{

  state = {
    form:{
      firstName:'',
      lastName: '',
      twitter: '',
      jobTitle: '',
      email: '',
      avatarUrl: 'https://www.gravatar.com/avatar?d=identicon'
    }
  }

  handleChange = (e)=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      },
    })
  }

  render(){
    return(
      <Fragment>
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={logo} alt="Logo"/>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  avatarUrl={this.state.form.avatarUrl}
                  jobTitle={this.state.form.jobTitle}
                  twitter={this.state.form.twitter}
                  email={this.state.form.email}
                />
              </div>
              <div className="col-6">
                <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }

}

export default BadgeNew;