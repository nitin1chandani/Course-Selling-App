import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
        console.log(data.courses);
      });
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

const Course = (props) => {
  return (
    <Card style={{ margin: 10, width: 300, minHeight: 200 }}>
      <Typography textAlign={"center"}>{props.course.title}</Typography>
      <Typography textAlign={"center"}>{props.course.description}</Typography>
      <img src={props.course.imageLink} style={{ width: 300, height: 300 }} />
    </Card>
  );
};

export default Courses;
