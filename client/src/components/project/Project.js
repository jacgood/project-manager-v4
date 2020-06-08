import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
// import PostItem from '../posts/PostItem';
// import CommentForm from '../post/CommentForm';
// import CommentItem from '../post/CommentItem';
import { getProject } from '../../actions/project';

const Project = ({ getProject, project: { project, loading }, match }) => {
  useEffect(() => {
    getProject(match.params.id);
  }, [getProject, match.params.id]);

  return loading || project === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/projects" className="btn">
        Back To Projects
      </Link>
    </Fragment>
  );
};

Project.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  project: state.project
});

export default connect(mapStateToProps, { getProject })(Project);