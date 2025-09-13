# School Management System

![School Management System](https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1200&h=300&fit=crop&auto=format)

A comprehensive school management system built for educational institutions to manage students, instructors, courses, enrollments, attendance tracking, and academic performance.

## Features

- 📚 **Student Management** - Complete student profiles with academic information
- 👨‍🏫 **Instructor Management** - Faculty profiles with specializations and department assignments
- 📖 **Course Management** - Comprehensive course catalog with detailed information
- 📝 **Enrollment System** - Track student course enrollments by semester
- 📊 **Attendance Tracking** - Daily attendance records with detailed status tracking
- 🎯 **Academic Performance** - Marks and grade management across different assessment types
- 👤 **Administrative Dashboard** - Role-based access with department-specific permissions
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c57bf30a2eeaef39f42be7&clone_repository=68c57df40a2eeaef39f42c21)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> apply this

### Code Generation Prompt

> Based on the content model I created for "apply this", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school-management-system
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Students with Department Information
```typescript
const students = await cosmic.objects
  .find({ type: 'students' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Getting Course Enrollments
```typescript
const enrollments = await cosmic.objects
  .find({ type: 'enrollments' })
  .props(['id', 'title', 'metadata'])
  .depth(1);
```

### Tracking Attendance Records
```typescript
const attendance = await cosmic.objects
  .find({ type: 'attendance-records' })
  .props(['id', 'title', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This application demonstrates complex content relationships:

- **Students** connect to **Courses** through **Enrollments**
- **Attendance Records** link **Students** and **Courses** with daily tracking
- **Marks** associate **Students** with **Courses** for different assessment types
- **Instructors** are assigned to **Courses** with specialization matching
- **Administrators** have department-based access control

### Content Types Overview

1. **Students** - Student profiles with academic information
2. **Instructors** - Faculty management with specializations
3. **Courses** - Course catalog with instructor assignments
4. **Enrollments** - Student-course registration tracking
5. **Attendance Records** - Daily attendance monitoring
6. **Marks** - Academic performance and grading
7. **Administrators** - Role-based system access

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Set environment variables in Netlify dashboard

### Other Platforms
The application can be deployed to any platform that supports Next.js applications.

For production, set these environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->