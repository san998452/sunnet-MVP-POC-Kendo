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

const EditForm = props => {
    return (
        <Dialog title={`Edit Person`} onClose={props.cancelEdit} initialHeight={450}>
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
                                <Field
                                    name={"lastName"}
                                    component={Input}
                                    label={"Last Name"}
                                />
                                <Field
                                    name={"email"}
                                    component={Input}
                                    label={"Email"}
                                />
                                <Field
                                    name={"homePhone"}
                                    component={Input}
                                    label={"Home Phone"}
                                />
                            </div>
                            {/* <div className="mb-3">
                                <Field
                                    name={"Category"}
                                    component={DropDownList}
                                    data={categories}
                                    textField={"CategoryName"}
                                    label={"Category"}
                                />
                            </div> */}
                            {/* <div className="mb-3">
                                <Field
                                    name={"UnitPrice"}
                                    component={NonNegativeNumericInput}
                                    label={"Price"}
                                    validator={minValueValidator}
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name={"UnitsInStock"}
                                    component={NonNegativeNumericInput}
                                    label={"In stock"}
                                    validator={minValueValidator}
                                />
                            </div> */}
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
        </Dialog>
    );
};
export default EditForm;