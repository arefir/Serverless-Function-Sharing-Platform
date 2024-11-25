import React from 'react';
import './ReviewCard.css';

function ReviewCard() {
  return (
    <article className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa4723eb13873c8118e958943f68929452cf594aa79ec7b14f210731c2e9e94?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="reviewer-avatar" />
          <h3 className="reviewer-name">Mashita</h3>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bfba1d9f9b182425eaf7a337a07cdd501bdf9d9bd006a20a41a28f142832a58?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="review-rating" />
      </div>
      <p className="review-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dolor id nisl scelerisque pretium. Pellentesque est sem, varius non aliquet sed, volutpat ut massa. Maecenas cursus in magna et pulvinar.
      </p>
      <time className="review-timestamp">18 days ago</time>
    </article>
  );
};

export default ReviewCard;
