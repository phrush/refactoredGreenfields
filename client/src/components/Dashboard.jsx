import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import EventDetail from './subcomponents/EventDetail.jsx';
import Map from './subcomponents/Map.jsx';
import EventList from './subcomponents/eventList.jsx';

const Dashboard = ({ data, linkToCalender, setDetailsBox, setCoordinates, setCoordinates2, deleteEvent }) => (
  <main className="container">

    {/* LEFT SIDE */}
    <section id="map">
      <section >
        {/* MAP */}
        <Map setCoordinates2={setCoordinates2} />

        {/* SELECTED EVENT */}
        <article id="EventDetail">
          <EventDetail
            setCoordinates={setCoordinates}
            event={data.detailsBox}
            linkToCalender={linkToCalender}
          />
        </article>
      </section>
    </section>

    {/* RIGHT SIDE */}
    <sidebar className="col-lg-4">
      <EventList
        setCoordinates={setCoordinates}
        eventlist={data.eventList}
        setDetailsBox={setDetailsBox}
        deleteEvent={deleteEvent}
      />
    </sidebar>
  </main>
);

Dashboard.propTypes = {
  data: PropTypes.object.isRequired,
  setDetailsBox: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  setCoordinates2: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  linkToCalender: PropTypes.func.isRequired,
};

export default Dashboard;
