import qs from "query-string";

interface FormUrlQueryParams {
  params: string;
  key: string;
  value: string;
}
export const formUrlQuery = ({ params, key, value }: FormUrlQueryParams) => {
  const queryString = qs.parse(params);

  queryString[key] = value;

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

interface RemoveKeysFromUrlQueryParams {
  params: string;
  keysToRemove: string[];
}
export const removeKeysFromUrlQuery = ({ params, keysToRemove }: RemoveKeysFromUrlQueryParams) => {
  const queryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
