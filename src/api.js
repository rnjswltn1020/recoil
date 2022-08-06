import { SelectorFamily } from "recoil";
import axios from "axios";

export const callFlickr =SelectorFamily({
    key:'callFlickr',
    get:  async (tag) => {
  const key = "fefec6c874c53fb1655dae7c9e82ab25";
  const method_search = "flickr.photos.search";
  const url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=10&nojsoncallback=1&format=json&tags=${tag}`;

  const res = await axios(url).get();
  const body = await res.data;
  console.log(body.photos.photo);
  return body.photos.photo;

    };
})