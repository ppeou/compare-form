import React from 'react';
import {Form, Field} from 'react-final-form';
import {entries} from 'lodash';
import {createData} from '../util/data';

const data = createData();

const MyField = ({field}) => {
  return (<div className="my-field">
    <label>{field} :</label>
    <Field name={field} subscription={{value: true}}>
      {props => (<input {...props.input} />)}
    </Field>
  </div>);
};

MyField.whyDidYouRender = true;

const MyFinalFormSubscription = () => {
  const submit = () => {};
  const children = entries(data).map(([field, value]) => (<MyField field={field} key={field}/>));
  return (<section>
    <h1>Final Form with Subscription</h1>
    <Form
      initialValues={data}
      onSubmit={submit}
      subscription={{}}>
      {
        ({form}) => {
          const _data = form.getState().values;
          return (<section className="my-form">{children}</section>);
        }
      }

    </Form>
  </section>);
};


MyFinalFormSubscription.whyDidYouRender = true;

export default MyFinalFormSubscription;