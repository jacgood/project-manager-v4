import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deleteProject } from '../../actions/project';

const ProjectItem = ({
//   addLike,
//   removeLike,
  deleteProject,
  auth,
  project: { _id, user, client, title, description, dateCreated },
  showActions
}) => (
  <div className='project bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={user.avatar} alt='' />
        <h4>{user.name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{title}</p>
      <p className='project-date'>
        Created on  on <Moment format='YYYY/MM/DD'>{dateCreated}</Moment>
      </p>

      {showActions && (
        <Fragment>
            {/* Item
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/projects/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link> */}
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deleteProject(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

ProjectItem.defaultProps = {
  showActions: true
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
//   addLike: PropTypes.func.isRequired,
//   removeLike: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { /*addLike, removeLike,*/ deleteProject }
)(ProjectItem);
