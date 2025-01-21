const dbConnection = require("./sqlite");
const knex_db = require("./db-config");

const testBase = require("./testBase");

dbConnection
  .getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
    _db = db;
}

const dbinitialize = async () => {
    await testBase.resetDatabase(knex_db);
}

const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`;
    try {
        const data = await knex_db.raw(sql);
        return data;
    } catch (error) {
        throw error;
    }
}

const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`;
    try {
        const data = await knex_db.raw(sql, [id]);
        return data;
    } catch (error) {
        throw error;
    }
}

const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id, name, age) VALUES (?, ?, ?)`;
    try {
        const data = await knex_db.raw(sql, [id, name, age]);
        return data;
    } catch (error) {
        throw error;
    }
}

const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`;
    try {
        const data = await knex_db.raw(sql, [name, age, id]);
        return data;
    } catch (error) {
        throw error;
    }
}

const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id = ?`;
    try {
        const data = await knex_db.raw(sql, [id]);
        return data;
    } catch (error) {
        throw error;
    }
}

const readStudents = async () => {
    const sql = `SELECT * FROM student`;
    try {
        const data = await knex_db.raw(sql);
        return data;
    } catch (error) {
        throw error;
    }
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`;
    try {
        const data = await knex_db.raw(sql, [id]);
        return data;
    } catch (error) {
        throw error;
    }
}

const addStudent = async (id, name, age, religion) => {
    const sql = `INSERT INTO student(id, name, age, religion) VALUES (?, ?, ?, ?)`;
    try {
        const data = await knex_db.raw(sql, [id, name, age, religion]);
        return data;
    } catch (error) {
        throw error;
    }
}

const updateStudent = async (name, age, religion, id) => {
    const sql = `UPDATE student SET name=?, age=?, religion=? WHERE id=?`;
    try {
        const data = await knex_db.raw(sql, [name, age, religion, id]);
        return data;
    } catch (error) {
        throw error;
    }
}

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id = ?`;
    try {
        const data = await knex_db.raw(sql, [id]);
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
