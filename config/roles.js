export const ROLES = {
  ADMIN: "admin",
  INSTRUCTOR: "instructor",
  STUDENT: "student",
};
export const PERMISSIONS = {
  COURSE: {
    CREATE: ["admin", "instructor"],
    READ: ["admin", "instructor", "student"],
    UPDATE: ["admin", "instructor"],
    DELETE: ["admin"],
  },
  QUIZ: {
    CREATE: ["admin", "instructor"],
    READ: ["admin", "instructor", "student"],
    UPDATE: ["admin", "instructor"],
    DELETE: ["admin"],
  },
};
