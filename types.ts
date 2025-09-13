// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Student interface
export interface Student extends CosmicObject {
  type: 'students';
  metadata: {
    student_id: string;
    student_name: string;
    department: {
      key: string;
      value: string;
    };
    academic_year: {
      key: string;
      value: string;
    };
    email?: string;
    phone_number?: string;
    date_of_birth?: string;
  };
}

// Instructor interface
export interface Instructor extends CosmicObject {
  type: 'instructors';
  metadata: {
    instructor_id: string;
    instructor_name: string;
    department: {
      key: string;
      value: string;
    };
    email?: string;
    phone_number?: string;
    specialization?: string;
  };
}

// Course interface
export interface Course extends CosmicObject {
  type: 'courses';
  metadata: {
    course_id: string;
    course_name: string;
    credits: number;
    department: {
      key: string;
      value: string;
    };
    assigned_instructor?: Instructor;
    course_description?: string;
    academic_year: {
      key: string;
      value: string;
    };
  };
}

// Enrollment interface
export interface Enrollment extends CosmicObject {
  type: 'enrollments';
  metadata: {
    student: Student;
    course: Course;
    enrollment_date: string;
    semester: {
      key: string;
      value: string;
    };
    academic_year: string;
  };
}

// Attendance Record interface
export interface AttendanceRecord extends CosmicObject {
  type: 'attendance-records';
  metadata: {
    student: Student;
    course: Course;
    date: string;
    status: {
      key: string;
      value: string;
    };
    period_number?: number;
    remarks?: string;
  };
}

// Mark interface
export interface Mark extends CosmicObject {
  type: 'marks';
  metadata: {
    student: Student;
    course: Course;
    assessment_type: {
      key: string;
      value: string;
    };
    marks_obtained: number;
    total_marks: number;
    grade?: {
      key: string;
      value: string;
    };
    assessment_date: string;
  };
}

// Administrator interface
export interface Administrator extends CosmicObject {
  type: 'administrators';
  metadata: {
    admin_id: string;
    admin_name: string;
    role: {
      key: string;
      value: string;
    };
    email: string;
    department_access?: string[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Department type
export type Department = 
  | 'Computer Science Engineering'
  | 'Electronics and Communication'
  | 'Mechanical Engineering'
  | 'Civil Engineering'
  | 'Electrical Engineering';

// Academic year type
export type AcademicYear = 'First Year' | 'Second Year' | 'Third Year' | 'Fourth Year';

// Assessment type
export type AssessmentType = 
  | 'Internal Assessment 1'
  | 'Internal Assessment 2'
  | 'Assignment'
  | 'Quiz'
  | 'Final Examination';

// Attendance status type
export type AttendanceStatus = 'Present' | 'Absent' | 'Late';

// Grade type
export type Grade = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'F';

// Role type
export type Role = 'Super Administrator' | 'Academic Administrator' | 'Department Head';

// Type guards
export function isStudent(obj: CosmicObject): obj is Student {
  return obj.type === 'students';
}

export function isInstructor(obj: CosmicObject): obj is Instructor {
  return obj.type === 'instructors';
}

export function isCourse(obj: CosmicObject): obj is Course {
  return obj.type === 'courses';
}

export function isEnrollment(obj: CosmicObject): obj is Enrollment {
  return obj.type === 'enrollments';
}

export function isAttendanceRecord(obj: CosmicObject): obj is AttendanceRecord {
  return obj.type === 'attendance-records';
}

export function isMark(obj: CosmicObject): obj is Mark {
  return obj.type === 'marks';
}

export function isAdministrator(obj: CosmicObject): obj is Administrator {
  return obj.type === 'administrators';
}