import { atom } from "recoil";

//상태 관리할 초기값 설정.
export const flickrState = atom({
  key: "flickr",
  default: [],
});

export const tagState = atom({
  key: "tag",
  default: "landscape",
});
