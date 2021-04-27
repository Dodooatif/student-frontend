import { useContext, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { StudentsContext } from "../contexts/StudentsContext";
import { FiDelete, FiEdit, FiEye } from "react-icons/fi";

const Students = () => {
  const { loading, students, getStudents } = useContext(StudentsContext);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <section>
      {loading && <Spinner animation="grow" />}
      {students.length > 0 ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>LEVEL</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>{student.level}</td>
                <td>
                  <FiDelete /> <FiEdit /> <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
};

export default Students;
