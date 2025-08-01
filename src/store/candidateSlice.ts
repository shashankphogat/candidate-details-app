import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface CandidateData {
  id: string
  name: string
  title: string
  location: string
  country: string
  email: string
  phone: string
  currentOrganization: string
  skills: string
  availableFrom: string
  currentSalary: string
  noticePeriod: string
  fullAddress: string
  resume: string
  totalExperience: string
  summary: string
  currentEmploymentStatus: string
  dateOfBirth: string
  relevantExperience: string
  salaryExpectation: string
  status: string
  salaryType: string
  languageSkills: string
  profileImage: string
  rating: number
}

interface CandidateState {
  data: CandidateData
  isEditing: boolean
  editData: CandidateData
}

const initialCandidateData: CandidateData = {
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

const initialState: CandidateState = {
  data: initialCandidateData,
  isEditing: false,
  editData: initialCandidateData,
}

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload
      if (action.payload) {
        state.editData = { ...state.data }
      }
    },
    updateEditData: (state, action: PayloadAction<Partial<CandidateData>>) => {
      state.editData = { ...state.editData, ...action.payload }
    },
    saveChanges: (state) => {
      state.data = { ...state.editData }
      state.isEditing = false
    },
    cancelEdit: (state) => {
      state.editData = { ...state.data }
      state.isEditing = false
    },
  },
})

export const { setEditMode, updateEditData, saveChanges, cancelEdit } = candidateSlice.actions
export default candidateSlice.reducer
