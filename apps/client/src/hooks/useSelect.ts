import { useRef, useState } from "react";
import { UiSelectProps } from "@gb-adviser/ui";
import { DataIndex } from "@gb-adviser/common";
import { get } from "lodash-es";

export type SelectRequest = {
  page: number;
  limit: number;
};

export type SelectResponse<Entity> = {
  page: number;
  limit: number;
  total: number;
  records: Array<Entity>;
};

export const useSelect = <Entity, Value = unknown>(
  useQuery: (request: SelectRequest) => {
    data?: SelectResponse<Entity>;
    isLoading: boolean;
  },
  preloadedOptions: Array<Entity> = [],
  dataIndex: DataIndex = "value",
): Partial<UiSelectProps<Value, Entity>> => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery] = useState("");

  const queryTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleQuery: typeof setQuery = (data) => {
    if (queryTimeout.current) {
      clearTimeout(queryTimeout.current);
    }

    queryTimeout.current = setTimeout(() => {
      setQuery(data);
    }, 250);
  };

  const { isLoading, data } = useQuery({
    page,
    limit,
  });

  return {
    page: data?.page ?? 1,
    onChangePage: setPage,
    limit: data?.limit ?? 10,
    onChangeLimit: setLimit,
    total: data?.total ?? 0,
    loading: isLoading,
    options: preloadedOptions.length
      ? preloadedOptions
          .concat(data?.records || [])
          .filter(
            (c, i, s) =>
              s.findIndex((f) => get(c, dataIndex) === get(f, dataIndex)) === i,
          )
      : data?.records,
    // query,
    // onChangeQuery: handleQuery,
  };
};
