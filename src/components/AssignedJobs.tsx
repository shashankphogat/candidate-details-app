import { User, Clock } from "lucide-react"

export default function AssignedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignee: "William Sample",
      date: "Jul 10, 2023",
      status: "Assigned",
    },
    {
      id: 2,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignee: "William Sample",
      date: "Jul 10, 2023",
      status: "Assigned",
    },
    {
      id: 3,
      title: "Senior Product Manager",
      company: "Recruit CRM",
      assignee: "William Sample",
      date: "Jul 10, 2023",
      status: "Assigned",
    },
  ]

  return (
    <div className="assigned-jobs">
      <div className="section-header">
        <h3>Assigned Job to William Sample</h3>
        <div className="header-actions">
          <button className="assign-btn">Assign To Job</button>
          <button className="view-all-btn">View All Assigned Jobs</button>
        </div>
      </div>

      <div className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <div className="job-avatar">M</div>
            <div className="job-info">
              <h4>{job.title}</h4>
              <p>{job.company}</p>
            </div>
            <div className="job-details">
              <div className="assignee">
                <User size={14} />
                <span>{job.assignee}</span>
              </div>
              <div className="date">
                <Clock size={14} />
                <span>{job.date}</span>
              </div>
            </div>
            <div className="job-status">
              <span className="status">{job.status}</span>
            </div>
            <div className="job-actions">
              <button className="view-files-btn">View Files</button>
              <div className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
