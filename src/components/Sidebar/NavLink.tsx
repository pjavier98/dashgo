import { ElementType } from "react";
import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";

interface NavLinkProps extends ChakraLinkProps {
  href: string;
  icon: ElementType;
  children: string;
}

export function NavLink({ href, icon, children, ...props }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display={"flex"} align={"center"} {...props}>
        <Icon as={icon} fontSize={"20"} />
        <Text ml={"4"} fontWeight={"medium"}>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
