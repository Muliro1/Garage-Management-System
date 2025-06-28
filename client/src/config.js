// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:3000';

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/login`,
  SIGNUP: `${API_BASE_URL}/signup`,
  LOGOUT: `${API_BASE_URL}/logout`,
  
  // Admin endpoints
  ADMIN_LOGIN: `${API_BASE_URL}/admins/login`,
  ADMIN_SIGNUP: `${API_BASE_URL}/admins/signup`,
  ADMIN_LOGOUT: `${API_BASE_URL}/admins/logout`,
  ADMIN_ME: `${API_BASE_URL}/admins/me`,
  ADMINS: `${API_BASE_URL}/admins`,
  
  // Guard endpoints
  GUARD_LOGIN: `${API_BASE_URL}/guards/login`,
  GUARD_SIGNUP: `${API_BASE_URL}/guards/signup`,
  GUARD_LOGOUT: `${API_BASE_URL}/guards/logout`,
  
  // Technician endpoints
  TECHNICIAN_LOGIN: `${API_BASE_URL}/technicians/login`,
  TECHNICIAN_SIGNUP: `${API_BASE_URL}/technicians/signup`,
  TECHNICIAN_LOGOUT: `${API_BASE_URL}/technicians/logout`,
  
  // Resource endpoints
  USERS: `${API_BASE_URL}/users`,
  VEHICLES: `${API_BASE_URL}/vehicles`,
  TECHNICIANS: `${API_BASE_URL}/technicians`,
  PARTS: `${API_BASE_URL}/parts`,
  GUARDS: `${API_BASE_URL}/guards`,
  PROFILE: `${API_BASE_URL}/profile`,
};

export default API_BASE_URL; 