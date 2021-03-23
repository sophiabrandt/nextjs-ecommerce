import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { IStyledTheme } from "@/lib/index";

export const DropDown = styled(Box)<IStyledTheme>`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${(props) => props.theme.colors.ui.secondary};
`;

export const DropDownItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "highlighted",
})<IStyledTheme>`
  border: 1px solid ${(props) => props.theme.colors.ui.secondary};
  background: ${(props) =>
    props.highlighted ? props.theme.colors.ui.tertiary : props.theme.colors.ui.quaternary};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? "padding-left: 2rem;" : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) =>
      props.highlighted ? props.theme.colors.ui.tertiary : props.theme.colors.ui.quaternary};
  img {
    margin-right: 10px;
  }
`;

export const SearchStyles = styled(Box)<IStyledTheme>`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
  }
  margin-bottom: 2rem;
`;
