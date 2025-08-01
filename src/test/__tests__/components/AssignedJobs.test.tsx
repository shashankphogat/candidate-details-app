import { describe, it, expect } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithProviders } from "@/test/test-utils"
import AssignedJobs from "@/components/AssignedJobs"

describe("AssignedJobs", () => {
  it("renders section header with title and buttons", () => {
    renderWithProviders(<AssignedJobs />)

    expect(screen.getByText("Assigned Job to William Sample")).toBeInTheDocument()
    expect(screen.getByText("Assign To Job")).toBeInTheDocument()
    expect(screen.getByText("View All Assigned Jobs")).toBeInTheDocument()
  })

  it("renders job items with correct information", () => {
    renderWithProviders(<AssignedJobs />)

    // Check for job titles
    const jobTitles = screen.getAllByText("Senior Product Manager")
    expect(jobTitles).toHaveLength(3) // 3 jobs with same title

    // Check for company names
    const companyNames = screen.getAllByText("Recruit CRM")
    expect(companyNames).toHaveLength(3)

    // Check for assignee names
    const assigneeNames = screen.getAllByText("William Sample")
    expect(assigneeNames).toHaveLength(4) // 3 in jobs + 1 in header
  })

  it("renders job status and dates", () => {
    renderWithProviders(<AssignedJobs />)

    const statuses = screen.getAllByText("Assigned")
    expect(statuses).toHaveLength(3)

    const dates = screen.getAllByText("Jul 10, 2023")
    expect(dates).toHaveLength(3)
  })

  it("renders toggle switches for each job", () => {
    renderWithProviders(<AssignedJobs />)

    const toggles = screen.getAllByRole("checkbox")
    expect(toggles).toHaveLength(3)

    // All toggles should be checked by default
    toggles.forEach((toggle) => {
      expect(toggle).toBeChecked()
    })
  })

  it("renders view files buttons", () => {
    renderWithProviders(<AssignedJobs />)

    const viewFilesButtons = screen.getAllByText("View Files")
    expect(viewFilesButtons).toHaveLength(3)
  })

  it("renders job avatars", () => {
    renderWithProviders(<AssignedJobs />)

    const avatars = screen.getAllByText("M")
    expect(avatars).toHaveLength(3)
  })
})
