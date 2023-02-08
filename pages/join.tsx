import type { NextPage } from "next";
import Router from "next/router";
import { inviteSlug } from '../data';

const Join: NextPage = (): JSX.Element => {
  const isClient = typeof document !== "undefined";
  isClient && Router.replace(`https://discord.gg/${inviteSlug}`);
  return <></>;
};

export default Join;
