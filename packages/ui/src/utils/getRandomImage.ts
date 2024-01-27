import { randomString } from "@gb-adviser/common";

export const getRandomImage = () =>
  `https://picsum.photos/1920/1080?r=${randomString()}`;
