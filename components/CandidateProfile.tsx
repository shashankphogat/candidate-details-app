"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import { setEditMode } from "@/store/candidateSlice"
import { Star, Bell, Edit, MoreVertical, Mail, Phone } from "lucide-react"

export default function CandidateProfile() {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.candidate)

  const handleEditClick = () => {
    dispatch(setEditMode(true))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "star-filled" : "star-empty"}
        fill={i < rating ? "#fbbf24" : "none"}
      />
    ))
  }

  return (
    <div className="candidate-profile">
      <div className="profile-header">
        <div className="profile-left">
          <div className="profile-image">
            <img src={data.profileImage || "/placeholder.svg"} alt={data.name} />
          </div>
          <div className="profile-info">
            <div className="name-section">
              <h2>{data.name}</h2>
              <div className="rating">{renderStars(data.rating)}</div>
            </div>
            <p className="title">{data.title}</p>
            <p className="location">
              {data.country} • {data.location}
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <div className="score-badge">1019.2 x 50</div>
          <div className="action-buttons">
            <button className="contact-linked">Contact Linked</button>
            <button className="icon-btn">
              <Star size={16} />
            </button>
            <button className="icon-btn">
              <Bell size={16} />
            </button>
            <button className="icon-btn" onClick={handleEditClick}>
              <Edit size={16} />
            </button>
            <button className="icon-btn">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <Mail size={16} />
          <span>{data.email}</span>
        </div>
        <div className="contact-item">
          <Phone size={16} />
          <span>{data.phone}</span>
        </div>
      </div>
    </div>
  )
}
