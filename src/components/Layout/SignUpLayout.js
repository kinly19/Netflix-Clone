import NavSecondary from "../Navbar/NavSecondary";
import "./SignUpLayout.scss"

const SignUpLayout = (props) => {
  return (
    <main className="signup">
      <div className="signup__header">
        <NavSecondary navType={"light"} />
      </div>
      <div className="signup__content">{props.children}</div>
    </main>
  );
};

export default SignUpLayout;