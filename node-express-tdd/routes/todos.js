const express = require('express');
const router = express.Router();
const create_error = require('http-errors');

const todos = [{id: 1, name: 'Do something', completed: false}];

/* GET todos listing. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

router.get('/:id', function(req, res, next) {
  const foundTodo = todos.find(todo => todo.id === Number(req.params.id));

  if (!foundTodo) {
    return next(create_error(404, 'Not Found'));
  }

  res.json(foundTodo);
});

router.post('/', function (req, res, next) {
  const {body} = req;

  if (typeof body.name !== 'string') {
    return next(create_error(422, 'Validation Error'));
  }

  const new_todo = {
    id: todos.length + 1,
    name: body.name,
    completed: false
  };

  todos.push(new_todo);
  res.status(201).json(new_todo);
});

module.exports = router;

