const Student = require("../model/Student");

/**
 * Function to get list of all the students
 */

exports.getStudents = (req, res) => {
  Student.find({}, (err, result) => {
    if (err) {
      return res.status(422).json({
        err: "Unable to fetch students",
      });
    }
    res.send(result);
  });
};

exports.createStudent = (req, res) => {
  const student = new Student(req.body);
  student.save((err, student) => {
    if (err) {
      return res.json({
        error: "Unable to create student",
      });
    }
    res.json({
      name: student.name,
      stream: student.stream,
      mobile: student.mobile,
      rollNumber: student.rollNumber,
    });
  });
};
