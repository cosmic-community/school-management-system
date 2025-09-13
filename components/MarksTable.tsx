import { Mark } from '@/types'

interface MarksTableProps {
  marks: Mark[]
}

export default function MarksTable({ marks }: MarksTableProps) {
  if (!marks || marks.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-secondary-500">No marks found</p>
      </div>
    )
  }

  const getGradeBadge = (grade?: string) => {
    if (!grade) return 'badge-gray'
    
    const gradeClasses: Record<string, string> = {
      'A+': 'badge-green',
      'A': 'badge-blue',
      'B+': 'badge-purple',
      'B': 'badge-yellow',
      'C': 'badge-red',
      'F': 'badge-red',
    }
    return gradeClasses[grade] || 'badge-gray'
  }

  const getAssessmentBadge = (assessment: string) => {
    const assessmentClasses: Record<string, string> = {
      'Internal Assessment 1': 'badge-blue',
      'Internal Assessment 2': 'badge-purple',
      'Assignment': 'badge-green',
      'Quiz': 'badge-yellow',
      'Final Examination': 'badge-red',
    }
    return assessmentClasses[assessment] || 'badge-gray'
  }

  return (
    <div className="card">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-secondary-200">
          <thead className="bg-secondary-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Assessment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Marks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-200">
            {marks.map((mark) => (
              <tr key={mark.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {mark.metadata.student.thumbnail && (
                      <img
                        src={`${mark.metadata.student.thumbnail}?w=40&h=40&fit=crop&auto=format,compress`}
                        alt={mark.metadata.student.metadata.student_name}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-secondary-900">
                        {mark.metadata.student.metadata.student_name}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {mark.metadata.student.metadata.student_id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-secondary-900">
                    {mark.metadata.course.metadata.course_name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {mark.metadata.course.metadata.course_id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`badge ${getAssessmentBadge(mark.metadata.assessment_type.value)}`}>
                    {mark.metadata.assessment_type.value}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-secondary-900">
                    {mark.metadata.marks_obtained} / {mark.metadata.total_marks}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {Math.round((mark.metadata.marks_obtained / mark.metadata.total_marks) * 100)}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {mark.metadata.grade ? (
                    <span className={`badge ${getGradeBadge(mark.metadata.grade.key)}`}>
                      {mark.metadata.grade.key}
                    </span>
                  ) : (
                    <span className="text-sm text-secondary-500">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                  {new Date(mark.metadata.assessment_date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}