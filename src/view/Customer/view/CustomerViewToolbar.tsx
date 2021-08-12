import { Link } from "react-router-dom";
import Toolbar from "src/view/shared/styles/Toolbar";

function CustomerViewToolbar(props) {
  const id = props.match.params.id;
  return (
    <Toolbar>
      <Link to={`/customer/${id}/edit`}>
        <button className='btn btn-primary' type='button'>
          Edit
        </button>
      </Link>
    </Toolbar>
  );
}
export default CustomerViewToolbar;
