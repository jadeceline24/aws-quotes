/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Form2OverridesProps = {
    Form2?: PrimitiveOverrideProps<FlexProps>;
    TextField1826?: PrimitiveOverrideProps<FlexProps>;
    label1827?: PrimitiveOverrideProps<TextProps>;
    InputGroup1828?: PrimitiveOverrideProps<FlexProps>;
    Input1829?: PrimitiveOverrideProps<FlexProps>;
    placeholder1830?: PrimitiveOverrideProps<TextProps>;
    border1831?: PrimitiveOverrideProps<IconProps>;
    descriptiveText1832?: PrimitiveOverrideProps<TextProps>;
    TextField1833?: PrimitiveOverrideProps<FlexProps>;
    label1834?: PrimitiveOverrideProps<TextProps>;
    InputGroup1835?: PrimitiveOverrideProps<FlexProps>;
    Input1836?: PrimitiveOverrideProps<FlexProps>;
    placeholder1837?: PrimitiveOverrideProps<TextProps>;
    border1838?: PrimitiveOverrideProps<IconProps>;
    descriptiveText1839?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon1930"?: PrimitiveOverrideProps<ViewProps>;
    label1931?: PrimitiveOverrideProps<TextProps>;
    "Button Icon1932"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Form2Props = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: Form2OverridesProps | undefined | null;
}>;
export default function Form2(props: Form2Props): React.ReactElement;
