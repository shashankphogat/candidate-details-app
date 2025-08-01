# Candidate Details Application

A modern, responsive candidate management interface built with React, Redux, TypeScript, and Vite. This application provides a comprehensive view of candidate information with editing capabilities, job assignments, and notes management.

![Candidate Details App](https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Redux State Management**: Centralized state management for candidate data and editing states
- **Real-time Editing**: In-place editing with modal interface for candidate information
- **Modern UI Components**: Clean, professional interface matching recruitment CRM standards
- **TypeScript Support**: Full type safety throughout the application
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Pure CSS (no framework dependencies)
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 16.0 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd candidate-details-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

\`\`\`
src/
├── components/           # React components
│   ├── CandidateDetailsPage.tsx    # Main page component
│   ├── CandidateProfile.tsx        # Profile header component
│   ├── CandidateDetails.tsx        # Details grid component
│   ├── EditModal.tsx               # Edit modal component
│   ├── Header.tsx                  # Application header
│   ├── Sidebar.tsx                 # Navigation sidebar
│   ├── TabNavigation.tsx           # Tab navigation
│   ├── AssignedJobs.tsx            # Jobs list component
│   └── NotesPanel.tsx              # Notes and activities panel
├── store/                # Redux store configuration
│   ├── store.ts                    # Store configuration
│   └── candidateSlice.ts           # Candidate state slice
├── App.tsx               # Root application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
\`\`\`

## 🎨 Design Features

### Responsive Layout
- **Desktop**: Full sidebar navigation with three-column layout
- **Tablet**: Collapsible sidebar with two-column content
- **Mobile**: Stack layout with horizontal navigation

### Color Scheme
- **Primary Blue**: `#3b82f6` - Used for buttons, links, and active states
- **Background**: `#f8f9fa` - Light gray background for content areas
- **Text Colors**: Various shades of gray for hierarchy
- **Accent Colors**: Red for warnings, amber for ratings

### Components Overview

#### CandidateProfile
- Displays candidate photo, name, rating, and contact information
- Action buttons for editing, starring, and notifications
- Responsive layout that stacks on mobile devices

#### CandidateDetails
- Two-column grid layout showing all candidate information
- Responsive design that becomes single column on smaller screens
- Clean typography with proper visual hierarchy

#### EditModal
- Full-screen modal for editing candidate information
- Form validation and state management
- Responsive form layout

#### NotesPanel
- Tabbed interface for different types of activities
- Scrollable content area with proper overflow handling
- User information and action buttons

## 🔧 Configuration

### Vite Configuration
The project uses Vite with the following key configurations:
- Path aliases (`@/` points to `src/`)
- React plugin for JSX support
- TypeScript support out of the box

### TypeScript Configuration
- Strict mode enabled for better type safety
- Path mapping for clean imports
- Modern ES2020 target for optimal performance

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
\`\`\`

This creates a `dist` folder with optimized production files.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

## 🧪 Testing

The application includes comprehensive test coverage for:
- Component rendering and interactions
- Redux state management
- User interactions and form submissions
- Responsive behavior

Run tests with:
\`\`\`bash
npm run test
\`\`\`

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Touch-friendly interface with appropriate button sizes
- Optimized layouts for small screens
- Swipe gestures for navigation
- Proper viewport configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Documentation](./DOCUMENTATION.md) for detailed technical information
2. Search existing issues in the repository
3. Create a new issue with detailed information about the problem

## 🔮 Future Enhancements

- [ ] Dark mode support
- [ ] Advanced search and filtering
- [ ] Bulk operations for candidates
- [ ] Integration with external APIs
- [ ] Advanced analytics and reporting
- [ ] Real-time notifications
- [ ] File upload and management
- [ ] Advanced form validation
- [ ] Accessibility improvements
- [ ] Performance optimizations

---

**Built with ❤️ using React, Redux, and TypeScript**
