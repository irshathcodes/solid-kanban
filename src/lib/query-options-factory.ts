import { queryOptions } from "@tanstack/solid-query";

export function getBoardsQuery() {
    return queryOptions({
        queryKey: ["boards"],
        queryFn: async () => {
            await promiseTimeout(500);
            return [
                {
                    id: 1,
                    name: "Personal",
                    color: "white",
                },
                { id: 2, name: "Work", color: "white" },
            ];
        },
    });
}

function promiseTimeout(delayMs: number) {
    return new Promise((res) => setTimeout(res, delayMs));
}
