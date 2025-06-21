import React from 'react';
import styles from './Events.module.css';

const Events = () => {
  const events = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHrYgH7gUUXV5G3HNLVkGZe8A-NR7sGeHnsKjrJsnNwFbhUHxUdrwcpqHZCTxzDxJQpHSN5MFEQf0aC_d2myiy-fVlQUx5OL1BeU2c9cZ2bAp6t5TmZrIqzlHQAUUja2a9CHSHNu3did-fkAdECimAcTfrAFVc9GAXitcZSn5FFizVPl1NvXHJuZObuQyTDYpmxFN7r8ulaV8ArljyQtgy0-pgwAGyILnd-9EvnlOEal0rTS0HkVetQIAQ8kS4i1k8TbcSbQd983Y",
      title: "Live Concert",
      date: "June 25, 2025",
      location: "Music Hall"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1kyJEByffh_b8MpM8lHIfwfshoD6AcdOs7NjlxkZeIy4SVOcW6kkrKwMeFc4Qwtjke4QvUxgv_qmPkpFmJp-Mr9rhTMdFs6c8iV4LTfSNzponBlZojljDYVqPR_9KsHNAhyjEM1DQryjBUaypBWDMc9Fv-ISU3IjsGCbpwrvaZneid-nLLgwTz4mXihwR2IxHK_mj6wk2DMW7rd_-NNjBRjLgVButkQBir4LNcdbRDYjjXmbswyzlYJQa88gFSFZ5vKm3XYk6xk",
      title: "Festival Performance",
      date: "July 10, 2025",
      location: "Outdoor Stage"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHrYgH7gUUXV5G3HNLVkGZe8A-NR7sGeHnsKjrJsnNwFbhUHxUdrwcpqHZCTxzDxJQpHSN5MFEQf0aC_d2myiy-fVlQUx5OL1BeU2c9cZ2bAp6t5TmZrIqzlHQAUUja2a9CHSHNu3did-fkAdECimAcTfrAFVc9GAXitcZSn5FFizVPl1NvXHJuZObuQyTDYpmxFN7r8ulaV8ArljyQtgy0-pgwAGyILnd-9EvnlOEal0rTS0HkVetQIAQ8kS4i1k8TbcSbQd983Y",
      title: "Private Show",
      date: "July 20, 2025",
      location: "VIP Lounge"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClick = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % events.length;
      } else {
        return (prevIndex - 1 + events.length) % events.length;
      }
    });
  };

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsHeader}>
          <h2>Upcoming Events</h2>
        </div>
        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventImageContainer} onClick={() => handleClick('next')}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className={styles.eventImage}
                />
                {currentIndex === index && (
                  <div className={styles.imageOverlay}>
                    <div className={styles.eventDetails}>
                      <h3>{event.title}</h3>
                      <p className={styles.eventDate}>{event.date}</p>
                      <p className={styles.eventLocation}>{event.location}</p>
                    </div>
                    <div className={styles.navigationButtons}>
                      <button 
                        className={styles.prevButton} 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick('prev');
                        }}
                      >
                        ←
                      </button>
                      <button 
                        className={styles.nextButton} 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick('next');
                        }}
                      >
                        →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
