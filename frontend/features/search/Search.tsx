import { useLazyQuery } from "@apollo/client";
import { SearchStyles, DropDown, DropDownItem } from "./SearchStyles";
import { Input, Image } from "@chakra-ui/react";
import { resetIdCounter, useCombobox } from "downshift";
import { debounce } from "debounce";
import { useRouter } from "next/router";
import { SEARCH_PRODUCTS_QUERY } from "@/graphql/index";
import { SearchProductsQuery, SearchProductsQueryVariables } from "@/generated/SearchProductsQuery";

export const Search = () => {
  const router = useRouter();
  const [findItems, { loading, data }] = useLazyQuery<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: "no-cache",
  });
  const items = data?.searchTerms || [];
  const debouncedFindItems = debounce(findItems, 550);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      debouncedFindItems({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem?.id}`,
      });
    },
    itemToString: (item) => item?.name || "",
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <Input
          focusBorderColor="ui.secondary"
          {...getInputProps({
            type: "search",
            placeholder: "Search for an item",
            id: "search",
            className: loading ? "loading" : "",
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item?.id ?? Math.random()}
              highlighted={index === highlightedIndex}
              {...getItemProps({ item, index })}
            >
              <Image
                fallbackSrc="https://via.placeholder.com/50"
                src={item?.photo?.image?.publicUrlTransformed ?? ""}
                alt={item?.photo?.altText ?? ""}
                width="50px"
                height="50px"
                objectFit="cover"
              />
              {item?.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, no items found for {inputValue}!</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
};
