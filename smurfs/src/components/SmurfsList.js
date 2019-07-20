import React from "react";
import { connect } from "react-redux";
import Smurf from './Smurf'
import Dashboard from "./Dashboard";

function SmurfsList(props) {
    const {fetchingSmurfs, smurfs, error} = props
    if (fetchingSmurfs) {
        return <p>Loading...</p>
    }
  return (
    <section>
      <p>Smurfs:</p>
      {smurfs.map((smurf, index) => {
          return (
              <Smurf key = {index} name = {smurf.name} age = {smurf.age} height = {smurf.height} id = {smurf.id} />
          )
      })}
      <Dashboard/>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(mapStateToProps)(SmurfsList);
