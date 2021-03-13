import { render } from "@testing-library/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme, Fonts } from "../infrastructure/theme";

const customTheme = extendTheme({
  colors: theme.colors,
  fonts: theme.fonts,
});

const AllTheProviders: FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
