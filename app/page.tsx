"use client"

import { Provider } from "react-redux"
import { store } from "@/store/store"
import CandidateDetailsPage from "@/components/CandidateDetailsPage"

export default function Home() {
  return (
    <Provider store={store}>
      <div className="app">
        <CandidateDetailsPage />
      </div>
    </Provider>
  )
}
