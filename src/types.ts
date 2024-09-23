import { AxiosInstance } from "axios";

export type ApiClient = AxiosInstance;

export type FilterOperator =
  | '$eq' | '$eqc' | '$ne' | '$lt' | '$lte' | '$gt' | '$gte'
  | '$in' | '$notIn' | '$contains' | '$notContains' | '$containsc'
  | '$notContainsc' | '$null' | '$notNull' | '$between' | '$notBetween'
  | '$startsWith' | '$startsWithc' | '$endsWith' | '$endsWithc'
  | '$or' | '$and';

export type FilterValue = string | number | boolean | null | Array<string | number>;

type LogicalOperator = "$and" | "$or";

type FilterCondition = {
  [K in FilterOperator]?: FilterValue;
};

type Filter = {
  [key: string]: FilterCondition | Filter | Filter[];
} & {
  [K in LogicalOperator]?: Filter[];
};

export type QueryParams = {
  filters?: Filter;
  sort?: string | string[];
  pagination?: { page?: number; pageSize?: number };
  fields?: string[];
  populate?: string | string[];
}