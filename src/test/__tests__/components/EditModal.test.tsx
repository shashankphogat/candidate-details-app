import { describe, it, expect } from "vitest"
import { screen, fireEvent, waitFor } from "@testing-library/react"
import { renderWithProviders, mockCandidateData } from "@/test/test-utils"
import EditModal from "@/components/EditModal"

describe("EditModal", () => {
  const initialState = {
    candidate: {
      data: mockCandidateData,
      isEditing: true,
      editData: mockCandidateData,
    },
  }

  it("renders modal with form fields", () => {
    renderWithProviders(<EditModal />, { initialState })

    expect(screen.getByText("Edit Candidate Details")).toBeInTheDocument()
    expect(screen.getByDisplayValue("William Sample")).toBeInTheDocument()
    expect(screen.getByDisplayValue("Senior Product Manager")).toBeInTheDocument()
    expect(screen.getByDisplayValue("williamsample@gmail.com")).toBeInTheDocument()
  })

  it("updates form fields when typing", async () => {
    renderWithProviders(<EditModal />, { initialState })

    const nameInput = screen.getByDisplayValue("William Sample")
    fireEvent.change(nameInput, { target: { value: "John Doe" } })

    await waitFor(() => {
      expect(nameInput).toHaveValue("John Doe")
    })
  })

  it("dispatches updateEditData when form fields change", async () => {
    const { store } = renderWithProviders(<EditModal />, { initialState })

    const emailInput = screen.getByDisplayValue("williamsample@gmail.com")
    fireEvent.change(emailInput, { target: { value: "john@example.com" } })

    await waitFor(() => {
      const state = store.getState()
      expect(state.candidate.editData.email).toBe("john@example.com")
    })
  })

  it("dispatches saveChanges when save button is clicked", () => {
    const { store } = renderWithProviders(<EditModal />, { initialState })

    const saveButton = screen.getByText("Save Changes")
    fireEvent.click(saveButton)

    const state = store.getState()
    expect(state.candidate.isEditing).toBe(false)
  })

  it("dispatches cancelEdit when cancel button is clicked", () => {
    const { store } = renderWithProviders(<EditModal />, { initialState })

    const cancelButton = screen.getByText("Cancel")
    fireEvent.click(cancelButton)

    const state = store.getState()
    expect(state.candidate.isEditing).toBe(false)
  })

  it("dispatches cancelEdit when close button is clicked", () => {
    const { store } = renderWithProviders(<EditModal />, { initialState })

    const closeButton = screen.getByRole("button", { name: /close/i })
    fireEvent.click(closeButton)

    const state = store.getState()
    expect(state.candidate.isEditing).toBe(false)
  })

  it("renders all form fields with correct labels", () => {
    renderWithProviders(<EditModal />, { initialState })

    expect(screen.getByLabelText("Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Title")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Phone")).toBeInTheDocument()
    expect(screen.getByLabelText("Current Organization")).toBeInTheDocument()
    expect(screen.getByLabelText("Skills")).toBeInTheDocument()
    expect(screen.getByLabelText("Summary")).toBeInTheDocument()
    expect(screen.getByLabelText("Full Address")).toBeInTheDocument()
  })
})
