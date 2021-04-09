import * as React from "react";
import { Dialog, Window } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
// import categories from "./categories.json";

const minValueValidator = (value) =>
  value >= 0 ? "" : "The value must be 0 or higher";
const NonNegativeNumericInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <NumericTextBox {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const EditForm = (props) => {
  const {item}=props
  return (
    <Window
      title={"Add/Edit Person"}
      onClose={props.cancelEdit}
      initialHeight={450}
      width={1000}
    >
      <Form
        onSubmit={props.onSubmit}
        initialValues={item}
        render={(formRenderProps) => (
          <FormElement>
            <fieldset className={"k-form-fieldset"}>
            <div className="form-row">
                    <div className="form-col">
              <div className="mb-3">
                <Field
                  name={"firstName"}
                  component={Input}
                  label={"First Name"}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={"lastName"}
                  component={Input}
                  label={"Last Name"}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={"email"}
                  type={"email"}
                  component={EmailInput}
                  label={"Email"}
                  validator={emailValidator}
                />
              </div>
              </div>
              <div className="form-col">
              <div className="mb-3">
                <Field
                  name={"homePhone"}
                  component={Input}
                  label={"Home Phone"}
                />
              </div>
              <div className="mb-3">
                <Field
                  name={"workPhone"}
                  component={Input}
                  label={"Work Phone"}
                />
              </div>
              <div className="mb-3">
                <Field name={"location"} component={Input} label={"Location"} />
              </div>
              <div className="mb-3">
                <Field
                  name={"cellPhone"}
                  component={Input}
                  label={"Cell Phone"}
                />
              </div>
              </div>
              <div className="form-col">
              <div className="mb-3">
                <Field
                  name={"faxPhone"}
                  component={Input}
                  label={"Fax Phone"}
                />
              </div>
              <div className="mb-3">
                <Field name={"title"} component={Input} label={"Title"} />
              </div>
              <div className="mb-3">
                <Field name={"ext"} component={Input} label={"Ext"} />
              </div>
              </div>
              </div>
            </fieldset>
            <div className="k-form-buttons">
              <button
                type={"submit"}
                className="k-button k-primary"
                disabled={!formRenderProps.allowSubmit}
              >
                Submit
              </button>
              <button
                type={"submit"}
                className="k-button"
                onClick={props.cancelEdit}
              >
                Cancel
              </button>
            </div>
          </FormElement>
        )}
      />
    </Window>
  );
};
export default EditForm;
