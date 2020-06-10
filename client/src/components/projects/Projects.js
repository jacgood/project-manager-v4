import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/project';
import ProjectItem from './ProjectItem';
//import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/project.css';

const Projects = ({ getProjects, project: { projects } }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Fragment>
      {projects.map((project) => (
        <ProjectItem className="project" key={project._id} project={project} />
      ))}
    </Fragment>
  );
};

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getProjects
})(Projects);
