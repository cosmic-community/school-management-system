import { getMarks } from '@/lib/cosmic'
import MarksTable from '@/components/MarksTable'

export default async function MarksPage() {
  const marks = await getMarks()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Academic Performance
          </h1>
          <p className="text-secondary-600">
            Student marks and grade tracking across all assessments
          </p>
        </div>
        <div className="text-sm text-secondary-500">
          {marks.length} total assessments
        </div>
      </div>

      <MarksTable marks={marks} />
    </div>
  )
}