import { For } from "solid-js";
import { Card } from "~/components/ui/card";

const boards = [
    {
        id: 1,
        name: "Personal",
        color: "white",
    },
    { id: 2, name: "Work", color: "white" },
];

export default function Home() {
    return (
        <main>
            <ul class="flex gap-8 flex-wrap m-8">
                <For each={boards}>
                    {(board) => (
                        <li>
                            <Card class="flex items-center justify-center w-72 h-48 p-6 mx-auto">
                                {board.name}
                            </Card>
                        </li>
                    )}
                </For>
            </ul>
        </main>
    );
}
