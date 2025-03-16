import { ChangeEvent } from "react";

export interface LabelledInputInterface {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
