import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <main className="container">
        <h1>My React page</h1>
        <p>This is a React page</p>
        {/* Include the TABLE code here */}
        <table className="table table-striped" style={{ maxWidth: '99%' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Topic</th>
              <th className="d-none d-lg-table-cell">resources</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="" id="jan-17-2024">
            <td class="calendar-date">Jan 17 <a class="anchor d-none d-lg-inline" href="#jan-17-2024" aria-hidden="true" title="Anchor Link: Jan 17"><svg aria-hidden="true" class="anchor-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a></td>
            <td class="calendar-activity"><b class="lecture-title"><span class="d-none d-lg-inline">Lecture </span>#01: Course Overview &amp; Relational Model</b>

                  

                    {/* <dt class="col-4 col-sm-3 col-md-4 col-xl-2">•Readings:</dt>
                    <dd class="col-8 col-sm-9 col-md-8 col-xl-10 mb-0"><i class="fa fa-book"></i> Chapters 1-2, 27</dd>

                    <dt class="col-4 col-sm-3 col-md-4 col-xl-2 d-sm-block d-lg-none">•Slides:</dt>
                    <dd class="col-8 col-sm-9 col-md-8 col-xl-10 mb-0 d-sm-block d-lg-none"><a onclick="javascript:pageTracker._trackPageview('/downloads/spring2024/slides/01-relationalmodel.pdf');" href="https://15445.courses.cs.cmu.edu/spring2024/slides/01-relationalmodel.pdf" title="SLIDES (Lecture #01)" class="schedule-badge"><i class="fa fa-file-pdf-o "></i></a></dd>

                    <dt class="col-4 col-sm-3 col-md-4 col-xl-2 d-sm-block d-lg-none">•Notes:</dt>
                    <dd class="col-8 col-sm-9 col-md-8 col-xl-10 mb-0 d-sm-block d-lg-none"><a onclick="javascript:pageTracker._trackPageview('/downloads/spring2024/notes/01-relationalmodel.pdf');" href="https://15445.courses.cs.cmu.edu/spring2024/notes/01-relationalmodel.pdf" title="NOTES (Lecture #01)" class="schedule-badge"><i class="fa fa-file-text-o "></i></a></dd>

                    <dt class="col-4 col-sm-3 col-md-4 col-xl-2 d-sm-block d-lg-none">•Video:</dt>
                    <dd class="col-8 col-sm-9 col-md-8 col-xl-10 mb-0 d-sm-block d-lg-none"><a onclick="javascript:pageTracker._trackPageview('/outgoing/scs.hosted.panopto.com');" href="https://scs.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e458da9b-429c-4dde-b1db-b0fa01434ac5" title="VIDEO (Lecture #01)" class="schedule-badge"><i class="fa fa-file-video-o "></i></a></dd> */}
            </td>
              <td>slides, lecture notes</td>

              
            </tr>
            <tr className="" id="feb-07-2024">
              {/* Include table row content */}
            </tr>
            {/* Include more table rows as needed */}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
