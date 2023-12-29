import { Dialog } from "@kobalte/core"

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
      <DialogComp />
    </main>
  )
}

function DialogComp() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/25" />
        <div class="fixed inset-x-0 z-50 flex justify-center ">
          <Dialog.Content class="sm:w-96 bg-white">
            <div class="flex items-center">
              <Dialog.Title>About Kobalte</Dialog.Title>
              <Dialog.CloseButton>❌</Dialog.CloseButton>
            </div>

            <button class="bg-green-600" onClick={() => alert("clicked")}>
              CLICK ME
            </button>

            <Dialog.Description>
              Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS.
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
