import { Users, UserPlus, BookOpen, Calendar, Target, FileText } from 'lucide-react'
import Link from 'next/link'

export default function QuickActions() {
  const actions = [
    {
      name: 'View All Students',
      href: '/students',
      icon: Users,
      description: 'Browse and manage student profiles',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Manage Instructors',
      href: '/instructors',
      icon: UserPlus,
      description: 'Faculty management and assignments',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Course Catalog',
      href: '/courses',
      icon: BookOpen,
      description: 'View courses and instructor assignments',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Attendance Records',
      href: '/attendance',
      icon: Calendar,
      description: 'Track daily attendance',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'Academic Performance',
      href: '/marks',
      icon: Target,
      description: 'View marks and grades',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      name: 'Generate Reports',
      href: '#',
      icon: FileText,
      description: 'Export academic reports',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ]

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-secondary-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="flex items-center gap-4 p-4 rounded-lg border border-secondary-200 hover:border-primary-200 hover:bg-primary-50 transition-colors group"
          >
            <div className={`p-3 rounded-lg ${action.bgColor} group-hover:scale-110 transition-transform`}>
              <action.icon className={`w-6 h-6 ${action.color}`} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-secondary-900 group-hover:text-primary-600">
                {action.name}
              </h3>
              <p className="text-xs text-secondary-500">
                {action.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}