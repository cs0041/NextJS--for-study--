import useSWR from "swr";
import axios from "axios";

export default function Profile() {
  //   const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);

  const { data, error } = useSWR("/api/hello", fetcher);

  return <div>{JSON.stringify(data)}</div>;
}
