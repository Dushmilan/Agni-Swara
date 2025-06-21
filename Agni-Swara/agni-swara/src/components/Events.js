import React from 'react';
import styles from './Events.module.css';

const Events = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAHrYgH7gUUXV5G3HNLVkGZe8A-NR7sGeHnsKjrJsnNwFbhUHxUdrwcpqHZCTxzDxJQpHSN5MFEQf0aC_d2myiy-fVlQUx5OL1BeU2c9cZ2bAp6t5TmZrIqzlHQAUUja2a9CHSHNu3did-fkAdECimAcTfrAFVc9GAXitcZSn5FFizVPl1NvXHJuZObuQyTDYpmxFN7r8ulaV8ArljyQtgy0-pgwAGyILnd-9EvnlOEal0rTS0HkVetQIAQ8kS4i1k8TbcSbQd983Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1kyJEByffh_b8MpM8lHIfwfshoD6AcdOs7NjlxkZeIy4SVOcW6kkrKwMeFc4Qwtjke4QvUxgv_qmPkpFmJp-Mr9rhTMdFs6c8iV4LTfSNzponBlZojljDYVqPR_9KsHNAhyjEM1DQryjBUaypBWDMc9Fv-ISU3IjsGCbpwrvaZneid-nLLgwTz4mXihwR2IxHK_mj6wk2DMW7rd_-NNjBRjLgVButkQBir4LNcdbRDYjjXmbswyzlYJQa88gFSFZ5vKm3XYk6xk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAHrYgH7gUUXV5G3HNLVkGZe8A-NR7sGeHnsKjrJsnNwFbhUHxUdrwcpqHZCTxzDxJQpHSN5MFEQf0aC_d2myiy-fVlQUx5OL1BeU2c9cZ2bAp6t5TmZrIqzlHQAUUja2a9CHSHNu3did-fkAdECimAcTfrAFVc9GAXitcZSn5FFizVPl1NvXHJuZObuQyTDYpmxFN7r8ulaV8ArljyQtgy0-pgwAGyILnd-9EvnlOEal0rTS0HkVetQIAQ8kS4i1k8TbcSbQd983Y"
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        <div className={styles.eventImage} 
             style={{ backgroundImage: `url(${images[currentIndex]})` }}
             onClick={() => handleClick('next')}
        >
          <div className={styles.imageOverlay}>
            <button className={styles.prevButton} onClick={(e) => {
              e.stopPropagation();
              handleClick('prev');
            }}>←</button>
            <button className={styles.nextButton} onClick={(e) => {
              e.stopPropagation();
              handleClick('next');
            }}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
