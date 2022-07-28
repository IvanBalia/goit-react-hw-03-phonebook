import React from 'react';
//import styled from 'styled-components';
import { Formik,Form,ErrorMessage} from 'formik';
import { Label } from '../ui/Label';
import { FormikInput } from '../formikInput/FormikInput';
import { Button } from './Button';
import { Message } from '../erorrMessage/Message';
import * as yup from 'yup';




export const ContactForm=({onHandleSubmit}) => {
    const validationSchema = yup.object().shape({
        name: yup.string().required('This field is required'),
        tel: yup.number().required('This field is required').positive().integer(),

    });

    
  
    return (
      <Formik
        initialValues={{ name: '', tel: '' }}
        onSubmit={onHandleSubmit}
        validationSchema={validationSchema}
      >
            {( FormikProps ) => (
        
          <Form>
            <Label>
              <FormikInput name="name" type="input" />
              
              <ErrorMessage
                name="name"
                render={msg => <Message>{msg}</Message>} />
            
            </Label>
            <Label>
              <FormikInput name="tel" type="input" />
              <ErrorMessage
                name="tel"
                render={msg => <Message>{msg}</Message>} />
            </Label>
            <Button type="submit" >Add Contacts</Button>
          </Form>
        )}
      </Formik>
    );
  }
