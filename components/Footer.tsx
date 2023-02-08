import { guildId, title } from "../data";
import Image from "../lib/Image";
import Join from './Join';

export default function Footer() {
  return (
    <div className='footer d-flex justify-content-between flex-lg-nowrap flex-wrap'>
        <div className='block d-flex flex-column justify-content-between'>
          <h3 className='d-flex'>{title}</h3>
          <p>{title} &#169; 2023</p>
          <Join />
        </div>
      <div>
        <a href='/join'>
          <Image
            src={`https://discordapp.com/api/guilds/${guildId}/embed.png?style=banner3`}
            height={140}
            width={320}
          />
        </a>
      </div>
    </div>
  );
}
