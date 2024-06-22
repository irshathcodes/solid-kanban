import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { Suspense } from "solid-js";
import "./app.css";
import "@fontsource/inter";
import { Topbar } from "~/components/topbar";
import { persister, queryClient } from "~/lib/query-client";
import { PersistQueryClientProvider } from "@tanstack/solid-query-persist-client";

export default function App() {
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister }}
        >
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
        </PersistQueryClientProvider>
    );
}
