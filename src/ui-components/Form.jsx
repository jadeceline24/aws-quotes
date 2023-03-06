/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Thoughts } from "../models";
import { schema } from "../models/schema";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Form(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useDataStoreCreateAction({
    fields: { author: "textfield", text: "textfield2" },
    model: Thoughts,
    schema: schema,
  });
  return (
    <View
      width="311px"
      height="222px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Form")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="91px"
        height="31px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="81.53%"
        bottom="4.5%"
        left="7.4%"
        right="63.34%"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(149,13,4,1)"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      >
        <View
          width="20px"
          height="20px"
          {...getOverrideProps(overrides, "Button Icon1257")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Save"
          {...getOverrideProps(overrides, "label")}
        ></Text>
        <View
          width="20px"
          height="20px"
          {...getOverrideProps(overrides, "Button Icon1259")}
        ></View>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="267px"
        height="65px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        left="23px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <Flex
          gap="0"
          direction="column"
          width="226px"
          height="40px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="25px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InputGroup10234")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="269px"
            height="42px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            placeholder="John Doe"
            {...getOverrideProps(overrides, "Input10235")}
          ></Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.94318199157715px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="267px"
          height="19px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Name"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="267px"
        height="65px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="103px"
        left="23px"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Flex
          gap="0"
          direction="column"
          width="226px"
          height="40px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="25px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InputGroup10238")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="269px"
            height="42px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            placeholder="Insperational quote"
            {...getOverrideProps(overrides, "Input10239")}
          ></Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.94318199157715px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="267px"
          height="19px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Quote"
          {...getOverrideProps(overrides, "Quote")}
        ></Text>
      </View>
    </View>
  );
}
