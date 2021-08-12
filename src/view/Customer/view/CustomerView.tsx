import React from "react";
import Spinner from "src/view/shared/Spinner";
import TextViewItem from "src/view/shared/view/TextViewItem";
function CustomerView(props) {
  const { laoding, record } = props;
  if (laoding || !record) {
    return <Spinner />;
  }
  return (
    <div>
      <p>Customer Detaill</p>

      <TextViewItem value={record.name} label={"name"} />
      <TextViewItem value={record.birthdate} label={"birthdate"} />
    </div>
  );
}

export default CustomerView;
