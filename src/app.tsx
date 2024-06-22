import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { Suspense } from "solid-js";
import "./app.css";
import "@fontsource/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Topbar } from "~/components/topbar";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
        mutations: {
            meta: {
                // TODO
                isLocal: true,
            },
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SolidQueryDevtools />
            <Router
                root={(props) => (
                    <Suspense>
                        <Topbar />
                        {props.children}
                    </Suspense>
                )}
            >
                <FileRoutes />
            </Router>
        </QueryClientProvider>
    );
}
