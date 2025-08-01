import { describe, it, expect } from "vitest"
import candidateReducer, { setEditMode, updateEditData, saveChanges, cancelEdit } from "@/store/candidateSlice"
import { mockCandidateData } from "@/test/test-utils"

describe("candidateSlice", () => {
  const initialState = {
    data: mockCandidateData,
    isEditing: false,
    editData: mockCandidateData,
  }

  it("should return the initial state", () => {
    expect(candidateReducer(undefined, { type: "unknown" })).toEqual(
      expect.objectContaining({
        isEditing: false,
        data: expect.objectContaining({
          name: "William Sample",
          title: "Senior Product Manager",
        }),
      }),
    )
  })

  it("should handle setEditMode to true", () => {
    const actual = candidateReducer(initialState, setEditMode(true))
    expect(actual.isEditing).toBe(true)
    expect(actual.editData).toEqual(mockCandidateData)
  })

  it("should handle setEditMode to false", () => {
    const editingState = { ...initialState, isEditing: true }
    const actual = candidateReducer(editingState, setEditMode(false))
    expect(actual.isEditing).toBe(false)
  })

  it("should handle updateEditData", () => {
    const updates = { name: "John Doe", email: "john@example.com" }
    const actual = candidateReducer(initialState, updateEditData(updates))
    expect(actual.editData.name).toBe("John Doe")
    expect(actual.editData.email).toBe("john@example.com")
    expect(actual.editData.title).toBe(mockCandidateData.title) // unchanged
  })

  it("should handle saveChanges", () => {
    const editingState = {
      ...initialState,
      isEditing: true,
      editData: { ...mockCandidateData, name: "Updated Name" },
    }
    const actual = candidateReducer(editingState, saveChanges())
    expect(actual.isEditing).toBe(false)
    expect(actual.data.name).toBe("Updated Name")
  })

  it("should handle cancelEdit", () => {
    const editingState = {
      ...initialState,
      isEditing: true,
      editData: { ...mockCandidateData, name: "Changed Name" },
    }
    const actual = candidateReducer(editingState, cancelEdit())
    expect(actual.isEditing).toBe(false)
    expect(actual.editData).toEqual(mockCandidateData) // reverted
  })
})
