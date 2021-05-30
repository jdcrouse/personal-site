import { useState, useEffect } from "react";
import ArticlePreviewCard from "./ArticlePreviewCard";

const DUMMY_DATA = [
  {
    title: "Cool article number one",
    preview: "This is a really great cool fun article",
    author: "Jason Derulo",
    published_date: "2020-05-21",
    preview_image_url:
      "https://assets.vogue.com/photos/5da740f872c7a00009108cec/16:9/w_1600%2Cc_limit/0.%2520and%25201.%2520Nicki%2520Minaj-1.jpg",
  },
  {
    title: "Less fun article",
    preview: "This one isn't as good tbh",
    author: "Mason Mouse",
    published_date: "2021-01-22",
    preview_image_url:
      "https://assets.vogue.com/photos/5da740f872c7a00009108cec/16:9/w_1600%2Cc_limit/0.%2520and%25201.%2520Nicki%2520Minaj-1.jpg",
  },
  {
    title: "Best article ever written",
    preview: "No article has been better than this one",
    author: "Sonjay Esuorc",
    published_date: "2018-07-23",
    preview_image_url:
      "https://assets.vogue.com/photos/5da740f872c7a00009108cec/16:9/w_1600%2Cc_limit/0.%2520and%25201.%2520Nicki%2520Minaj-1.jpg",
  },
  {
    title: "Ehhhhhh",
    preview: "Yee haw i sure do love writing",
    author: "Brock Hampton",
    published_date: "2011-12-29",
    preview_image_url:
      "https://assets.vogue.com/photos/5da740f872c7a00009108cec/16:9/w_1600%2Cc_limit/0.%2520and%25201.%2520Nicki%2520Minaj-1.jpg",
  },
];

const MusicWritingPage = () => {
  const [articlePreviews, setArticlePreviews] = useState([]);
  useEffect(() => setArticlePreviews(fetchArticlePreviews()), []);

  const fetchArticlePreviews = () => DUMMY_DATA;

  return (
    <>
      {articlePreviews.map((preview_data) => (
        <ArticlePreviewCard {...preview_data} key={preview_data.title} />
      ))}
    </>
  );
};
export default MusicWritingPage;
