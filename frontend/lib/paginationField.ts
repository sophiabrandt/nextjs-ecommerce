import { PAGINATION_QUERY } from "@/graphql/pagination";
import { FieldPolicy } from "@apollo/client";
import { AllProductsQueryVariables } from "@/generated/AllProductsQuery";
import { PaginationQuery } from "@/generated/PaginationQuery";

export const paginationField = (): FieldPolicy => {
  return {
    keyArgs: false, // tells Apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip = 0, first = 0 } = args as AllProductsQueryVariables;

      // Read the number of items on the page from the cache
      const data = cache.readQuery<PaginationQuery>({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count ?? 0;
      const page = (skip ?? 0) / (first ?? 0) + 1;
      const pages = Math.ceil(count / (first ?? 0));

      // Check if we have existing items
      const items = existing.slice(skip ?? 0, (skip ?? 0) + (first ?? 0)).filter(Boolean);
      // If
      // There are items
      // AND there aren't enough items to satisfy how many were requested
      // AND we are on the last page
      // THEN JUST SEND IT

      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      }

      // If there are items, just return them from the cache, and we don't need to go to the network
      if (items.length) {
        // console.log(
        //   `There are ${items.length} items in the cache! Gonna send them to the Apollo Cache!`
        // );
        return items;
      }

      return false; // fallback to network

      // First thing it does it asks the read function for those items.
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here, (network request)
    },
    merge(existing, incoming, { args }) {
      let { skip } = args as AllProductsQueryVariables;
      if (!skip) skip = 0;
      // This runs when the Apollo client comes back from the network with our product
      // console.log(`Merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // console.log(merged);
      // Finally we return the merged items from the cache,
      return merged;
    },
  };
};
