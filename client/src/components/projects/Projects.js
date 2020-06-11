import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/project';
import ProjectItem from './ProjectItem';
import Sidebar from '../layout/Sidebar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/project.css';

const Projects = ({ getProjects, project: { projects } }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Fragment>
      <Row>
        <Col ml="auto">
          <Sidebar />
        </Col>
        <Col>
          {projects.map((project) => (
            <ProjectItem
              className="project"
              key={project._id}
              project={project}
            />
          ))}
        </Col>
      </Row>
    </Fragment>
  );
};

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, {
  getProjects,
})(Projects);
