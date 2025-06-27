import { AccordionDemo } from "@/components/examples/accordion-demo";
import { AlertDialogDemo } from "@/components/examples/alert-dialog-demo";
import { AspectRatioDemo } from "@/components/examples/aspect-ratio-demo";
import { AvatarDemo } from "@/components/examples/avatar-demo";
import { BadgeDemo } from "@/components/examples/badge-demo";
import { BreadcrumbDemo } from "@/components/examples/breadcrumb-demo";
import { CheckboxDemo } from "@/components/examples/checkbox-demo";
import { CollapsibleDemo } from "@/components/examples/collapsible-demo";
import { ContextMenuDemo } from "@/components/examples/context-menu-demo";
import { DialogDemo } from "@/components/examples/dialog-demo";
import { DropdownMenuDemo } from "@/components/examples/dropdown-menu-demo";
import { LabelDemo } from "@/components/examples/label-demo";
import { ProgressDemo } from "@/components/examples/progress-demo";
import { RadioGroupDemo } from "@/components/examples/radio-group-demo";
import { SeparatorDemo } from "@/components/examples/separator-demo";
import { SwitchDemo } from "@/components/examples/switch-demo";
import { ToggleDemo } from "@/components/examples/toggle-example";
import { ToggleGroupDemo } from "@/components/examples/toggle-group-demo";
import { ModeToggle } from "@/components/mode-toggle";
import baseUiLogo from "@/components/svg/base-ui.svg";
import githubLogo from "@/components/svg/github.svg";
import shadcnLogo from "@/components/svg/shadcn.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <main className='container mx-auto p-4'>
        <div className='container-wrapper'>
          <div className='container flex flex-col items-center gap-2 text-center py-8 xl:gap-4'>
            <h1 className='text-primary leading-tighter max-w-2xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter'>
              shadcn/ui & base-ui
            </h1>
            <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
              A set of beautifully-designed, accessible components built with
              shadcn/ui and Base UI instead of Radix.
            </p>
            <div className='flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none'>
              <Button
                size='sm'
                render={
                  <Link
                    href='https://github.com/merthanmerter/shadcn-baseui'
                    target='_blank'
                  />
                }>
                <Image
                  src={githubLogo}
                  alt='Github'
                  className='size-4 invert dark:invert-0 mr-1.5'
                />
                Github
              </Button>
              <Button
                size='sm'
                variant='ghost'
                render={
                  <Link
                    href='https://ui.shadcn.com/'
                    target='_blank'
                  />
                }>
                <Image
                  src={shadcnLogo}
                  alt='ShadCN'
                  className='size-4 dark:invert mr-1.5'
                />
                ShadCN
              </Button>
              <Button
                size='sm'
                variant='ghost'
                render={
                  <Link
                    href='https://base-ui.com/'
                    target='_blank'
                  />
                }>
                <Image
                  src={baseUiLogo}
                  alt='Base UI'
                  className='size-4 dark:invert mr-1.5'
                />
                Base UI
              </Button>
            </div>
          </div>
        </div>
        <div className='flex justify-end mb-4'>
          <ModeToggle />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='grid-item'>
            <h3>Accordion</h3>
            <AccordionDemo openMultiple={false} />
          </div>

          <div className='grid-item'>
            <h3>Alert Dialog</h3>
            <AlertDialogDemo />
          </div>

          <div className='grid-item'>
            <h3>Aspect Ratio</h3>
            <AspectRatioDemo />
          </div>

          <div className='grid-item'>
            <h3>Avatar</h3>
            <AvatarDemo />
          </div>

          <div className='grid-item'>
            <h3>Badge</h3>
            <BadgeDemo />
          </div>

          <div className='grid-item'>
            <h3>Breadcrumb</h3>
            <BreadcrumbDemo />
          </div>

          <div className='grid-item'>
            <h3>Checkbox</h3>
            <CheckboxDemo />
          </div>

          <div className='grid-item'>
            <h3>Collapsible</h3>
            <CollapsibleDemo />
          </div>

          <div className='grid-item'>
            <h3>Context Menu</h3>
            <ContextMenuDemo />
          </div>

          <div className='grid-item'>
            <h3>Dialog</h3>
            <DialogDemo />
          </div>

          <div className='grid-item'>
            <h3>Dropdown Menu</h3>
            <DropdownMenuDemo />
          </div>

          <div className='grid-item'>
            <h3>Label</h3>
            <LabelDemo />
          </div>

          <div className='grid-item'>
            <h3>Progress</h3>
            <ProgressDemo />
          </div>

          <div className='grid-item'>
            <h3>Radio Group</h3>
            <RadioGroupDemo />
          </div>

          <div className='grid-item'>
            <h3>Toggle</h3>
            <ToggleDemo />
          </div>

          <div className='grid-item'>
            <h3>Toggle Group</h3>
            <ToggleGroupDemo />
          </div>

          <div className='grid-item'>
            <h3>Separator</h3>
            <SeparatorDemo />
          </div>

          <div className='grid-item'>
            <h3>Switch</h3>
            <SwitchDemo />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
