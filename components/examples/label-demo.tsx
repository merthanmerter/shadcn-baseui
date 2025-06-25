import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms-3' />
        <Label htmlFor='terms-3'>Accept terms and conditions</Label>
      </div>
    </div>
  );
}
