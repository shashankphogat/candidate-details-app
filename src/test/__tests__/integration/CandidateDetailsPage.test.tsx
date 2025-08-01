import { describe, it, expect } from "vitest"
import { screen, fireEvent, waitFor } from "@testing-library/react"
import { renderWithProviders, mockCandidateData } from "@/test/test-utils"
import CandidateDetailsPage from "@/components/CandidateDetailsPage"

describe("CandidateDetailsPage Integration", () => {
  const initialState = {
    candidate: {
      data: mockCandidateData,
      isEditing: false,
      editData: mockCandidateData,
    },
  }

  it("renders all main components", () => {
    renderWithProviders(<CandidateDetailsPage />, { initialState })

    // Check for main sections
    expect(screen.getByText("William Sample")).toBeInTheDocument()
    expect(screen.getByText("Current Organization")).toBeInTheDocument()
    expect(screen.getByText("All Details")).toBeInTheDocument()
    expect(screen.getByText("Assigned Job to William Sample")).toBeInTheDocument()
    expect(screen.getByText("Phyllis Yang")).toBeInTheDocument()
  })

  it("opens edit modal when edit button is clicked", async () => {
    renderWithProviders(<CandidateDetailsPage />, { initialState })

    const editButton = screen.getByRole("button", { name: /edit/i })
    fireEvent.click(editButton)

    await waitFor(() => {
      expect(screen.getByText("Edit Candidate Details")).toBeInTheDocument()
    })
  })

  it("completes full edit workflow", async () => {
    const { store } = renderWithProviders(<CandidateDetailsPage />, { initialState })

    // Open edit modal
    const editButton = screen.getByRole("button", { name: /edit/i })
    fireEvent.click(editButton)

    await waitFor(() => {
      expect(screen.getByText("Edit Candidate Details")).toBeInTheDocument()
    })

    // Edit name field
    const nameInput = screen.getByDisplayValue("William Sample")
    fireEvent.change(nameInput, { target: { value: "John Updated" } })

    // Save changes
    const saveButton = screen.getByText("Save Changes")
    fireEvent.click(saveButton)

    await waitFor(() => {
      expect(screen.queryByText("Edit Candidate Details")).not.toBeInTheDocument()
    })

    // Verify changes are reflected
    expect(screen.getByText("John Updated")).toBeInTheDocument()

    // Verify store state
    const state = store.getState()
    expect(state.candidate.data.name).toBe("John Updated")
    expect(state.candidate.isEditing).toBe(false)
  })

  it("cancels edit workflow without saving changes", async () => {
    renderWithProviders(<CandidateDetailsPage />, { initialState })

    // Open edit modal
    const editButton = screen.getByRole("button", { name: /edit/i })
    fireEvent.click(editButton)

    await waitFor(() => {
      expect(screen.getByText("Edit Candidate Details")).toBeInTheDocument()
    })

    // Edit name field
    const nameInput = screen.getByDisplayValue("William Sample")
    fireEvent.change(nameInput, { target: { value: "Temporary Change" } })

    // Cancel changes
    const cancelButton = screen.getByText("Cancel")
    fireEvent.click(cancelButton)

    await waitFor(() => {
      expect(screen.queryByText("Edit Candidate Details")).not.toBeInTheDocument()
    })

    // Verify original data is still displayed
    expect(screen.getByText("William Sample")).toBeInTheDocument()
    expect(screen.queryByText("Temporary Change")).not.toBeInTheDocument()
  })

  it("renders breadcrumb navigation", () => {
    renderWithProviders(<CandidateDetailsPage />, { initialState })

    expect(screen.getByText("Candidates")).toBeInTheDocument()
    expect(screen.getByText("Robert Hardy")).toBeInTheDocument()
    expect(screen.getByText("ID - 231")).toBeInTheDocument()
  })
})
