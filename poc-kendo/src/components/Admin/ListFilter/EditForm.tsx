import * as React from "react";
import { Dialog, Window } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
// import categories from "./categories.json";

const minValueValidator = value =>
    value >= 0 ? "" : "The value must be 0 or higher";
const NonNegativeNumericInput = fieldRenderProps => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <NumericTextBox {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? "" : "Please enter a valid email.");
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {
        visited && validationMessage &&
          (<Error>{validationMessage}</Error>)
      }
    </div>
  );
};

const EditForm = props => {
    return (
        <Window title={"Edit Person"} onClose={props.cancelEdit} initialHeight={350} width={600}>
            <Form
                onSubmit={props.onSubmit}
                initialValues={props.item}
                render={formRenderProps => (
                    <FormElement style={{ maxWidth: 650 }}>
                        <fieldset className={"k-form-fieldset"}>
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
                                    type={"email"} component={EmailInput} label={"Email"} validator={emailValidator}
                                />
                                </div>
                    <div className="mb-3">

                                <Field
                                    name={"homePhone"}
                                    component={Input}
                                    label={"Home Phone"}
                                />
                            </div>
                        </fieldset>
                        <div className="k-form-buttons">
                            <button
                                type={"submit"}
                                className="k-button k-primary"
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Update
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