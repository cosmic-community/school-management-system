import { getAttendanceRecords } from '@/lib/cosmic'
import AttendanceTable from '@/components/AttendanceTable'

export default async function AttendancePage() {
  const attendanceRecords = await getAttendanceRecords()

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            Attendance Records
          </h1>
          <p className="text-secondary-600">
            Track daily attendance and monitor student participation
          </p>
        </div>
        <div className="text-sm text-secondary-500">
          {attendanceRecords.length} total records
        </div>
      </div>

      <AttendanceTable records={attendanceRecords} />
    </div>
  )
}