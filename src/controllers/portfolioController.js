import { profile, skills, projects, experience, education } from '../models/portfolioModel'

export const getProfile = () => profile
export const getSkills = () => skills
export const getProjects = () => projects
export const getExperience = () => experience
export const getEducation = () => education
export const getProjectById = (id) => projects.find(p => p.id === id) || null
