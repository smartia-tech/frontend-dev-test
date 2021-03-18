import axios from "axios"

const URL = 'https://api.spacexdata.com/v4/launches'

export class DataService {
  static async getData (): Promise<any> {
    try {
      const res = await axios.get(URL)
      return res.data
    } catch (e) {
      console.log(e.message)
      return null
    }
  }
}