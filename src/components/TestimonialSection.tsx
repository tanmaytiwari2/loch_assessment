import React, { useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import styles from "./TestimonialSection.module.css";

interface Testimonial {
  name: string;
  position: string;
  quote: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setHasDragged(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      if (hasDragged) {
        setHasDragged(false); // Reset for next click
        return;
      }
      const target = e.currentTarget as HTMLDivElement;
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>Testimonials</div>
        <Separator className={styles.separator} />
        <div className={styles.flexWrapper}>
          <div className={styles.imageContainer}>
            <img className={styles.image} alt="Vector" src="/vector2.svg" />
          </div>
          <div
            className={styles.carouselContainer}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={styles.testimonialCardWrapper}
                onClick={handleClick}
              >
                <Card className={styles.testimonialCard}>
                  <CardContent className={styles.testimonialCardHeader}>
                    <div className={styles.testimonialName}>
                      {testimonial.name}
                    </div>
                    <div className={styles.testimonialPosition}>
                      {testimonial.position}
                    </div>
                  </CardContent>
                  <div className={styles.testimonialQuote}>
                    {testimonial.quote}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
