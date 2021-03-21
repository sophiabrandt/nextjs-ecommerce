import { useQuery } from "@apollo/client";
import { CurrentUser } from "@/generated/CurrentUser";
import { CURRENT_USER_QUERY } from "@/graphql/index";

export const useUser = () => {
  const { data } = useQuery<CurrentUser>(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};
