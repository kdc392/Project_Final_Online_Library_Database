const books = [
  {
    id: 1,
    title: "Fablehaven",
    author: "Brandon Mull",
    genre: "Fantasy Fiction",
    publication: "July 30, 2006",
    description:
      "Two siblings, Kendra and Seth Sorenson, visit their grandfather's mansion, which is secretly a reserve for mystical creatures",
    ImgURL: "https://m.media-amazon.com/images/I/51PIsDPmU-L._SY445_SX342_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 2,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian Fiction",
    publication: "September 14, 2008",
    description:
      "Each district is forced to send one boy and one girl, called 'tributes', to participate in the annual Hunger Games, a televised fight to the death",
    ImgURL: "https://m.media-amazon.com/images/I/410KouqgU4L._SY445_SX342_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    publication: "August 1965",
    description:
      "Paul Atreides, the 15-year-old heir to House Atreides, goes from adversity to becoming a messianic leader on the desert planet Arrakis, also known as Dune.",
    ImgURL: "https://m.media-amazon.com/images/I/81nq+ewtkcL._SY425_.jpg",
    reviews: {
      rating: null,
      comment: "",
    },
  },
  {
    id: 4,
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "Science Fiction",
    publication: "January 15, 1985",
    description:
      " Young Ender Wiggin is sent to a military academy in space to train to lead Earth's defense against an alien race",
    ImgURL: "https://m.media-amazon.com/images/I/81+IUsYtGTL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 5,
    title: "Divergent",
    author: "Veronica Roth ",
    genre: "Dystopian Fiction",
    publication: "April 26, 2011",
    description:
      "Beatrice Prior, also known as Tris, lives in a post-apocalyptic Chicago divided into five factions",
    ImgURL: "https://m.media-amazon.com/images/I/91oNu+R7EUL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 6,
    title: "Spiderwick Chronicles (1)",
    author: "Tony DiTerlizzi ",
    genre: "Fantasy Fiction",
    publication: "May 2003",
    description:
      "Old hand-written and illustrated book with information on different types of faeries in the surrounding forest",
    ImgURL: "https://m.media-amazon.com/images/I/91sBzm+G+rL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 7,
    title: "A Kiss Before Dying",
    author: "Ira Levin",
    genre: "Mystery",
    publication: "June 1953",
    description:
      "A charming, intelligent, and wealthy man sets his sights on a college student named Dorothy, intending to marry her for her family's money",
    ImgURL: "https://m.media-amazon.com/images/I/81x2+95YvBL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 8,
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    genre: "Romance",
    publication: "1597",
    description:
      "A young lovesick Romeo Montague falls instantly in love with rival family's Juliet Capulet, who is due to marry her father's choice",
    ImgURL: "https://m.media-amazon.com/images/I/61urB+bw1UL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 9,
    title: "We Have Always Lived in the Castle",
    author: "Shirley Jackson",
    genre: "Mystery",
    publication: "September 21, 1962",
    description:
      "Two eccentric sisters, Mary Katherine (Merricat) and Constance Blackwood, who live in isolation on their family's ancestral estate",
    ImgURL: "https://m.media-amazon.com/images/I/A1YlGmse1mL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 10,
    title: "Pride and Prejudice",
    author: "Jane Austen ",
    genre: "Romance",
    publication: "anuary 28, 1813",
    description:
      "Follows the relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
    ImgURL: "https://m.media-amazon.com/images/I/41xCxs0B+cL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 11,
    title: "Casino Royale (James Bond)",
    author: "Ian Fleming",
    genre: "Thriller",
    publication: "April 13, 1953",
    description:
      "Introduces the world to James Bond, also known as agent 007, a British secret agent",
    ImgURL: "https://m.media-amazon.com/images/I/91JYY6nSK8L._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 12,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    publication: "May 26, 1897",
    description:
      "Jonathan Harker takes a business trip and stays at the castle of a Transylvanian nobleman, Count Dracula",
    ImgURL: "https://m.media-amazon.com/images/I/51XkOP7amUS._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 13,
    title: "The Talented Mr. Ripley ",
    author: "Patricia Highsmith",
    genre: "Thriller",
    publication: "November 30, 1955",
    description:
      "Tom Ripley, a young American man with a talent for evil, travels to Italy to convince a wealthy industrialist's son to return home",
    ImgURL: "https://m.media-amazon.com/images/I/41qEh-ZO2CL._SY445_SX342_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 14,
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    publication: "January 28, 1977",
    description: "Torrance family moves into an isolated hotel for the winter",
    ImgURL: "https://m.media-amazon.com/images/I/81CuEX3W9UL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 15,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "History",
    publication: "November 26, 1859",
    description:
      "Takes place in London and Paris before and during the French Revolution following multiple characters",
    ImgURL: "https://m.media-amazon.com/images/I/91C0MECqJ+L._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 16,
    title: "The Long Goodbye",
    author: "Raymond Chandler",
    genre: "True Crime",
    publication: "1953",
    description:
      "Private investigator Philip Marlowe is enlisted by Terry Lennox, an alcoholic war veteran who is suspected of murdering his wife, to help him flee the country",
    ImgURL: "https://m.media-amazon.com/images/I/41zy7HO91SL._SY445_SX342_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 17,
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    genre: "History",
    publication: "September 27, 1997",
    description:
      "A young girl named Chiyo who is sold into the life of a geisha.",
    ImgURL: "https://m.media-amazon.com/images/I/61VT9Y3jKIL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 18,
    title: "The Godfather",
    author: "Mario Puzo",
    genre: "True Crime",
    publication: "March 10, 1969",
    description:
      "Tells the story of the Corleones, a fictional Italian-American Mafia family in New York City and Long Island, from 1945 to 1955",
    ImgURL: "https://m.media-amazon.com/images/I/31iZLNM2+eL._SY445_SX342_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 19,
    title: "I, Claudius",
    author: "Robert Graves",
    genre: "Biography",
    publication: "1934",
    description:
      "History of the Julio-Claudian dynasty and the early years of the Roman Empire",
    ImgURL: "https://m.media-amazon.com/images/I/61lnWRW8VAL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 20,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "Autobiography",
    publication: "June 25, 1947",
    description:
      "Diary kept by Anne Frank while hiding for two years with her family during the Nazi occupation of the Netherlands",
    ImgURL: "https://m.media-amazon.com/images/I/71qeWx83sxL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 21,
    title: "Thurgood Marshall: American Revolutionary",
    author: "Juan Williams ",
    genre: "biography",
    publication: "1998",
    description:
      "Based on eight years of research and interviews with over 150 sources on Thurgood Marshall, Associate Justice of the Supreme Court",
    ImgURL: "https://m.media-amazon.com/images/I/71XD-NwhQtL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 22,
    title: "The Story of My Life",
    author: "Helen Keller",
    genre: "Autobiography",
    publication: "1903",
    description: "Helen Keller's autobiography detailing her early life",
    ImgURL: "https://m.media-amazon.com/images/I/71Fkbqk0FYL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 23,
    title: "The Three Musketeers",
    author: " Alexandre Dumas",
    genre: "Action/Adventure",
    publication: "July 1844",
    description:
      "Four fictional heroes, D'Artagnan and his three musketeer friends Athos, Porthos, and Aramis, live in 17th and early 18th century France",
    ImgURL: "https://m.media-amazon.com/images/I/61vNDjkFuVL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 24,
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    genre: "Humor",
    publication: "April 1, 2007",
    description:
      "Greg Heffley attempts to become popular in his first year of middle school",
    ImgURL: "https://m.media-amazon.com/images/I/91XUENePBlL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 25,
    title: "Treasure Island",
    author: "Robert Louis Stevenson ",
    genre: "Action/Adventure",
    publication: "November 14, 1883",
    description:
      "Jim, a young boy goes in search of treasure after finding a treasure map",
    ImgURL: "https://m.media-amazon.com/images/I/41KoZ5LQK2L._SY445_SX342_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
  {
    id: 26,
    title: "The Adventures of Captain Underpants",
    author: "Dav Pilkey",
    genre: "Humor",
    publication: "September 1, 1997",
    description:
      "Fourth grade class clowns George Beard and Harold Hutchins create their own comic books",
    ImgURL: "https://m.media-amazon.com/images/I/71sy8CMF+cL._SY425_.jpg",
    reviews: {
      rating: null,
      description: "",
    },
  },
];

export default books;
  