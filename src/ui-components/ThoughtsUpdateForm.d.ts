/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Thoughts } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThoughtsUpdateFormInputValues = {
    author?: string;
    text?: string;
};
export declare type ThoughtsUpdateFormValidationValues = {
    author?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThoughtsUpdateFormOverridesProps = {
    ThoughtsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThoughtsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ThoughtsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    thoughts?: Thoughts;
    onSubmit?: (fields: ThoughtsUpdateFormInputValues) => ThoughtsUpdateFormInputValues;
    onSuccess?: (fields: ThoughtsUpdateFormInputValues) => void;
    onError?: (fields: ThoughtsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThoughtsUpdateFormInputValues) => ThoughtsUpdateFormInputValues;
    onValidate?: ThoughtsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ThoughtsUpdateForm(props: ThoughtsUpdateFormProps): React.ReactElement;
