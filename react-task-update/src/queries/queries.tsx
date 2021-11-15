import { client, Query } from '@tilework/opus'

const endpoint = process.env.REACT_APP_ENDPOINT || 'http://localhost:4000'
client.setEndpoint(endpoint)

export const getRequest = async (query: string) => {
  try {
    const request = new Query(query, true)
    const response = await client.post(request)
    return response
  } catch (error) {
    console.log(error)
    return []
  }
}
