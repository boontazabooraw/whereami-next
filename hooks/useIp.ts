import { useEffect, useState } from "react";
import { useUserIP } from "@/hooks/useUserIP";

interface DataInterface {
  ip: string;
  country_name: string;
  is_proxy: boolean;
}

export function useIp() {
  const { userIP } = useUserIP();
  const userIPObj = userIP?.ip;

  const [data, setData] = useState<DataInterface | null>(null);

  useEffect(() => {
    fetch(`/api/ipinfo?ip=${userIPObj}`)
      .then((res) => {
        return res.json();
      })
      .then((d: DataInterface) => {
        setData(d);
      })
      .catch((err) => {
        console.error("Failed to fetch data from API: ", err);
      });
  }, [userIPObj]);

  return { data };
}
