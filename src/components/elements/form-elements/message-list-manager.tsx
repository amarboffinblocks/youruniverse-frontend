"use client";
import React, { useState } from "react";
import { Plus, Trash2, Move } from "lucide-react";
import Field from "./field";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface MessageListManagerProps {
  initialMessages?: string[];
  placeholder?: string;
  onChange?: (messages: string[]) => void; // ✅ New prop
}

const MessageListManager: React.FC<MessageListManagerProps> = ({
  initialMessages = [],
  placeholder = "",
  onChange,
  ...props
}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [open, setOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  // Notify parent when messages change
  const updateMessages = (updated: string[]) => {
    setMessages(updated);
    onChange?.(updated); // ✅ Trigger onChange callback
  };

  // Add message
  const handleAddMessage = () => {
    if (newMessage.trim()) {
      updateMessages([...messages, newMessage.trim()]);
      setNewMessage("");
    }
  };

  // Delete message
  const handleDelete = (index: number) => {
    updateMessages(messages.filter((_, i) => i !== index));
  };

  // Drag and drop reorder
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = messages.findIndex((_, i) => i.toString() === active.id);
      const newIndex = messages.findIndex((_, i) => i.toString() === over.id);
      updateMessages(arrayMove(messages, oldIndex, newIndex));
    }
  };

  return (
    <div className="relative">
      {/* Plus button on left - opens popup */}
      <button
        type="button"
        className="text-primary absolute top-2 -left-16 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Plus className="size-14" />
      </button>

      {/* Main Field shows first message only */}
      <Field
        as="textarea"
        defaultValue={initialMessages[0] || ""}
        placeholder={placeholder}
        {...props}
      />

      {/* Popup for managing multiple messages */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Manage Messages</DialogTitle>
          </DialogHeader>

          {/* Input to add new message */}
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Add message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button size="sm" onClick={handleAddMessage}>Add</Button>
          </div>

          {/* Sortable messages list */}
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={messages.map((_, i) => i.toString())} strategy={verticalListSortingStrategy}>
              {messages.map((msg, index) => (
                <SortableItem
                  key={index}
                  id={index.toString()}
                  text={msg}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </SortableContext>
          </DndContext>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessageListManager;

// Sortable item component
function SortableItem({ id, text, onDelete }: { id: string; text: string; onDelete: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between p-2 mb-2 bg-accent/20 rounded-lg"
    >
      <div {...listeners} className="flex items-center gap-2 cursor-grab">
        <Move className="w-4 h-4 text-gray-400" />
        <span>{text}</span>
      </div>
      <Button size="icon" variant="ghost" onClick={onDelete}>
        <Trash2 className="w-4 h-4 text-red-500" />
      </Button>
    </div>
  );
}
