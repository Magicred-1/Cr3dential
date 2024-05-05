"use server"

import prisma from "@/lib/prisma";
import { GetStaticProps } from "next";

export const getTests = async () => {
    const feed = await prisma.test.findMany({});
    return {
      props: { feed },
      revalidate: 10,
    };
  };