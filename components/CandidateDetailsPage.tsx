"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import Sidebar from "./Sidebar"
import Header from "./Header"
import CandidateProfile from "./CandidateProfile"
import CandidateDetails from "./CandidateDetails"
import TabNavigation from "./TabNavigation"
import AssignedJobs from "./AssignedJobs"
import NotesPanel from "./NotesPanel"
import EditModal from "./EditModal"

export default function CandidateDetailsPage() {
  const dispatch = useDispatch()
  const { isEditing } = useSelector((state: RootState) => state.candidate)

  return (
    <div className="candidate-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <div className="left-content">
            <div className="breadcrumb">
              <span>Candidates</span>
              <span className="separator">{">"}</span>
              <span>Robert Hardy</span>
              <span className="separator">{">"}</span>
              <span>ID - 231</span>
            </div>
            <CandidateProfile />
            <CandidateDetails />
            <TabNavigation />
            <AssignedJobs />
          </div>
          <NotesPanel />
        </div>
      </div>
      {isEditing && <EditModal />}
    </div>
  )
}
