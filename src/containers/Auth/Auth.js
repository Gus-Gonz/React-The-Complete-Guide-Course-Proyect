import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/Ui/Spinner/Spinner";
import { checkValidity } from "../../helpers/validation";

import "./Auth.css";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSingup: true,
  };

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirect !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };

    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSingup
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return {
        isSingup: !prevState.isSingup,
      };
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    if (this.props.loading) {
      form = <Spinner />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuth) {
      authRedirect = <Redirect to={this.props.authRedirect} />;
    }
    return (
      <div className="Auth">
        {authRedirect}
        {errorMessage}
        <form onSubmit={(event) => this.submitHandler(event)}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={() => this.switchAuthModeHandler()}>
          SWITCH TO {this.state.isSingup ? "SIGNIN" : "SINGUP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirect: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSingup) =>
      dispatch(actions.auth(email, password, isSingup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
