import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import "@fontsource/inter";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { CirclePlus, Home } from "lucide-solid";
import { Button, buttonVariants } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import {
    TextField,
    TextFieldInput,
    TextFieldLabel,
} from "~/components/ui/text-field";

export default function App() {
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const boardName = fd.get("board-name");
        alert(boardName);
    };

    return (
        <Router
            root={(props) => (
                <Suspense>
                    <header class="flex items-center justify-between gap-2 py-2">
                        <Button variant="outline" size="icon">
                            <Home size={20} />
                        </Button>
                        <div class="flex gap-4">
                            <Dialog>
                                <DialogTrigger
                                    class={buttonVariants({
                                        variant: "outline",
                                        size: "icon",
                                    })}
                                >
                                    <CirclePlus />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Create Board</DialogTitle>
                                    </DialogHeader>

                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-4">
                                            <TextField>
                                                <TextFieldLabel class="mb-2 block">
                                                    Enter board name
                                                </TextFieldLabel>
                                                <TextFieldInput
                                                    name="board-name"
                                                    type="text"
                                                    required
                                                    autocomplete="off"
                                                />
                                            </TextField>
                                        </div>
                                        <DialogFooter>
                                            <Button
                                                type="submit"
                                                class="w-fit ml-auto"
                                            >
                                                Create
                                            </Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                            <Avatar>
                                <AvatarFallback>IR</AvatarFallback>
                            </Avatar>
                        </div>
                    </header>
                    {props.children}
                </Suspense>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
