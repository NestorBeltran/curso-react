import React, { Fragment } from 'react'
import logo from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import md5 from 'md5';
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component{

  state = {
    loading: false,
    error: null,
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
    if(e.target.name === 'email'){
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value,
          'avatarUrl': `https://www.gravatar.com/avatar/${md5(e.target.value)}?d=identicon`,
        },
      })
    }else{
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value
        },
      })
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    this.setState({loading: true, error: null})
    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render(){

    if(this.state.loading){
      return <PageLoading />
    }

    return(
      <Fragment>
          <div className="BadgeNew__hero">
            <img className="BadgeNew__hero-image  img-fluid" src={logo} alt="Logo"/>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName={this.state.form.firstName || 'FIRST_NAME'}
                  lastName={this.state.form.lastName || 'FIRST_LAST'}
                  avatarUrl={this.state.form.avatarUrl}
                  jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                  twitter={this.state.form.twitter || 'twitter'}
                  email={this.state.form.email || 'email'}
                />
              </div>
              <div className="col-6">
                <h1>New Attendant</h1>
                <BadgeForm
                  error={this.state.error}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  formValues={this.state.form}/>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }

}

export default BadgeNew;