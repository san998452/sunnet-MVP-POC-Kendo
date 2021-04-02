import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
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
const formcomponent = () =>
{
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return(
        <section>
        <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
            <FormElement>
                <fieldset className={'k-form-fieldset'}>
                    <legend className={'k-form-legend'}>Add Form Name Here......</legend>
                    <div className="form-row">
                    <div className="form-col">
                    <div className="mb-3">
                        <Field name={'firstName'} component={Input} label={'First name'} />
                    </div>

                    <div className="mb-3">
                        <Field name={'lastName'} component={Input} label={'Last name'} />
                    </div>

                    <div className="mb-3">
                        <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
                    </div>
                    </div>
                    <div className="form-col">
                    <div className="mb-3">
                        <Field name={'firstName'} component={Input} label={'First name'} />
                    </div>

                    <div className="mb-3">
                        <Field name={'lastName'} component={Input} label={'Last name'} />
                    </div>

                    <div className="mb-3">
                        <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
                    </div>
                    </div>
                    <div className="form-col">
                    <div className="mb-3">
                        <Field name={'firstName'} component={Input} label={'First name'} />
                    </div>

                    <div className="mb-3">
                        <Field name={'lastName'} component={Input} label={'Last name'} />
                    </div>

                    <div className="mb-3">
                        <Field name={"email"} type={"email"} component={EmailInput} label={"Email"} validator={emailValidator} />
                    </div>
                    </div>
                    </div>
                </fieldset>
                <div className="k-form-buttons">
                    <Button
                        type={'submit'}
                        primary={true}
                        className="k-button"
                        disabled={!formRenderProps.allowSubmit}
                    >
                        Submit
                    </Button>
                    <Button
                        type={'reset'}
                        primary={false}
                       // className="k-button"
                        disabled={!formRenderProps.allowSubmit}
                    >
                        Clear
                    </Button>
                </div>
            </FormElement>
        )}
    />
    </section>
    );
}

export default formcomponent;