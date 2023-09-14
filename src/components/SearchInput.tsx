"use client";

import React, { useEffect, useState } from "react";

import Input from "./Input";
import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";

export type SearchInputProps = {};

const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 500);

  useEffect(() => {
    const query = { title: debounceValue };

    const url = qs.stringifyUrl({
      url: "search",
      query: query,
    });

    router.push(url);
  }, [debounceValue, router]);
  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default SearchInput;
