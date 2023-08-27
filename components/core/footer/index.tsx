import React from "react";
import NextImage from "next/image";
import { defaultPx } from "lib/utils/default-container-px";
import {
  Box,
  chakra,
  Container,
  ContainerProps,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FooterTitle } from "./footer-title";
import { FooterLink } from "./footer-link";
import { NextResponsiveImage } from "../next-responsive-image";

const LINK_GAPS = [2, 2, 8];

interface FooterProps {
  _wrapper?: ContainerProps;
  mode?: "light" | "dark";
}

export function Footer(props: FooterProps) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid
        gap={[6, 6, 4]}
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gridTemplateAreas={[
          "'logo logo' 'solution for' 'company legal'",
          "'logo logo' 'solution for' 'company legal'",
          "'logo solution for company legal'",
        ]}
      >
        <GridItem gridArea="logo">
          <Box flexShrink={0} mb={8}>
            <NextResponsiveImage
              src="/bodybrain-logo.svg"
              alt="june"
              width={["75px"]}
              height={["80px"]}
              {...(props.mode === "dark" && {
                filter: "invert(1) brightness(10000%)",
              })}
            />
          </Box>
        
         
        </GridItem>
        <GridItem gridArea="solution">
          <VStack align="start" spacing={LINK_GAPS}>
           
           
            
          </VStack>
        </GridItem>
        <GridItem gridArea="for">
          <VStack align="start" spacing={LINK_GAPS}>
          
            
            
          </VStack>
        </GridItem>
        <GridItem gridArea="company">
          <VStack align="start" spacing={LINK_GAPS}>
           
            
            
          </VStack>
        </GridItem>
        <GridItem gridArea="legal">
          <VStack align="start" spacing={LINK_GAPS}>
            
            <VStack align="start">
              
              
            </VStack>
            
            
          </VStack>
        </GridItem>
        <GridItem display={["block", "block", "none"]}>
          <VStack align="start">
           
          </VStack>
        </GridItem>
        <GridItem display={["block", "block", "none"]}>
          <VStack align="start" spacing={LINK_GAPS}>
           
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
