import { AxiosInstance } from "axios";

export type ApiClient = AxiosInstance;

export type FilterOperator =
    | "$eq" /** Equal */
    | "$eqc" /** Equal (case-sensitive) */
    | "$ne" /** Not equal */
    | "$lt" /** Less than */
    | "$lte" /** Less than or equal to */
    | "$gt" /** Greater than */
    | "$gte" /** Greater than or equal to */
    | "$in" /** Included in an array */
    | "$notIn" /** Not included in an array */
    | "$contains" /** Contains */
    | "$notContains" /** Does not contain */
    | "$containsc" /** Contains (case-sensitive) */
    | "$notContainsc" /** Does not contain (case-sensitive) */
    | "$null" /** Is null */
    | "$notNull" /** Is not null */
    | "$between" /** Is between */
    | "$notBetween" /** Is not between */
    | "$startsWith" /** Starts with */
    | "$startsWithc" /** Starts with (case-sensitive) */
    | "$endsWith" /** Ends with */
    | "$endsWithc"; /** Ends with (case-sensitive) */

export type LogicalOperator = "$or" /** Joins the filters in an "or" expression */ | "$and"; /** Joins the filters in an "and" expression */

export type FilterValue = string | number | boolean | null | Array<string | number>;

type FilterCondition = {
    [K in FilterOperator]?: FilterValue;
};

// Recursive type definition for nested filters
type NestedFilter = {
    [key: string]: FilterCondition | NestedFilter;
};

// Allow mixture of logical operators and regular filters
export type Filter = {
    [K in LogicalOperator]?: (Filter | NestedFilter)[];
} & {
    [key: string]: FilterCondition | NestedFilter | (Filter | NestedFilter)[];
};

type SortDirection = "asc" | "desc";

type SortField = string | `${string}:${SortDirection}` | `${string}.${string}:${SortDirection}`;

export type QueryParams = {
    page?: number;
    perPage?: number;
    filters?: Filter;
    sort?: SortField | SortField[];
};
