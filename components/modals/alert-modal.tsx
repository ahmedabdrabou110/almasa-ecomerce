import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  loading,
  onClose,
  onConfirm,
  isOpen,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure ?"
      description="This action can't be undone"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
