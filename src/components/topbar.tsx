import { Avatar, AvatarFallback } from "~/components/ui/avatar";
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
export function Topbar() {
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const boardName = fd.get("board-name");
        alert(boardName);
    };
    return (
        <header class="flex items-center justify-between gap-2 py-1.5 bg-muted text-muted-foreground px-4">
            <Button size="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M6 19h3.692v-5.077q0-.343.233-.575q.232-.233.575-.233h3q.343 0 .576.233q.232.232.232.575V19H18v-8.692q0-.154-.067-.28t-.183-.22L12.366 5.75q-.154-.134-.366-.134t-.365.134L6.25 9.808q-.115.096-.183.22t-.067.28zm-1 0v-8.692q0-.384.172-.727t.474-.565l5.385-4.078q.423-.323.966-.323t.972.323l5.385 4.077q.303.222.474.566q.172.343.172.727V19q0 .402-.299.701T18 20h-3.884q-.344 0-.576-.232q-.232-.233-.232-.576v-5.076h-2.616v5.076q0 .344-.232.576T9.885 20H6q-.402 0-.701-.299T5 19m7-6.711"
                    ></path>
                </svg>
            </Button>
            <div class="flex gap-4">
                <Dialog>
                    <DialogTrigger
                        class={buttonVariants({
                            variant: "outline",
                            size: "icon",
                        })}
                    >
                        {/* <CirclePlus /> */}+
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
                                <Button type="submit" class="w-fit ml-auto">
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
    );
}
