import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProject } from '../../actions/project';

const initialState = {
  title: '',
  description: '',
  user: '',
  client: '',
  assignedBy: '',
};

const ProjectForm = ({ project: { project, loading }, addProject }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!loading && project) {
      const projectData = { ...initialState };
      for (const key in project) {
        if (key in projectData) projectData[key] = project[key];
      }
      for (const key in project.social) {
        if (key in projectData) projectData[key] = project.social[key];
      }
      if (Array.isArray(projectData.skills))
        projectData.skills = projectData.skills.join(', ');
      setFormData(projectData);
    }
  }, [loading, project]);

  const {
    title,
    description,
    user,
    client,
    assignedBy,
    dateCreated,
    dateModified,
    dateDue,
    objectives,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addProject(formData, project ? true : false);
  };

  return (
    <Fragment>
      <div>
        <h1>Create New Project</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <select name="status" onChange={onChange}>
              <option>* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Assigned User"
              name="user"
              value={user}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Client"
              name="client"
              value={client}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Assigned By"
              name="assignedBy"
              value={assignedBy}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="dateDue"
              defaultValue="2020-07-22"
              min="2020-01-01"
              max="2022-12-31"
              value={dateDue}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
        </form>
      </div>
    </Fragment>
  );
};

ProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { addProject })(ProjectForm);
