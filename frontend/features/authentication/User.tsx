import { useQuery } from "@apollo/client";
import { CurrentUserQuery } from "@/generated/CurrentUserQuery";
import { CURRENT_USER_QUERY } from "@/graphql/index";

export const useUser = () => {
  const { data } = useQuery<CurrentUserQuery>(CURRENT_USER_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });
  return data?.authenticatedItem;
};
