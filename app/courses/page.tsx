import { getCourses } from '@/lib/cosmic'
import CourseGrid from '@/components/CourseGrid'

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Courses
          </h1>
          <p className="text-secondary-600">
            Course catalog and instructor assignments
          </p>
        </div>
        <div className="text-sm text-secondary-500">
          {courses.length} total courses
        </div>
      </div>

      <CourseGrid courses={courses} />
    </div>
  )
}