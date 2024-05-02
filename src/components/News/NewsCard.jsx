import { timeAgo } from "../../functions/timesAgo";
import img from "../../assets/cryptonewsimg.jpg";

const NewsCard = ({ newsItem }) => {
  return (
    <a className="news-container" href={newsItem.url} target="_blank">
      <div className="news-items">
        <div className="news-item">
          <img src={img} alt={newsItem.title} className="news-image" />
          <p className="news-time">{timeAgo(newsItem.date)}</p>
          <h2 className="news-title">{newsItem.title}</h2>
          <p className="news-description">{newsItem.description}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
