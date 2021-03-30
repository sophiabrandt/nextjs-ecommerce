import { useMutation } from "@apollo/client";
import { SignOutMutation } from "@/generated/SignOutMutation";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { SIGNOUT_MUTATION } from "@/graphql/index";

export const SignOut = () => {
  const [signout, { client }] = useMutation<SignOutMutation>(SIGNOUT_MUTATION, {
    update(cache) {
      cache.evict({
        fieldName: "authenticatedItem",
      });
    },
  });
  return (
    <NextLink href="/">
      <Link
        _hover={{ color: "brand.tertiary" }}
        textAlign="left"
        as="button"
        onClick={() => {
          signout();
          client.resetStore();
        }}
      >
        Sign Out
      </Link>
    </NextLink>
  );
};
