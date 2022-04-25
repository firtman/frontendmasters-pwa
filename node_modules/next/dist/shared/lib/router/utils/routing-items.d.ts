import { getRouteMatcher } from './route-matcher';
export interface RoutingItem {
    page: string;
    match: ReturnType<typeof getRouteMatcher>;
    ssr?: boolean;
    isMiddleware?: boolean;
}
export declare function getRoutingItems(pages: string[], middleware: {
    page: string;
    ssr: boolean;
}[]): RoutingItem[];
