import { describe, it, expect } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithProviders, mockCandidateData } from "@/test/test-utils"
import CandidateDetails from "@/components/CandidateDetails"

describe("CandidateDetails", () => {
  const initialState = {
    candidate: {
      data: mockCandidateData,
      isEditing: false,
      editData: mockCandidateData,
    },
  }

  it("renders all candidate details correctly", () => {
    renderWithProviders(<CandidateDetails />, { initialState })

    // Check left column data
    expect(screen.getByText("Current Organization")).toBeInTheDocument()
    expect(screen.getByText("World Bank Group")).toBeInTheDocument()
    expect(screen.getByText("Skills")).toBeInTheDocument()
    expect(screen.getByText("HTML, CSS, Javascript")).toBeInTheDocument()
    expect(screen.getByText("Available From")).toBeInTheDocument()
    expect(screen.getByText("Jul, 14, 2023")).toBeInTheDocument()

    // Check right column data
    expect(screen.getByText("Summary")).toBeInTheDocument()
    expect(screen.getByText("Experienced product manager with expertise in digital transformation")).toBeInTheDocument()
    expect(screen.getByText("Current Employment Status")).toBeInTheDocument()
    expect(screen.getByText("Employed")).toBeInTheDocument()
  })

  it("displays all detail items with labels and values", () => {
    renderWithProviders(<CandidateDetails />, { initialState })

    const detailItems = screen.getAllByTestId(/detail-item-/)
    expect(detailItems.length).toBeGreaterThan(10) // Should have multiple detail items

    // Check specific items
    expect(screen.getByText("$6000")).toBeInTheDocument() // Current Salary
    expect(screen.getByText("$9000")).toBeInTheDocument() // Salary Expectation
    expect(screen.getByText("90 Days")).toBeInTheDocument() // Notice Period
    expect(screen.getByText("5 Years")).toBeInTheDocument() // Total Experience
  })

  it("renders details in two-column grid layout", () => {
    renderWithProviders(<CandidateDetails />, { initialState })

    const detailsGrid = screen.getByTestId("details-grid")
    expect(detailsGrid).toHaveClass("details-grid")
  })

  it("updates when candidate data changes", () => {
    const updatedData = {
      ...mockCandidateData,
      name: "Updated Name",
      currentSalary: "$8000",
    }

    const updatedState = {
      candidate: {
        data: updatedData,
        isEditing: false,
        editData: updatedData,
      },
    }

    renderWithProviders(<CandidateDetails />, { initialState: updatedState })

    expect(screen.getByText("$8000")).toBeInTheDocument()
  })
})
