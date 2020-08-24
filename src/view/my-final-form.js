import React from 'react';
import {Form, Field} from 'react-final-form';
import {entries} from 'lodash';
import {createData} from '../util/data';

const data = createData();

const MyField = ({field}) => {
  return (<div className="my-field">
    <label>{field} :</label>
    <Field name={field}>
      {props => (<input {...props.input} />)}
    </Field>
  </div>);
};

MyField.whyDidYouRender = true;

const MyFinalForm = () => {
  const submit = () => {};
  const children = entries(data).map(([field, value]) => (<MyField field={field} key={field}/>));
  return (<section>
    <h1>Final Form</h1>
    <Form
      initialValues={data}
      onSubmit={submit}>
      {
        ({form}) => {
          const _data = form.getState().values;
          return (<section className="my-form">{children}</section>);
        }
      }

    </Form>
  </section>);
};


MyFinalForm.whyDidYouRender = true;

export default MyFinalForm;