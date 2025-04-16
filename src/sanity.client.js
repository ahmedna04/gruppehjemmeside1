import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'f4r3itbk', 
  dataset: 'production',
  useCdn: false, 
  apiVersion: '2023-10-01', 
  token: import.meta.env.VITE_SANITY_API_TOKEN,
})

export default client
