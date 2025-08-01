import type React from "react"
import type { ReactElement } from "react"
import { render, type RenderOptions } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import candidateReducer, { type CandidateData } from "@/store/candidateSlice"

// Mock candidate data for testing
export const mockCandidateData: CandidateData = {
  id: "231",
  name: "William Sample",
  title: "Senior Product Manager",
  location: "Dallas",
  country: "United States",
  email: "williamsample@gmail.com",
  phone: "+91 9021232326",
  currentOrganization: "World Bank Group",
  skills: "HTML, CSS, Javascript",
  availableFrom: "Jul, 14, 2023",
  currentSalary: "$6000",
  noticePeriod: "90 Days",
  fullAddress: "9400 Ashton Rd, Philadelphia...",
  resume: "Resume",
  totalExperience: "5 Years",
  summary: "Experienced product manager with expertise in digital transformation",
  currentEmploymentStatus: "Employed",
  dateOfBirth: "15 June 1993",
  relevantExperience: "7 Years",
  salaryExpectation: "$9000",
  status: "Submitted to Client",
  salaryType: "Annual",
  languageSkills: "English(Elementary proficiency)",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  rating: 4,
}

// Create a test store
export const createTestStore = (initialState?: any) => {
  return configureStore({
    reducer: {
      candidate: candidateReducer,
    },
    preloadedState: initialState,
  })
}

// Custom render function with Redux Provider
interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialState?: any
  store?: ReturnType<typeof createTestStore>
}

export function renderWithProviders(
  ui: ReactElement,
  { initialState, store = createTestStore(initialState), ...renderOptions }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from "@testing-library/react"
