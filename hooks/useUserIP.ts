"use client";
import { useEffect, useState } from "react";

interface UserDataInterface {
  ip: string;
}

export function useUserIP() {
  const [userIP, setUserIP] = useState<UserDataInterface | null>(null);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => {
        return res.json();
      })
      .then((d: UserDataInterface) => {
        setUserIP(d);
      })
      .catch((err) => {
        console.error("Failed to fetch data from API: ", err);
      });
  }, []);

  return { userIP };
}
