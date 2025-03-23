import { useState } from "react";
import { FieldValues, ControllerRenderProps } from "react-hook-form";
import { FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LucideIcon } from "lucide-react";

interface InputWithIconProps<T extends FieldValues> {
  label: string;
  type: string;
  placeholder: string;
  icon?: LucideIcon;
  field: ControllerRenderProps<T, any>;
  showPasswordToggle?: boolean;
  className?: string;
}

const InputWithIcon = <T extends FieldValues>({
  label,
  type,
  placeholder,
  icon: Icon,
  field,
  showPasswordToggle = false,
  className,
}: InputWithIconProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="relative">
      <Label>{label}</Label>
      <FormControl>
        <div className="relative flex items-center mt-2">
          {Icon && <Icon className="absolute left-3 text-gray-500" size={20} />}
          <Input
            type={inputType}
            placeholder={placeholder}
            className={className}
            {...field}
          />
          {showPasswordToggle && (
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      </FormControl>
    </div>
  );
};

export default InputWithIcon;
