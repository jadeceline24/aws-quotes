/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThoughtsCreateFormInputValues = {
    author?: string;
    text?: string;
};
export declare type ThoughtsCreateFormValidationValues = {
    author?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThoughtsCreateFormOverridesProps = {
    ThoughtsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThoughtsCreateFormProps = React.PropsWithChildren<{
    overrides?: ThoughtsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ThoughtsCreateFormInputValues) => ThoughtsCreateFormInputValues;
    onSuccess?: (fields: ThoughtsCreateFormInputValues) => void;
    onError?: (fields: ThoughtsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThoughtsCreateFormInputValues) => ThoughtsCreateFormInputValues;
    onValidate?: ThoughtsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ThoughtsCreateForm(props: ThoughtsCreateFormProps): React.ReactElement;
