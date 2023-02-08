import type { NextPage } from "next";
import Router from "next/router";
import { inviteSlug } from '../data';

const Join: NextPage = (): JSX.Element => {
  const inviteLink = `https://discord.gg/${inviteSlug}`;
  const isClient = typeof document !== "undefined";
  isClient && Router.replace(inviteLink);
  return <div style={{'backgroundColor': 'rgba(0, 0, 0, 0.8)'}}>Redirecting to <a href={inviteLink} style={{color: 'white'}}>{inviteLink}</a></div>;
};

export default Join;
