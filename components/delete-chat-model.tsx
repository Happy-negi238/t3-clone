"use client";
import { useDeleteChat } from "@/modules/chat/hooks/use-chats";
import React from "react";
import { toast } from "./ui/toast";
import Modal from "@/components/ui/modal";

const DeleteChatModel = ({ isModalOpen, setIsModalOpen, chatId }) => {
  const { mutateAsync, isPending } = useDeleteChat(chatId);

  const handleDelete = async () => {
    try {
      await mutateAsync();
      toast.add({
        type: "success",
        title: "Chat delete successfully!",
      });
      setIsModalOpen(false);
    } catch (error) {
      toast.add({
        type: "error",
        title: "Failed to delete chat",
      });
      console.log("Failed to delete chat", error);
    }
  };
  return (
    <Modal
      title="Delete chat"
      description="Are you sure you want to delete this Chat? This action cannot be undone."
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleDelete}
      submitText={isPending ? "Deleting.." : "Delete"}
      submitVariant="destructive"
    >
      <p className="text-sm text-zinc-500">
        Once deleted, all requests and data in this Chat will be permanently
        removed.
      </p>
    </Modal>
  );
};

export default DeleteChatModel;
