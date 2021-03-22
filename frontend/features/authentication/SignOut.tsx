import { useMutation } from "@apollo/client";
import { BreadcrumbLink } from "@chakra-ui/react";
import { SignOutMutation } from "@/generated/SignOutMutation";
import { SIGN_OUT_MUTATION } from "@/graphql/index";

export const SignOut = () => {
  const [signout] = useMutation<SignOutMutation>(SIGN_OUT_MUTATION, {
    update(cache) {
      cache.evict({
        fieldName: "authenticatedItem",
      });
    },
  });
  return (
    <BreadcrumbLink _hover={{ color: "brand.tertiary" }} as="button" onClick={() => signout()}>
      Sign Out
    </BreadcrumbLink>
  );
};
