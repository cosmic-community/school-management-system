import { Course } from '@/types'
import { User, BookOpen, Calendar } from 'lucide-react'

interface CourseGridProps {
  courses: Course[]
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (!courses || courses.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-secondary-500">No courses found</p>
      </div>
    )
  }

  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      'Computer Science Engineering': 'badge-blue',
      'Electronics and Communication': 'badge-purple',
      'Mechanical Engineering': 'badge-green',
      'Civil Engineering': 'badge-yellow',
      'Electrical Engineering': 'badge-red',
    }
    return colors[department] || 'badge-gray'
  }

  const getAcademicYearColor = (year: string) => {
    const colors: Record<string, string> = {
      'First Year': 'badge-green',
      'Second Year': 'badge-blue',
      'Third Year': 'badge-purple',
      'Fourth Year': 'badge-red',
    }
    return colors[year] || 'badge-gray'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="card hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            {course.thumbnail && (
              <img
                src={`${course.thumbnail}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={course.metadata.course_name}
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-secondary-900">
                {course.metadata.course_name}
              </h3>
              <p className="text-sm text-secondary-600">
                {course.metadata.course_id}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className={`badge ${getDepartmentColor(course.metadata.department.value)}`}>
                {course.metadata.department.value}
              </span>
              <span className={`badge ${getAcademicYearColor(course.metadata.academic_year.value)}`}>
                {course.metadata.academic_year.value}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-secondary-600">
              <BookOpen className="w-4 h-4" />
              <span>{course.metadata.credits} Credits</span>
            </div>

            {course.metadata.assigned_instructor && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <User className="w-4 h-4" />
                <span>{course.metadata.assigned_instructor.metadata.instructor_name}</span>
              </div>
            )}

            {course.metadata.course_description && (
              <p className="text-sm text-secondary-600 line-clamp-3">
                {course.metadata.course_description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}