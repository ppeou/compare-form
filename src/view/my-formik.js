import React from 'react';
import {Formik, Field, Form} from 'formik';
import {entries} from 'lodash';
import {createData} from '../util/data';

const data = createData();

const MyField = ({field, value}) => {
  return (<div className="my-field">
    <label htmlFor={field}>{field} :</label>
    <Field id={field} name={field} />
  </div>);
};
MyField.whyDidYouRender = true;

const MyFormik = () => {
  const submit = () => {};
  const children = entries(data).map(([field, value]) => (<MyField field={field} value={value} key={field}/>));
  return (<section>
    <h1>Formik</h1>
    <Formik
      initialValues={data}
      onSubmit={submit}>
      <Form>
        <section className="my-form">
          {children}
        </section>
      </Form>
    </Formik>
  </section>);
};

MyFormik.whyDidYouRender = true;

export default MyFormik;