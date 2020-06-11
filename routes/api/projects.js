const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Project = require('../../models/Project');
const Client = require('../../models/Client');
const Objective = require('../../models/Objective');
const Task = require('../../models/Task');

// const Post = require('../../models/Post');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/projects
// @desc     Create a project
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      //check('dateDue', 'Due date is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const assignedBy = await User.findById(req.user.id).select('-password');

      const newProject = new Project({
        user: req.user.id,
        client: req.client.id,
        assignedBy: assignedBy,
        title: req.body.title,
        description: req.body.description,
        dateDue: req.body.dateDue,
      });

      const project = await newProject.save();

      res.json(project);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/projects
// @desc     Get all projects
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find().sort({ dateDue: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/projects/:id
// @desc     Get project by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.json(project);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/projects/:id
// @desc     Delete a project
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    // Check user
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await project.remove();

    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
