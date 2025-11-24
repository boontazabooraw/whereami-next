"use client";

import { useIp } from "@/hooks/useIp";
import { useUserIP } from "@/hooks/useUserIP";

export default function Card() {
  const { data } = useIp();
  const { userIP } = useUserIP();

  return (
    <div>
      <h1>{userIP?.ip}</h1>
      <h1>{data?.country_name}</h1>
      {!data?.is_proxy ? (
        <h1>You are not protected</h1>
      ) : (
        <h1>You are protected</h1>
      )}
    </div>
  );
}
