import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

type ModalProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void | Promise<void>;
  submitText?: string;
  cancelText?: string;
  showFooter?: boolean;
  submitVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: string;
  className?: string;
};

const Modal = ({
  children,
  title,
  description,
  isOpen,
  onClose,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
  showFooter = true,
  submitVariant = "default",
  size,
  className = "",
}: ModalProps) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className={`${size} ${className}`}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          <div className="py-4">{children}</div>

          {showFooter && (
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                {cancelText}
              </Button>
              {onSubmit && (
                <Button
                  variant={submitVariant}
                  className={submitVariant === "default" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
                  onClick={handleSubmit}
                >
                  {submitText}
                </Button>
              )}
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
