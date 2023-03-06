/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormOverridesProps = {
    Form?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon1257"?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon1259"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    InputGroup10234?: PrimitiveOverrideProps<FlexProps>;
    Input10235?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    InputGroup10238?: PrimitiveOverrideProps<FlexProps>;
    Input10239?: PrimitiveOverrideProps<FlexProps>;
    Quote?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FormOverridesProps | undefined | null;
}>;
export default function Form(props: FormProps): React.ReactElement;
