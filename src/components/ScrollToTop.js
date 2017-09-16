import { withRouter } from "react-router-dom";
import { lifecycle } from "recompose";

export default withRouter(
  lifecycle({
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  })(({ children }) => children)
);
