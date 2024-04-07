import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const Resetpassword = () => {
  return (
    <>
      <Meta title={"reset-password"} />
      <BreadCrumb title="reset-password" />
      <Container class1="login-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset-Password</h3>
              <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="Password"
                    name="Password"
                    placeholder="Password"/>
              <CustomInput  type="password"
                    name="confirm-password"
                    placeholder="Confirm Password"/>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Ok</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;