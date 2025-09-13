import { getAttendanceRecords, getMarks } from '@/lib/cosmic'
import { Calendar, Target, Clock } from 'lucide-react'

export default async function RecentActivity() {
  const [attendance, marks] = await Promise.all([
    getAttendanceRecords(),
    getMarks()
  ])

  // Sort by date and get recent items
  const recentAttendance = attendance
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
    .slice(0, 3)

  const recentMarks = marks
    .sort((a, b) => new Date(b.metadata.assessment_date).getTime() - new Date(a.metadata.assessment_date).getTime())
    .slice(0, 3)

  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-primary-600" />
        <h2 className="text-xl font-semibold text-secondary-900">Recent Activity</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Recent Attendance
          </h3>
          <div className="space-y-2">
            {recentAttendance.map((record) => (
              <div key={record.id} className="flex items-center justify-between py-2 px-3 bg-secondary-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-secondary-900">
                    {record.metadata.student.metadata.student_name}
                  </div>
                  <div className="text-xs text-secondary-500">
                    {record.metadata.course.metadata.course_name}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`badge ${
                    record.metadata.status.value === 'Present' ? 'badge-green' :
                    record.metadata.status.value === 'Late' ? 'badge-yellow' : 'badge-red'
                  }`}>
                    {record.metadata.status.value}
                  </span>
                  <span className="text-xs text-secondary-500">
                    {new Date(record.metadata.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-secondary-700 mb-3 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Recent Assessments
          </h3>
          <div className="space-y-2">
            {recentMarks.map((mark) => (
              <div key={mark.id} className="flex items-center justify-between py-2 px-3 bg-secondary-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium text-secondary-900">
                    {mark.metadata.student.metadata.student_name}
                  </div>
                  <div className="text-xs text-secondary-500">
                    {mark.metadata.assessment_type.value}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-secondary-900">
                    {mark.metadata.marks_obtained}/{mark.metadata.total_marks}
                  </span>
                  {mark.metadata.grade && (
                    <span className={`badge ${
                      mark.metadata.grade.key === 'A+' || mark.metadata.grade.key === 'A' ? 'badge-green' :
                      mark.metadata.grade.key === 'B+' || mark.metadata.grade.key === 'B' ? 'badge-blue' :
                      mark.metadata.grade.key === 'C' ? 'badge-yellow' : 'badge-red'
                    }`}>
                      {mark.metadata.grade.key}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}