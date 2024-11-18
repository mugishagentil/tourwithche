import React from 'react';
import './AboutUs.css';
import { FaGlobeAfrica, FaCampground, FaUserTie, FaPlane, FaTree, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Component3() {
  // Using the useInView hook to check if the container is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the count animation only once when in view
    threshold: 0.3,    // 30% of the element must be visible to trigger the count
  });

  return (
    <div ref={ref}>
      <div className="stats-container">
        <div className="stat-item">
          <FaGlobeAfrica className="stat-icon" />
          <h3>
            {inView && <CountUp start={0} end={6} duration={2} />}
          </h3>
          <p>African countries</p>
        </div>
        <div className="stat-item">
          <FaCampground className="stat-icon" />
          <h3>
            {inView && <CountUp start={0} end={60} duration={2} suffix="+" />}
          </h3>
          <p>Camps and lodges</p>
        </div>
        <div className="stat-item">
          <FaUserTie className="stat-icon" />
          <h3>
            {inView && <CountUp start={0} end={30} duration={2} />}
          </h3>
          <p>Staff employed</p>
        </div>
        <div className="stat-item">
          <FaPlane className="stat-icon" />
          <h3>
            {inView && <CountUp start={0} end={10} duration={2} />}
          </h3>
          <p>Tourwithch Air planes</p>
        </div>
        <div className="stat-item">
          <FaTree className="stat-icon" />
          <h3>
            {inView && <CountUp start={0} end={6000} duration={3} />}
          </h3>
          <p>Acres of land (2.3M hectares)</p>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <h3>
            {inView && <CountUp start={0} end={400} duration={3} suffix="+" />}
          </h3>
          <p>Guests hosted per year</p>
        </div>
      </div>
    </div>
  );
}

export default Component3;
