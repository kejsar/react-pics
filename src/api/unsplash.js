import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID x9Pf5-vbvo3x-vyZU8IGPPcFnoGVVesArBnjZtepdmU",
  },
});
