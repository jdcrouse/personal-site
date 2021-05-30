const ArticlePreviewCard = ({
  title,
  preview,
  author,
  published_date,
  preview_image_url,
}) => {
  return (
    <div>
      {title}
      {preview}
      {author}
      {published_date}
      {preview_image_url}
    </div>
  );
};
export default ArticlePreviewCard;
