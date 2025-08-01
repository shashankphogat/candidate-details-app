import { describe, it, expect } from "vitest"
import { screen, fireEvent } from "@testing-library/react"
import { renderWithProviders } from "@/test/test-utils"
import NotesPanel from "@/components/NotesPanel"

describe("NotesPanel", () => {
  it("renders panel header with user info", () => {
    renderWithProviders(<NotesPanel />)

    expect(screen.getByText("Phyllis Yang")).toBeInTheDocument()
    expect(screen.getByText("Jul 14, 2023, 4:04 pm")).toBeInTheDocument()
  })

  it("renders all tabs", () => {
    renderWithProviders(<NotesPanel />)

    const expectedTabs = ["All", "Notes & Calls", "Tasks", "Meeting", "Files"]
    expectedTabs.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument()
    })
  })

  it('has "All" as active tab by default', () => {
    renderWithProviders(<NotesPanel />)

    const allTab = screen.getByRole("button", { name: "All" })
    expect(allTab).toHaveClass("active")
  })

  it("changes active tab when clicked", () => {
    renderWithProviders(<NotesPanel />)

    const tasksTab = screen.getByRole("button", { name: "Tasks" })
    fireEvent.click(tasksTab)

    expect(tasksTab).toHaveClass("active")
    expect(screen.getByRole("button", { name: "All" })).not.toHaveClass("active")
  })

  it("renders note items", () => {
    renderWithProviders(<NotesPanel />)

    const noteTypes = screen.getAllByText("Note")
    expect(noteTypes).toHaveLength(3)

    const noteStatuses = screen.getAllByText("To Do")
    expect(noteStatuses).toHaveLength(3)

    const authors = screen.getAllByText("John Doe")
    expect(authors).toHaveLength(3)
  })

  it("renders note content", () => {
    renderWithProviders(<NotesPanel />)

    const noteContent = screen.getAllByText(/Lorem dolore sit at aute cupidatat/)
    expect(noteContent).toHaveLength(3)
  })

  it("renders associations links", () => {
    renderWithProviders(<NotesPanel />)

    const associations = screen.getAllByText("1 Association(s)")
    expect(associations).toHaveLength(3)
  })

  it("renders action buttons in header", () => {
    renderWithProviders(<NotesPanel />)

    const actionButtons = screen.getAllByRole("button").filter((button) => button.classList.contains("icon-btn"))
    expect(actionButtons.length).toBeGreaterThanOrEqual(4) // Phone, Video, Message, Calendar
  })
})
