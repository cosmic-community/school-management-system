import { getInstructors } from '@/lib/cosmic'
import InstructorGrid from '@/components/InstructorGrid'

export default async function InstructorsPage() {
  const instructors = await getInstructors()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Instructors
          </h1>
          <p className="text-secondary-600">
            Faculty management and specialization tracking
          </p>
        </div>
        <div className="text-sm text-secondary-500">
          {instructors.length} total instructors
        </div>
      </div>

      <InstructorGrid instructors={instructors} />
    </div>
  )
}