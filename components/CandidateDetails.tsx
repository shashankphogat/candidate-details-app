"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"

export default function CandidateDetails() {
  const { data } = useSelector((state: RootState) => state.candidate)

  const leftColumnData = [
    { label: "Current Organization", value: data.currentOrganization },
    { label: "Skills", value: data.skills },
    { label: "Available From", value: data.availableFrom },
    { label: "Current Salary", value: data.currentSalary },
    { label: "Notice Period", value: data.noticePeriod },
    { label: "Full Address", value: data.fullAddress },
    { label: "Resume", value: data.resume },
    { label: "Total Experience", value: data.totalExperience },
  ]

  const rightColumnData = [
    { label: "Summary", value: data.summary },
    { label: "Current Employment Status", value: data.currentEmploymentStatus },
    { label: "Date of Birth", value: data.dateOfBirth },
    { label: "Relevant Experience", value: data.relevantExperience },
    { label: "Salary Expectation", value: data.salaryExpectation },
    { label: "Status", value: data.status },
    { label: "Salary Type", value: data.salaryType },
    { label: "Language Skills", value: data.languageSkills },
  ]

  return (
    <div className="candidate-details">
      <div className="details-grid">
        <div className="details-column">
          {leftColumnData.map((item, index) => (
            <div key={index} className="detail-item">
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="details-column">
          {rightColumnData.map((item, index) => (
            <div key={index} className="detail-item">
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
