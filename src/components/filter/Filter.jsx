import React from "react";
import { FilterInput } from "./FilterInput";
import { Formik} from 'formik';
import { Label } from '../ui/Label';
import * as yup from 'yup'

export const Filter = ({ onHandleChange }) => {
    const validationSchema = yup.object().shape({
        filter: yup.string().required('this field is required')
    });

    return (
        <Formik
        initialValues={{ name: '', tel: '' }}
        onSubmit={onHandleChange}
            validationSchema={validationSchema}>
            <Label>
              <FilterInput name="filter"  onChange={onHandleChange}/>
            </Label>

        </Formik>
    )
}