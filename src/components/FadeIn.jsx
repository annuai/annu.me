import React from 'react';
import { useInView } from '../hooks/useInView';
import './FadeIn.css';

const FadeIn = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`fade-in-view ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default FadeIn;
