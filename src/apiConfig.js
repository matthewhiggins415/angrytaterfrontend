let apiUrl

const apiUrls = {
  production: process.env.REACT_APP_API_PRODUCTION_URL,
  development: process.env.REACT_APP_API_DEVELOPMENT_URL
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl