import DashboardStats from '@/components/DashboardStats'
import RecentActivity from '@/components/RecentActivity'
import QuickActions from '@/components/QuickActions'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          School Management Dashboard
        </h1>
        <p className="text-secondary-600">
          Welcome to your comprehensive school management system. Monitor students, courses, and academic performance from one central location.
        </p>
      </div>

      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  )
}