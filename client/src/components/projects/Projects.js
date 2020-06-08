import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/project';
import ProjectItem from './ProjectItem';

const Projects = ({ getProjects, project: { projects } }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Fragment>
      <h1 className="large text-primary">Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
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

export default connect(mapStateToProps, { getProjects })(Projects);
