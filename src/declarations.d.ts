// src/declarations.d.ts
declare module "@material-tailwind/react" {
  import * as React from "react";

  export interface ButtonProps {
    variant?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    className?: string;
  }

  export const Button: React.FC<ButtonProps>;

  export interface MenuProps {
    open?: boolean;
    placement: string;
    handler?: any;
    children?: React.ReactNode;
  }

  export const Menu: React.FC<MenuProps>;

  export interface MenuListProps {
    open?: boolean;
    handler?: any;
    children?: React.ReactNode;
    className: string;
  }

  export const MenuList: React.FC<MenuListProps>;

  export interface MenuItemProps {
    open?: boolean;
    handler?: any;
    children?: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className: string;
  }

  export const MenuItem: React.FC<MenuItemProps>;

  export interface MenuHandlerProps {
    open?: boolean;
    handler?: any;
    children?: React.ReactNode;
  }

  export const MenuHandler: React.FC<MenuHandlerProps>;

  export interface AvatarProps {
    src?: string;
    alt: string;
    size: string;
  }

  export const Avatar: React.FC<AvatarProps>;

  export interface Input {
    label?: string | null;
    onChange?: (e: React.any) => void;
    value?: string;
    size?: string
  }

  export const Input: React.FC<Input>;

  export interface Popover {
    placement?: string;
    children?: React.ReactNode;
  }

  export const Popover: React.FC<Popover>;

  export interface PopoverContent {
    className?: string;
    children?: React.ReactNode;
  }

  export const PopoverContent: React.FC<PopoverContent>;

  export interface PopoverHandler {
    className?: string;
    children?: React.ReactNode;
  }

  export const PopoverHandler: React.FC<PopoverHandler>;

  export interface DialogProps {
    size?: string;
    open: boolean;
    handler: () => void;
    className?: string;
    children?: React.ReactNode;
  }

  export const Dialog: React.FC<DialogProps>;

  export interface CardProps {
    className?: string;
    children?: React.ReactNode;
  }

  export const Card: React.FC<CardProps>;

  export interface CardBodyProps {
    className?: string;
    children?: React.ReactNode;
  }

  export const CardBody: React.FC<CardBodyProps>;

  export interface CardFooterProps {
    className?: string;
    children?: React.ReactNode;
  }

  export const CardFooter: React.FC<CardFooterProps>;

  export interface TypographyProps {
    variant?: string;
    color?: string;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    href?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

  export const Typography: React.FC<TypographyProps>;

  export interface Textarea {
    label?: string;
    size?: string;
    className?: string;
    value?: string;
    onChange: (e: any) => void
  }

  export const Textarea: React.FC<Textarea>;

  export interface CheckboxProps {
    label?: string;
    className?: string;
  }

  export const Checkbox: React.FC<CheckboxProps>;
}
