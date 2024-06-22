import { createSignal } from "solid-js";
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
import { Button, buttonVariants } from "~/components/ui/button";
import { createBoardMutation } from "~/lib/mutation-factory";

export function CreateBoard() {
    const [open, setOpen] = createSignal(false);
    const { mutate } = createBoardMutation();

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const boardName = fd.get("board-name") as string;
        mutate(boardName);
        setOpen(false);
    };

    return (
        <Dialog open={open()} onOpenChange={setOpen}>
            <DialogTrigger
                class={buttonVariants({
                    size: "icon",
                })}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-plus"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Board</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    <div class="mt-3 mb-4">
                        <TextField>
                            <TextFieldLabel class="mb-3 block">
                                Enter board name
                            </TextFieldLabel>
                            <TextFieldInput
                                name="board-name"
                                type="text"
                                required
                                autocomplete="off"
                                placeholder="Eg: My Progress"
                            />
                        </TextField>
                    </div>
                    <DialogFooter>
                        <Button type="submit" class="w-fit ml-auto">
                            Create
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
