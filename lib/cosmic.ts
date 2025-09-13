import { createBucketClient } from '@cosmicjs/sdk'
import { 
  Student, 
  Instructor, 
  Course, 
  Enrollment, 
  AttendanceRecord, 
  Mark, 
  Administrator 
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all students with department information
export async function getStudents(): Promise<Student[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'students' })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1);
    
    return response.objects as Student[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch students');
  }
}

// Fetch all instructors
export async function getInstructors(): Promise<Instructor[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'instructors' })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1);
    
    return response.objects as Instructor[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch instructors');
  }
}

// Fetch all courses with instructor information
export async function getCourses(): Promise<Course[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'courses' })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1);
    
    return response.objects as Course[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch courses');
  }
}

// Fetch all enrollments with student and course information
export async function getEnrollments(): Promise<Enrollment[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'enrollments' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Enrollment[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch enrollments');
  }
}

// Fetch all attendance records with student and course information
export async function getAttendanceRecords(): Promise<AttendanceRecord[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'attendance-records' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as AttendanceRecord[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch attendance records');
  }
}

// Fetch all marks with student and course information
export async function getMarks(): Promise<Mark[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'marks' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Mark[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch marks');
  }
}

// Fetch all administrators
export async function getAdministrators(): Promise<Administrator[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'administrators' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Administrator[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch administrators');
  }
}

// Fetch single student by slug
export async function getStudent(slug: string): Promise<Student | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'students',
      slug
    }).depth(1);
    
    return response.object as Student;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch student');
  }
}

// Fetch single course by slug
export async function getCourse(slug: string): Promise<Course | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'courses',
      slug
    }).depth(1);
    
    return response.object as Course;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch course');
  }
}

// Fetch single instructor by slug
export async function getInstructor(slug: string): Promise<Instructor | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'instructors',
      slug
    }).depth(1);
    
    return response.object as Instructor;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch instructor');
  }
}