import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

//상태 관리할 초기값 설정.
const flickrState = atom({
  key: "flickr",
  default: [],
});

function App() {
  const [Pics, setPics] = useRecoilState(flickrState);
  const callFlickr = async () => {
    const key = "fefec6c874c53fb1655dae7c9e82ab25";
    const method_search = "flickr.photos.search";
    const url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=10&nojsoncallback=1&format=json&tags=landscape`;

    const res = await fetch(url);
    const body = await res.json();
    console.log(body.photos.photo);
    setPics(body.photos.photo);
  };
  useEffect(() => {
    callFlickr();
  }, []);
  return (
    <div>
      {Pics.map((pic) => {
        return (
          <article key={pic.id}>
            <h2>{pic.title}</h2>
          </article>
        );
      })}
    </div>
  );
}

export default App;
