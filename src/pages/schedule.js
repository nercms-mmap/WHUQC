import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './schedule.module.css'; // Import the CSS file


function ScheduleHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.scheduleHeader}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Schedule for {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">Explore the schedule below.</p>
      </div>
    </header>
  );
}

export default function SchedulePage() {
  return (
    <Layout>
      <ScheduleHeader />
      <main className="container">
        <h1 className="schedule-header">Schedule</h1>
        <div className="schedule-table-container">
        <table className="schedule-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Topic</th>
        <th className="d-none d-lg-table-cell">Resources</th>
      </tr>
    </thead>
    <tbody>
      <tr id="jan-17-2024">
        <td>Jan 17</td>
        <td>Lecture #01: Course Overview & Relational Model</td>
        <td>
          <Link className="btn btn-success mr-3" to="/docs/classic_quantum">Lecture Notes</Link>
          <Link className="btn btn-success" to="/docs/blog">Slides</Link>
        </td>
      </tr>

    </tbody>
  </table>
        </div>
      </main>
    </Layout>
  );
}


