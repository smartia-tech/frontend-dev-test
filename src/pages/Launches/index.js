import { connect } from 'react-redux';
import { getPastSpaceXLaunches, searchPastLaunches } from 'services/launchServices';
import { LaunchContainer } from './LaunchContainer';

const mapStateToProps = (state) => ({
  launchResponse: state.launches,
});

const mapDispatchToProps = (dispatch) => ({
  getPastLaunches: () => dispatch(getPastSpaceXLaunches()),
  searchPastLaunches: (payload) => dispatch(searchPastLaunches(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchContainer);

