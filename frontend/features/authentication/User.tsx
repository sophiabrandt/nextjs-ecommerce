import { useQuery } from "@apollo/client";
import { CurrentUserQuery } from "@/generated/CurrentUserQuery";
import { CURRENT_USER_QUERY } from "@/graphql/index";

export const useUser = () => {
  const { data } = useQuery<CurrentUserQuery>(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};
