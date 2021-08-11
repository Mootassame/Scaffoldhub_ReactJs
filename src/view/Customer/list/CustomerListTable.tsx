import React from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/customer/list/customerListSelectors";
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
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr>
                  <th scope='row'>1</th>
                  <td>{row.name}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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
