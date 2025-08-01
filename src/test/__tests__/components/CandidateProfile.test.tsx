import { describe, it, expect } from "vitest"
import { screen, fireEvent } from "@testing-library/react"
import { renderWithProviders, mockCandidateData } from "@/test/test-utils"
import CandidateProfile from "@/components/CandidateProfile"

describe("CandidateProfile", () => {
  const initialState = {
    candidate: {
      data: mockCandidateData,
      isEditing: false,
      editData: mockCandidateData,
    },
  }

  it("renders candidate information correctly", () => {
    renderWithProviders(<CandidateProfile />, { initialState })

    expect(screen.getByText("William Sample")).toBeInTheDocument()
    expect(screen.getByText("Senior Product Manager")).toBeInTheDocument()
    expect(screen.getByText("United States • Dallas")).toBeInTheDocument()
    expect(screen.getByText("williamsample@gmail.com")).toBeInTheDocument()
    expect(screen.getByText("+91 9021232326")).toBeInTheDocument()
  })

  it("displays the correct number of stars for rating", () => {
    renderWithProviders(<CandidateProfile />, { initialState })

    const stars = screen.getAllByTestId(/star-/)
    const filledStars = stars.filter((star) => star.classList.contains("star-filled"))
    expect(filledStars).toHaveLength(4) // rating is 4
  })

  it("renders profile image with correct src", () => {
    renderWithProviders(<CandidateProfile />, { initialState })

    const profileImage = screen.getByAltText("William Sample")
    expect(profileImage).toHaveAttribute("src", mockCandidateData.profileImage)
  })

  it("dispatches setEditMode when edit button is clicked", () => {
    const { store } = renderWithProviders(<CandidateProfile />, { initialState })

    const editButton = screen.getByRole("button", { name: /edit/i })
    fireEvent.click(editButton)

    const state = store.getState()
    expect(state.candidate.isEditing).toBe(true)
  })

  it("renders action buttons", () => {
    renderWithProviders(<CandidateProfile />, { initialState })

    expect(screen.getByText("Contact Linked")).toBeInTheDocument()
    expect(screen.getByText("1019.2 x 50")).toBeInTheDocument()
  })

  it("handles missing profile image gracefully", () => {
    const stateWithoutImage = {
      candidate: {
        ...initialState.candidate,
        data: { ...mockCandidateData, profileImage: "" },
      },
    }

    renderWithProviders(<CandidateProfile />, { initialState: stateWithoutImage })

    const profileImage = screen.getByAltText("William Sample")
    expect(profileImage).toHaveAttribute("src", "/placeholder.svg")
  })
})
