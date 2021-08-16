import React from "react";
import Wrapper from "src/view/auth/styles/Wrapper";
import OtherActions from "src/view/auth/styles/OtherActions";
import Content from "src/view/auth/styles/Content";

import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <Wrapper>
      <Content>
        <p>SignupPage</p>

        <OtherActions>
          <Link className='btn btn-sm btn-link' to='/auth/signin'>
            already Have An Account
          </Link>
        </OtherActions>
      </Content>
    </Wrapper>
  );
}
export default SignupPage;
