import { createMutation } from "@tanstack/solid-query";
import { queryClient } from "~/app";
import { getBoardsQuery, promiseTimeout } from "~/lib/query-options-factory";

export function createBoardMutation() {
    const isLocal = queryClient.getDefaultOptions().mutations?.meta?.isLocal;

    return createMutation(() => ({
        mutationFn: async (boardName: string) => {
            if (isLocal) {
                queryClient.setQueryData(
                    getBoardsQuery().queryKey,
                    (boards) => [
                        ...boards!,
                        {
                            id: new Date().getTime().toString(),
                            color: "white",
                            name: boardName,
                        },
                    ]
                );
            }
        },
    }));
}
