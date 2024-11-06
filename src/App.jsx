import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm, Button, Container, Row, Col } from 'react-bootstrap';

const RegistrationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
    country: '',
    profilePicture: null,
    terms: false,
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    } else if (values.fullName.length < 3) {
      errors.fullName = 'Full Name must be at least 3 characters long';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be exactly 10 digits';
    }

    if (!values.dob) {
      errors.dob = 'Date of Birth is required';
    } else {
      const today = new Date();
      const birthDate = new Date(values.dob);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        errors.dob = 'You must be at least 18 years old';
      }
    }

    if (!values.gender) errors.gender = 'Gender is required';
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }

    if (!values.address) errors.address = 'Address is required';
    if (!values.country) errors.country = 'Country is required';
    if (!values.terms) errors.terms = 'You must accept the terms and conditions';

    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '40px', backgroundColor: '#f9f9f9', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <h2 className="text-center mb-4" style={{ color: '#4CAF50' }}>Registration Form</h2>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
          {({ setFieldValue }) => (
            <Form>
              <Row>
                <Col md={6}>
                  <BootstrapForm.Group controlId="fullName" className="mb-3">
                    <BootstrapForm.Label>Full Name</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="fullName"

                      className="input-custom"
                    />
                    <ErrorMessage name="fullName" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group controlId="email" className="mb-3">
                    <BootstrapForm.Label>Email</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="email"
                      name="email"

                      className="input-custom"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              <BootstrapForm.Group controlId="phoneNumber" className="mb-3">
                <BootstrapForm.Label>Phone Number</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="text"
                  name="phoneNumber"

                  className="input-custom"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="dob" className="mb-3">
                <BootstrapForm.Label>Date of Birth</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="date"
                  name="dob"
                  className="input-custom"
                />
                <ErrorMessage name="dob" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="gender" className="mb-3">
                <BootstrapForm.Label>Gender</BootstrapForm.Label>
                <div>
                  <Field type="radio" name="gender" value="male" id="male" className="me-2" />
                  <BootstrapForm.Label htmlFor="male" className="me-2">Male</BootstrapForm.Label>
                  <Field type="radio" name="gender" value="female" id="female" className="me-2" />
                  <BootstrapForm.Label htmlFor="female" className="me-2">Female</BootstrapForm.Label>
                  <Field type="radio" name="gender" value="other" id="other" className="me-2" />
                  <BootstrapForm.Label htmlFor="other" className="me-2">Other</BootstrapForm.Label>
                </div>
                <ErrorMessage name="gender" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="password" className="mb-3">
                <BootstrapForm.Label>Password</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="password"
                  name="password"

                  className="input-custom"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="confirmPassword" className="mb-3">
                <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  type="password"
                  name="confirmPassword"

                  className="input-custom"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="address" className="mb-3">
                <BootstrapForm.Label>Address</BootstrapForm.Label>
                <Field
                  as="textarea"
                  name="address"
                  
                  rows={3}
                  className="form-control input-custom"
                />
                <ErrorMessage name="address" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="country" className="mb-3">
                <BootstrapForm.Label>Country</BootstrapForm.Label>
                <Field as={BootstrapForm.Select} name="country" className="input-custom">
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </Field>
                <ErrorMessage name="country" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="profilePicture" className="mb-3">
                <BootstrapForm.Label>Profile Picture</BootstrapForm.Label>
                <input
                  type="file"
                  className="form-control"
                  name="profilePicture"
                  onChange={(event) => setFieldValue('profilePicture', event.currentTarget.files[0])}
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="terms" className="mb-3">
                <Field type="checkbox" name="terms" className="me-2" />
                <BootstrapForm.Label>
                  I agree to the terms and conditions
                </BootstrapForm.Label>
                <ErrorMessage name="terms" component="div" className="text-danger" />
              </BootstrapForm.Group>

              <Button type="submit" variant="success" block className="w-100 mt-4">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default RegistrationForm;
