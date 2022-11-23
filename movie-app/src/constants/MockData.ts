import listBlack from '../assets/list-black.svg';
import heartBlack from '../assets/heart-black.svg';
import starBlack from '../assets/star-black.svg';
import watchListBlack from '../assets/watch-list-black.svg';
import { IPageMovie } from '../interfaces/Movie/IPageMovie';

const navHeader = [
  {
    id: 1,
    title: 'Movies',
    items: [
      {
        idItem: 1,
        titleItem: 'Popular',
        pathItem: '/',
      },
      {
        idItem: 2,
        titleItem: 'Now Playing',
        pathItem: '/now-playing',
      },
      {
        idItem: 3,
        titleItem: 'Upcoming',
        pathItem: '/up-coming',
      },
      {
        idItem: 4,
        titleItem: 'Top Rated',
        pathItem: '/top-rated',
      },
    ],
    path: '/',
  },
  {
    id: 2,
    title: 'Favorite Movies',
    items: [],
    path: '/favorite-movies',
  },
];

const optionsContent = [
  {
    id: 1,
    title: 'Add to list',
    src: listBlack,
    alt: 'Add to list',
  },
  {
    id: 2,
    title: 'Favorite',
    src: heartBlack,
    alt: 'Favorite',
  },
  {
    id: 3,
    title: 'Watchlist',
    src: watchListBlack,
    alt: 'Watchlist',
  },
  {
    id: 4,
    title: 'Your rating',
    src: starBlack,
    alt: 'Your rating',
  },
];

const options = [
  {
    id: 1,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg',
    alt: 'Add to list',
    text: 'Add to list',
  },
  {
    id: 2,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg',
    alt: 'Favorite',
    text: 'Remove from your favorite list',
  },
  {
    id: 3,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg',
    alt: 'Watchlist',
    text: 'Add to your watchlist',
  },
  {
    id: 4,
    src: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg',
    alt: 'Your rating',
    text: 'Rate It!',
  },
];

const navFooter = [
  {
    id: 1,
    title: 'THE BASICS',
    items: [
      {
        idItem: 1,
        titleItem: 'About TMDB',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'Contact Us',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Support Forums',
        pathItem: '#',
      },
      {
        idItem: 4,
        titleItem: 'API',
        pathItem: '#',
      },
      {
        idItem: 5,
        titleItem: 'System Status',
        pathItem: '#',
      },
    ],
    path: '/',
  },
  {
    id: 2,
    title: 'GET INVOLVED',
    items: [
      {
        idItem: 1,
        titleItem: 'Contribution Bible',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'Add New Movie',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Add New TV Show',
        pathItem: '#',
      },
    ],
    path: '#',
  },
  {
    id: 3,
    title: 'COMMUNITY',
    items: [
      {
        idItem: 1,
        titleItem: 'Guidelines',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'Discussions',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Leaderboard',
        pathItem: '#',
      },
      {
        idItem: 4,
        titleItem: 'Twitter',
        pathItem: '#',
      },
    ],
    path: '#',
  },
  {
    id: 4,
    title: 'LEGAL',
    items: [
      {
        idItem: 1,
        titleItem: 'Terms of Use',
        pathItem: '#',
      },
      {
        idItem: 2,
        titleItem: 'API Terms of Use',
        pathItem: '#',
      },
      {
        idItem: 3,
        titleItem: 'Privacy Policy',
        pathItem: '#',
      },
    ],
    path: '#',
  },
];

const sortingOptions = [
  {
    id: 1,
    title: 'Popularity Descending',
    sort_by: 'popularity.desc',
  },
  {
    id: 2,
    title: 'Popularity Ascending',
    sort_by: 'popularity.asc',
  },
  {
    id: 3,
    title: 'Rating Descending',
    sort_by: 'vote_average.desc',
  },
  {
    id: 4,
    title: 'Rating Ascending',
    sort_by: 'vote_average.asc',
  },
  {
    id: 5,
    title: 'Release Date Descending',
    sort_by: 'primary_release_date.desc',
  },
  {
    id: 6,
    title: 'Release Date Ascending',
    sort_by: 'primary_release_date.asc',
  },
  {
    id: 7,
    title: 'Title (A-Z)',
    sort_by: 'title.asc',
  },
  {
    id: 8,
    title: 'Title (Z-A)',
    sort_by: 'title.desc',
  },
];

/**
 * Mock data of unit test
 */

const mockInp1 = [
  {
    adult: false,
    backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
    belongs_to_collection: [],
    budget: 0,
    genres: [],
    homepage:
      'https://www.disneyplus.com/movies/beyond-infinity-buzz-and-the-journey-to-lightyear/6UHRsekPfYyP',
    id: 979163,
    imdb_id: 'tt16026684',
    original_language: 'en',
    original_title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
    overview:
      'Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar’s Lightyear. Dive into the origin and cultural impact of everyone’s favorite Space Ranger, the art of designing a new “human Buzz,” and the challenges faced by the Lightyear crew along the way.',
    popularity: 1852.057,
    poster_path: '/3dhQksZrIeRYP8jbB0J1SLW6HVW.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2022-06-10',
    revenue: 0,
    runtime: 35,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
    video: false,
    vote_average: 7.4,
    vote_count: 100,
    genre_ids: [],
  },
  {
    adult: false,
    backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
    belongs_to_collection: [],
    budget: 0,
    genres: [],
    homepage:
      'https://www.disneyplus.com/movies/beyond-infinity-buzz-and-the-journey-to-lightyear/6UHRsekPfYyP',
    id: 453395,
    imdb_id: 'tt16026684',
    original_language: 'en',
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    popularity: 1852.057,
    poster_path: '/3dhQksZrIeRYP8jbB0J1SLW6HVW.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2022-06-10',
    revenue: 0,
    runtime: 35,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Doctor Strange in the Multiverse of Madness',
    video: false,
    vote_average: 7.4,
    vote_count: 100,
    genre_ids: [],
  },
];

const mockInp2 = [
  {
    adult: false,
    backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
    belongs_to_collection: [],
    budget: 0,
    genres: [],
    homepage:
      'https://www.disneyplus.com/movies/beyond-infinity-buzz-and-the-journey-to-lightyear/6UHRsekPfYyP',
    id: 453395,
    imdb_id: 'tt16026684',
    original_language: 'en',
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    popularity: 1852.057,
    poster_path: '/3dhQksZrIeRYP8jbB0J1SLW6HVW.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2022-06-10',
    revenue: 0,
    runtime: 35,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Doctor Strange in the Multiverse of Madness',
    video: false,
    vote_average: 7.4,
    vote_count: 100,
    genre_ids: [],
  },
];

const mockResult = [
  {
    adult: false,
    backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
    belongs_to_collection: [],
    budget: 0,
    genres: [],
    homepage:
      'https://www.disneyplus.com/movies/beyond-infinity-buzz-and-the-journey-to-lightyear/6UHRsekPfYyP',
    id: 979163,
    imdb_id: 'tt16026684',
    original_language: 'en',
    original_title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
    overview:
      'Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar’s Lightyear. Dive into the origin and cultural impact of everyone’s favorite Space Ranger, the art of designing a new “human Buzz,” and the challenges faced by the Lightyear crew along the way.',
    popularity: 1852.057,
    poster_path: '/3dhQksZrIeRYP8jbB0J1SLW6HVW.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2022-06-10',
    revenue: 0,
    runtime: 35,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
    video: false,
    is_favorite: false,
    vote_average: 7.4,
    vote_count: 100,
    genre_ids: [],
  },
  {
    adult: false,
    backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
    belongs_to_collection: [],
    budget: 0,
    genres: [],
    homepage:
      'https://www.disneyplus.com/movies/beyond-infinity-buzz-and-the-journey-to-lightyear/6UHRsekPfYyP',
    id: 453395,
    imdb_id: 'tt16026684',
    original_language: 'en',
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    popularity: 1852.057,
    poster_path: '/3dhQksZrIeRYP8jbB0J1SLW6HVW.jpg',
    production_companies: [],
    production_countries: [],
    release_date: '2022-06-10',
    revenue: 0,
    runtime: 35,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Doctor Strange in the Multiverse of Madness',
    video: false,
    is_favorite: true,
    vote_average: 7.4,
    vote_count: 100,
    genre_ids: [],
  },
];

const mockMovieOriginal: IPageMovie[] = [
  {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
        genre_ids: [14, 28, 12],
        id: 453395,
        original_language: 'en',
        original_title: 'Doctor Strange in the Multiverse of Madness',
        overview:
          'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
        popularity: 12833.993,
        poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
        release_date: '2022-05-04',
        title: 'Doctor Strange in the Multiverse of Madness',
        video: false,
        vote_average: 7.5,
        vote_count: 3596,
      },
      {
        adult: false,
        backdrop_path: '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg',
        genre_ids: [14, 12, 28],
        id: 338953,
        original_language: 'en',
        original_title: 'Fantastic Beasts: The Secrets of Dumbledore',
        overview:
          "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        popularity: 3338.797,
        poster_path: '/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',
        release_date: '2022-04-06',
        title: 'Fantastic Beasts: The Secrets of Dumbledore',
        video: false,
        vote_average: 6.8,
        vote_count: 2067,
      },
    ],
    total_pages: 5,
    total_results: 2,
  },
  {
    page: 1,
    results: [
      {
        vote_average: 6.7,
        overview:
          'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
        release_date: '2022-06-01',
        adult: false,
        backdrop_path: '/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg',
        vote_count: 854,
        genre_ids: [28, 12, 878],
        id: 507086,
        original_language: 'en',
        original_title: 'Jurassic World Dominion',
        poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
        title: 'Jurassic World Dominion',
        video: false,
        popularity: 1992.373,
      },
      {
        vote_average: 6.5,
        overview:
          'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',
        release_date: '2022-03-30',
        adult: false,
        backdrop_path: '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg',
        vote_count: 1863,
        genre_ids: [28, 878, 14],
        id: 526896,
        original_language: 'en',
        original_title: 'Morbius',
        poster_path: '/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
        title: 'Morbius',
        video: false,
        popularity: 2365.981,
      },
      {
        poster_path: '/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',
        video: false,
        vote_average: 6.8,
        overview:
          "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        release_date: '2022-04-06',
        id: 338953,
        adult: false,
        backdrop_path: '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg',
        vote_count: 2067,
        genre_ids: [14, 12, 28],
        title: 'Fantastic Beasts: The Secrets of Dumbledore',
        original_language: 'en',
        original_title: 'Fantastic Beasts: The Secrets of Dumbledore',
        popularity: 3338.797,
      },
    ],
    total_pages: 1,
    total_results: 4,
  },
];

const mockChipOriginal = {
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};

const mockChip = [
  {
    id: 1,
    name: 'Action',
    actived: false,
  },
  {
    id: 2,
    name: 'Fantasy',
    actived: false,
  },
];

const mockResultsChip = [
  {
    id: 1,
    name: 'Action',
    actived: true,
  },
  {
    id: 2,
    name: 'Fantasy',
    actived: false,
  },
];

export {
  navHeader,
  optionsContent,
  options,
  navFooter,
  sortingOptions,
  mockInp1,
  mockInp2,
  mockResult,
  mockMovieOriginal,
  mockChipOriginal,
  mockChip,
  mockResultsChip,
};
