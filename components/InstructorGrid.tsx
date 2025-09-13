import { Instructor } from '@/types'
import { Mail, Phone, BookOpen } from 'lucide-react'

interface InstructorGridProps {
  instructors: Instructor[]
}

export default function InstructorGrid({ instructors }: InstructorGridProps) {
  if (!instructors || instructors.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-secondary-500">No instructors found</p>
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {instructors.map((instructor) => (
        <div key={instructor.id} className="card hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            {instructor.thumbnail && (
              <img
                src={`${instructor.thumbnail}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={instructor.metadata.instructor_name}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-secondary-900">
                {instructor.metadata.instructor_name}
              </h3>
              <p className="text-sm text-secondary-600">
                {instructor.metadata.instructor_id}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <span className={`badge ${getDepartmentColor(instructor.metadata.department.value)}`}>
              {instructor.metadata.department.value}
            </span>

            {instructor.metadata.specialization && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <BookOpen className="w-4 h-4" />
                <span>{instructor.metadata.specialization}</span>
              </div>
            )}

            {instructor.metadata.email && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <Mail className="w-4 h-4" />
                <span>{instructor.metadata.email}</span>
              </div>
            )}

            {instructor.metadata.phone_number && (
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <Phone className="w-4 h-4" />
                <span>{instructor.metadata.phone_number}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}