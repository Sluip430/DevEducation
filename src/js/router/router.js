const URL = require('url');
const { createUniversitie , getUniversitie, getUniversitiesList } = require('../controller/controller');
const { createTeacherController, getTeacherByIdController, createStudentController } = require('../controller/userController.js');
const { createCourseController, getCourseByIdController, deleteCourseController } = require('../controller/courseController');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);
  switch (true) {
    case method === 'POST' && pathname === "/create-universitie" :
      ({ result, error } = await createUniversitie(body));
      break;
  
    case method === 'GET' && pathname === "/universitie":
      ({ result, error } = await getUniversitie(query));
      break;

    case method === 'GET' && pathname === "/universities-list":
      ({ result, error } = await getUniversitiesList(query));
      break;

    case method === 'POST' && pathname === "/create-teacher" :
      ({ result, error } = await createTeacherController(body));
      break;

    case method === 'GET' && pathname === "/get-teacher-by-universitie-id" :
      ({ result, error } = await getTeacherByIdController(query));
      break;

    case method === 'POST' && pathname === "/create-course" :
      ({ result, error } = await createCourseController(body));
      break;

    case (method === 'GET' && pathname === "/get-course-by-id"):
      ({ result, error } = await getCourseByIdController(query));
      break;
    
    case (method === 'DELETE' && pathname === '/delete-course'):
      ({ result, error } = await deleteCourseController(body));
      break;

    case method === 'POST' && pathname === "/create-student" :
      ({ result, error } = await createStudentController(body));
      break;
    
    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }
  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify(error.data));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };