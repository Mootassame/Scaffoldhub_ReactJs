import React from "react";
import Spinner from "src/view/shared/Spinner";
import TextViewItem from "src/view/shared/view/TextViewItem";
import ViewWrapper from "src/view/shared/styles/ViewWrapper";
function CustomerView(props) {
  const { laoding, record } = props;
  if (laoding || !record) {
    return <Spinner />;
  }
  return (
    <ViewWrapper>
      <TextViewItem value={record.name} label={"name"} />
      <TextViewItem value={record.birthdate} label={"birthdate"} />
    </ViewWrapper>
  );
}

export default CustomerView;
