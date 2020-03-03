import React from 'react';
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component{

  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async ()=>{
    this.setState({loading: true, error: null});

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({
        loading: false,
        data: data
      })
    } catch (error) {
      this.setState({loading:false, error: error})
    }
  }

  handleOpen = (e)=>{
    this.setState({modalIsOpen:true})
  }

  handleClose =(e)=>{
    this.setState({modalIsOpen:false})
  }

  handleDeleteBadge = async (e) =>{
    this.setState({loading: true, error: null})
    try{
      await api.badges.remove(this.props.match.params.badgeId)
      this.props.history.push('/badges')
      
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading/>
    }
    if(this.state.error){
      return <PageError error={this.state.error}/>
    }
    const badge = this.state.data;
    return(
      <BadgeDetails 
        onOpen={this.handleOpen} 
        onClose={this.handleClose} 
        modalIsOpen={this.state.modalIsOpen}  
        onDeleteBadge={this.handleDeleteBadge}
        badge={badge} />
    )
  }
}

export default BadgeDetailsContainer;