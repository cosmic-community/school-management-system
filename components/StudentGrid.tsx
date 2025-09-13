import { Student } from '@/types'
import { Mail, Phone, Calendar } from 'lucide-react'

interface StudentGridProps {
  students: Student[]
}

export default function StudentGrid({ students }: StudentGridProps) {
  if (!students || students.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-secondary-500">No students found</p>
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
      {students.map((student) => (
        <div key={student.id} className="card hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            {student.thumbnail && (
              <img
                src={`${student.thumbnail}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={student.metadata.student_name}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-secondary-900">
                {student.metadata.student_name}
              </h3>
              <p className="text-sm text-secondary-600">
                {student.metadata.student_id}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className={`badge ${getDepartmentColor(student.metadata.department.value)}`}>
                {student.metadata.department.value}
              </span>
              <span className={`badge ${getAcademicYearColor(student.metadata.academic_year.value)}`}>
                {student.metadata.academic_year.value}
              </span>
            </div>

            {student.metadata.email && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <Mail className="w-4 h-4" />
                <span>{student.metadata.email}</span>
              </div>
            )}

            {student.metadata.phone_number && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <Phone className="w-4 h-4" />
                <span>{student.metadata.phone_number}</span>
              </div>
            )}

            {student.metadata.date_of_birth && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date(student.metadata.date_of_birth).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}