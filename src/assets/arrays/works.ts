export interface Works {
  id: number;
  image?: string;
  name: string;
  text: string;
  urlWebsite: string;
  urlGithub: string;
}

export const works: Works[] = [
  {
    id: 1,
    image: "../../../assets/images/netflix-clone.png",
    name: "Netflix Clone",
    text: "Netflix Clone is a web based application built on React Javascript. It relies on The Movie Database API to fetch the content displayed in real time.It utilises AXIOS for fetch requests. The application also uses a couple of other APIs such as movie-trailer to fetch youtube movie trailers",
    urlWebsite: "https://netflix-clone-41e40.web.app/",
    urlGithub: "https://github.com/okore-lens/Netflix-clone",
  },
  {
    id: 2,
    image: "../../../assets/images/about-img.jpg",
    name: "Netflix Clone",
    text: "Netflix Clone is a web based application built on React Javascript. It relies on The Movie Database API to fetch the content displayed in real time.It utilises AXIOS for fetch requests. The application also uses a couple of other APIs such as movie-trailer to fetch youtube movie trailers",
    urlWebsite: "https://netflix-clone-41e40.web.app/",
    urlGithub: "https://github.com/okore-lens/Netflix-clone",
  },
  {
    id: 3,
    image: "../../../assets/images/icon.png",
    name: "Netflix Clone",
    text: "Netflix Clone is a web based application built on React Javascript. It relies on The Movie Database API to fetch the content displayed in real time.It utilises AXIOS for fetch requests. The application also uses a couple of other APIs such as movie-trailer to fetch youtube movie trailers",
    urlWebsite: "https://netflix-clone-41e40.web.app/",
    urlGithub: "https://github.com/okore-lens/Netflix-clone",
  },
];
