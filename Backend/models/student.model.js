import db from '../config/db.js';

export const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM students');
  return rows;
};

export const create = async (data) => {
  const { id, code_students, first_name, last_name, type_document, number_document, birthday, grade, selective_grade } =
    data;

  const [result] = await db.query(
    `INSERT INTO students (id, code_students,
     first_name, last_name, type_document,
      number_document, birthday, grade, selective_grade) VALUES (?,?,?,?,?,?,?,?,?)`,
    [id, code_students, first_name, last_name, type_document, number_document, birthday, grade, selective_grade]
  );
};
