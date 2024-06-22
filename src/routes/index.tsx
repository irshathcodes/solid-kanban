import { createQuery } from "@tanstack/solid-query";
import { For, Match, Switch } from "solid-js";
import { Card } from "~/components/ui/card";
import { getBoardsQuery } from "~/lib/query-options-factory";

export default function Home() {
    const boardsQuery = createQuery(getBoardsQuery);

    return (
        <main>
            <h1 class="text-xl font-semibold my-4">
                Boards ({boardsQuery?.data?.length})
            </h1>
            <Switch>
                <Match when={boardsQuery.isFetching}>
                    <p>Loading...</p>
                </Match>

                <Match when={boardsQuery.isError}>
                    <p>Error!</p>
                </Match>

                <Match when={boardsQuery.isSuccess}>
                    <ul class="flex gap-8 flex-wrap my-8">
                        <For each={boardsQuery.data}>
                            {(board) => (
                                <li>
                                    <Card class="flex items-center justify-center w-72 h-48 p-6 mx-auto">
                                        {board.name}
                                    </Card>
                                </li>
                            )}
                        </For>
                    </ul>
                </Match>
            </Switch>
        </main>
    );
}
