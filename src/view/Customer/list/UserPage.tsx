import React from "react";
import ContentWrapper from "src/view/Layout/styles/ContentWrapper";
import CustomerListTable from "src/view/Customer/list/CustomerListTable";
import CustomerListToolbar from "src/view/Customer/list/CustomerListToolbar";
import CustomerListFilter from "src/view/Customer/list/CustomerListFilter";

function UserPage() {
  return (
    <>
      <ContentWrapper>
        <CustomerListFilter />
        <CustomerListToolbar />
        <CustomerListTable />
      </ContentWrapper>
    </>
  );
}
export default UserPage;
