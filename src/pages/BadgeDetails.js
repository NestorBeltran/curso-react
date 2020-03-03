import React from 'react'
import logoConf from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const BadgeDetails = (props) =>{
  const badge = props.badge;
  return(
    <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={logoConf} alt="Logo conf"/>
              </div>
              <div className="col-6">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                 email={badge.email}
                 firstName={badge.firstName}
                 lastName={badge.lastName}
                 twitter={badge.twitter}
                 jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                </div>
                <div>
                  <button onClick={props.onOpen} className="btn btn-danger">Delete</button>
                  <DeleteBadgeModal 
                    isOpen={props.modalIsOpen} 
                    onClose={props.onClose}
                    onDeletBadge={props.onDeleteBadge}>
                      Children
                  </DeleteBadgeModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BadgeDetails;