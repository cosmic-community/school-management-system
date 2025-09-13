import { getStudents } from '@/lib/cosmic'
import StudentGrid from '@/components/StudentGrid'

export default async function StudentsPage() {
  const students = await getStudents()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Students
          </h1>
          <p className="text-secondary-600">
            Manage student profiles and academic information
          </p>
        </div>
        <div className="text-sm text-secondary-500">
          {students.length} total students
        </div>
      </div>

      <StudentGrid students={students} />
    </div>
  )
}