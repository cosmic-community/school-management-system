import { getStudents, getInstructors, getCourses, getAttendanceRecords } from '@/lib/cosmic'
import { Users, UserCheck, BookOpen, Calendar } from 'lucide-react'

export default async function DashboardStats() {
  const [students, instructors, courses, attendance] = await Promise.all([
    getStudents(),
    getInstructors(),
    getCourses(),
    getAttendanceRecords()
  ])

  const stats = [
    {
      name: 'Total Students',
      value: students.length,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Total Instructors',
      value: instructors.length,
      icon: UserCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Active Courses',
      value: courses.length,
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Attendance Records',
      value: attendance.length,
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="stats-card">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-secondary-600">{stat.name}</p>
              <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}