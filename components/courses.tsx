import Link from "next/link";

interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  link: string;
}

async function fetchCourses() {
  const results = await fetch("http://localhost:3000/api/courses");
  return await results.json();
}

const Courses = async () => {
  const courses: Course[] = await fetchCourses();
  return (
    <div className="courses">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
