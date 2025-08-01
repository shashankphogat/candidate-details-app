import { describe, it, expect } from "vitest"
import { screen, fireEvent } from "@testing-library/react"
import { renderWithProviders } from "@/test/test-utils"
import TabNavigation from "@/components/TabNavigation"

describe("TabNavigation", () => {
  it("renders all tabs", () => {
    renderWithProviders(<TabNavigation />)

    const expectedTabs = [
      "All Details",
      "Assigned Jobs",
      "Related Emails",
      "Candidate Questions",
      "Hotlists",
      "Related Deals",
      "Contact(s) Pitched",
    ]

    expectedTabs.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument()
    })
  })

  it('has "All Details" as active tab by default', () => {
    renderWithProviders(<TabNavigation />)

    const allDetailsTab = screen.getByText("All Details")
    expect(allDetailsTab).toHaveClass("active")
  })

  it("changes active tab when clicked", () => {
    renderWithProviders(<TabNavigation />)

    const assignedJobsTab = screen.getByText("Assigned Jobs")
    fireEvent.click(assignedJobsTab)

    expect(assignedJobsTab).toHaveClass("active")
    expect(screen.getByText("All Details")).not.toHaveClass("active")
  })

  it("only one tab is active at a time", () => {
    renderWithProviders(<TabNavigation />)

    // Click on different tabs
    fireEvent.click(screen.getByText("Related Emails"))
    fireEvent.click(screen.getByText("Hotlists"))

    const activeTabs = screen.getAllByRole("button").filter((button) => button.classList.contains("active"))
    expect(activeTabs).toHaveLength(1)
    expect(activeTabs[0]).toHaveTextContent("Hotlists")
  })
})
