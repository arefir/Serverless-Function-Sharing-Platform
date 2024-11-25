import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewSection.css';

function ReviewSection() {
  return (
    <section>
      <h2 className="reviews-title">Reviews</h2>
      <ReviewCard />
    </section>
  );
};

export default ReviewSection;
