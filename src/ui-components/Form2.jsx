/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Thoughts } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Form2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        label1827: {},
        placeholder1830: {},
        Input1829: {},
        border1831: {},
        InputGroup1828: {},
        descriptiveText1832: {},
        TextField1826: {},
        label1834: {},
        placeholder1837: {},
        Input1836: {},
        border1838: {},
        InputGroup1835: {},
        descriptiveText1839: {},
        TextField1833: {},
        "Button Icon1930": {},
        label1931: {},
        "Button Icon1932": {},
        Button: {},
        Form2: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useDataStoreCreateAction({
    fields: { author: "TextField1826", text: "TextField1833" },
    model: Thoughts,
    schema: schema,
  });
  return (
    <Flex
      gap="11px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="18px 5px 18px 5px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Form2")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "TextField1826")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="267px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Name"
          {...getOverrideProps(overrides, "label1827")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="267px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "InputGroup1828")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            display="flex"
            {...getOverrideProps(overrides, "Input1829")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(128,128,128,1)"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Placeholder"
              {...getOverrideProps(overrides, "placeholder1830")}
            ></Text>
          </Flex>
          <Icon
            width="unset"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
            paths={[
              {
                d: "M0 0L300 0L300 -1L0 -1L0 0Z",
                stroke: "rgba(174,179,183,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="none"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            {...getOverrideProps(overrides, "border1831")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          fontStyle="italic"
          lineHeight="20px"
          textAlign="left"
          display="none"
          direction="column"
          justifyContent="unset"
          width="300px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          {...getOverrideProps(overrides, "descriptiveText1832")}
        ></Text>
      </Flex>
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "TextField1833")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="267px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Quote"
          {...getOverrideProps(overrides, "label1834")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="267px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "InputGroup1835")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(174,179,183,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            display="flex"
            {...getOverrideProps(overrides, "Input1836")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(128,128,128,1)"
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Placeholder"
              {...getOverrideProps(overrides, "placeholder1837")}
            ></Text>
          </Flex>
          <Icon
            width="unset"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 300, height: 1 }}
            paths={[
              {
                d: "M0 0L300 0L300 -1L0 -1L0 0Z",
                stroke: "rgba(174,179,183,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="none"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            {...getOverrideProps(overrides, "border1838")}
          ></Icon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          fontStyle="italic"
          lineHeight="20px"
          textAlign="left"
          display="none"
          direction="column"
          justifyContent="unset"
          width="300px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          {...getOverrideProps(overrides, "descriptiveText1839")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="91px"
        height="31px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(149,13,4,1)"
        display="flex"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      >
        <View
          width="20px"
          height="20px"
          {...getOverrideProps(overrides, "Button Icon1930")}
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
          {...getOverrideProps(overrides, "label1931")}
        ></Text>
        <View
          width="20px"
          height="20px"
          {...getOverrideProps(overrides, "Button Icon1932")}
        ></View>
      </Flex>
    </Flex>
  );
}
