import React from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/customer/list/customerListSelectors";
import { Link } from "react-router-dom";
function CustomerListTable(props) {
  const dispatch = useDispatch();
  const rows = useSelector(selectors.selectRows);
  return (
    <>
      <div className='row'>
        <div className='container'>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Birthdate</th>
                <th scope='col'>_id</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{row.name}</td>
                  <td>{row.birthdate}</td>
                  <td>{row.id}</td>
                  <td className='td-actions'>
                    <Link className='btn btn-link' to={`/customer/${row.id}`}>
                      View
                    </Link>
                    <Link
                      className='btn btn-link'
                      to={`/customer/${row.id}/edit`}>
                      Edit
                    </Link>

                    <button
                      className='btn btn-link'
                      type='button'
                      onClick={() => alert("delete Functionalite")}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default CustomerListTable;
