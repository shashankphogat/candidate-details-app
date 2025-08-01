"use client"

import { useState } from "react"

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("All Details")

  const tabs = [
    "All Details",
    "Assigned Jobs",
    "Related Emails",
    "Candidate Questions",
    "Hotlists",
    "Related Deals",
    "Contact(s) Pitched",
  ]

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button key={tab} className={`tab ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
          {tab}
        </button>
      ))}
    </div>
  )
}
