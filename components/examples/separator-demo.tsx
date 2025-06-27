import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div>
      <div className='space-y-1'>
        <h4 className='text-sm leading-none font-medium'>Base UI</h4>
        <p className='text-muted-foreground text-sm'>
          Unstyled UI components for building accessible web apps and design
          systems.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  );
}
