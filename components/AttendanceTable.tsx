import { AttendanceRecord } from '@/types'

interface AttendanceTableProps {
  records: AttendanceRecord[]
}

export default function AttendanceTable({ records }: AttendanceTableProps) {
  if (!records || records.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-secondary-500">No attendance records found</p>
      </div>
    )
  }

  const getStatusBadge = (status: string) => {
    const statusClasses: Record<string, string> = {
      'Present': 'badge-green',
      'Absent': 'badge-red',
      'Late': 'badge-yellow',
    }
    return statusClasses[status] || 'badge-gray'
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
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Period
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-200">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {record.metadata.student.thumbnail && (
                      <img
                        src={`${record.metadata.student.thumbnail}?w=40&h=40&fit=crop&auto=format,compress`}
                        alt={record.metadata.student.metadata.student_name}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-secondary-900">
                        {record.metadata.student.metadata.student_name}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {record.metadata.student.metadata.student_id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-secondary-900">
                    {record.metadata.course.metadata.course_name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {record.metadata.course.metadata.course_id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                  {new Date(record.metadata.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`badge ${getStatusBadge(record.metadata.status.value)}`}>
                    {record.metadata.status.value}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                  {record.metadata.period_number || '-'}
                </td>
                <td className="px-6 py-4 text-sm text-secondary-500">
                  {record.metadata.remarks || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}