import { useState } from "react";

const CoinInfo = ({ heading, desc }) => {
  const [showMore, setShowMore] = useState(false);

  const shortDesc =
    desc?.slice(0, 350) + `<p  style='color: grey;'>Read More</p>`;

  const longDesc = desc + `<p style='color: grey;'>Read Less</p>`;

  return (
    <div className="grey-wrapper coin-info">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc?.length > 350 ? (
        <p
          className="coin-info-desc"
          onClick={() => setShowMore(!showMore)}
          dangerouslySetInnerHTML={{ __html: showMore ? longDesc : shortDesc }}
        />
      ) : (
        <p>{desc}</p>
      )}
    </div>
  );
};

export default CoinInfo;
