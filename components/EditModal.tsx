"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import { updateEditData, saveChanges, cancelEdit } from "@/store/candidateSlice"
import { X } from "lucide-react"

export default function EditModal() {
  const dispatch = useDispatch()
  const { editData } = useSelector((state: RootState) => state.candidate)

  const handleInputChange = (field: string, value: string) => {
    dispatch(updateEditData({ [field]: value }))
  }

  const handleSave = () => {
    dispatch(saveChanges())
  }

  const handleCancel = () => {
    dispatch(cancelEdit())
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Candidate Details</h2>
          <button className="close-btn" onClick={handleCancel}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={editData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Title</label>
              <input type="text" value={editData.title} onChange={(e) => handleInputChange("title", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" value={editData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" value={editData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Current Organization</label>
              <input
                type="text"
                value={editData.currentOrganization}
                onChange={(e) => handleInputChange("currentOrganization", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Skills</label>
              <input
                type="text"
                value={editData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Current Salary</label>
              <input
                type="text"
                value={editData.currentSalary}
                onChange={(e) => handleInputChange("currentSalary", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Salary Expectation</label>
              <input
                type="text"
                value={editData.salaryExpectation}
                onChange={(e) => handleInputChange("salaryExpectation", e.target.value)}
              />
            </div>

            <div className="form-group full-width">
              <label>Summary</label>
              <textarea
                value={editData.summary}
                onChange={(e) => handleInputChange("summary", e.target.value)}
                rows={3}
              />
            </div>

            <div className="form-group full-width">
              <label>Full Address</label>
              <textarea
                value={editData.fullAddress}
                onChange={(e) => handleInputChange("fullAddress", e.target.value)}
                rows={2}
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
