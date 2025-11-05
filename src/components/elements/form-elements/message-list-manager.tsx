import React, { useState, useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import { Plus, GripVertical, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ToolTipElement from '../tooltip-element';
import { Textarea } from '@/components/ui/textarea';
import { Label } from "@/components/ui/label";
import { useField } from 'formik';
import { cn } from '@/lib/utils';

interface MessageListManagerProps {
  initialMessages?: string[];
  placeholder?: string;
  label?: string;
  tokens?: boolean;
  name?: string;
  onChange?: (messages: string[]) => void;
}

const MessageListManager: React.FC<MessageListManagerProps> = ({
  initialMessages = [],
  label = "",
  name = "",
  tokens = true,
  placeholder = "",
  onChange,
}) => {
  const [field, meta, helpers] = useField<string[]>(name);
  const { value } = field;
  const { setValue, setTouched } = helpers;

  const [messages, setMessages] = useState<string[]>(value || initialMessages || ['']);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');


  useEffect(() => {
    if (value && JSON.stringify(value) !== JSON.stringify(messages)) {
      setMessages(value);
    }
  }, [value]);

  useEffect(() => {
    if (JSON.stringify(messages) !== JSON.stringify(value)) {
      setValue(messages);
      onChange?.(messages);
    }
  }, [messages]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = messages.findIndex((_, index) => `message-${index}` === active.id);
      const newIndex = messages.findIndex((_, index) => `message-${index}` === over.id);

      console.log("Drag event:", { active: active.id, over: over.id, oldIndex, newIndex });

      if (oldIndex !== -1 && newIndex !== -1) {
        const newMessages = arrayMove(messages, oldIndex, newIndex);
        setMessages(newMessages);
        setTouched(true);
      }
    }
  };

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, newMessage.trim()];
      setMessages(updatedMessages);
      setNewMessage('');
      setTouched(true);
    }
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    // ✅ Ensure at least one empty message remains for required fields
    const finalMessages = updatedMessages.length === 0 ? [''] : updatedMessages;
    setMessages(finalMessages);
    setTouched(true);
  };

  const handleUpdateMessage = (index: number, updatedMessage: string) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = updatedMessage;
    setMessages(updatedMessages);
    setTouched(true);
  };

  const handleFirstMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedMessages = [...messages];
    if (updatedMessages.length > 0) {
      updatedMessages[0] = e.target.value;
    } else {
      updatedMessages.push(e.target.value);
    }
    setMessages(updatedMessages);
    setTouched(true);
  };

  const tokenCount = messages.reduce((acc, msg) => acc + (msg?.length || 0), 0);

  const sortableItems = messages.map((_, index) => `message-${index}`);

  return (
    <div className='relative space-y-2'>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {label && (
          <Label
            htmlFor={name}
            className={cn(meta.touched && meta.error && "text-destructive")}
          >
            {label}
          </Label>
        )}
        <DialogTrigger asChild>
          <button
            type='button'
            className='text-primary absolute top-[44%] -translate-y-[34%] -left-16 cursor-pointer'
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className='size-14' />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader className='p-4'>
            <DialogTitle>Manage Messages</DialogTitle>
            <DialogDescription>
              Add, edit, delete, or reorder your messages below.
              These messages can be used as alternative starting prompts.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="overflow-y-auto flex-grow space-y-2">
              <div className='flex-1'>
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Enter new message"
                  className="flex-grow bg-transparent backdrop-blur-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAddMessage();
                    }
                  }}
                />
                <p className="text-white text-end text-sm mt-1">
                  {newMessage.length} tokens
                </p>
              </div>

              <div className=''>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
                >
                  <SortableContext items={sortableItems} strategy={verticalListSortingStrategy}>
                    <div className="space-y-4 mt-4 max-h-[500px] h-full overflow-y-auto">
                      {messages.map((message, index) => (
                        <SortableMessage
                          key={`message-${index}`}
                          id={`message-${index}`} // ✅ Unique ID based on index
                          message={message}
                          index={index}
                          onDelete={() => handleDeleteMessage(index)}
                          onUpdate={(updatedMessage) => handleUpdateMessage(index, updatedMessage)}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              </div>

              {messages.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <p>No messages added yet.</p>
                  <p className="text-sm mt-2">Add your first message using the input above.</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Textarea
        value={messages[0] || ''}
        className={cn(
          meta.touched && meta.error && "bg-red-500/20 border-red-500 focus-visible:border-red-500"
        )}
        placeholder={placeholder}
        onChange={handleFirstMessageChange}
      />
      <div className="flex justify-between items-center text-xs px-1 text-white">
        <span
          id={`${name}-error`}
          className={cn(
            "text-destructive",
            meta.touched && meta.error ? "visible" : "invisible"
          )}
        >
          {meta.error || "placeholder"}
        </span>

        {tokens === true && (
          <span
            className={cn(
              meta.touched && meta.error && "text-destructive",
            )}
          >
            {tokenCount} Tokens
          </span>
        )}
      </div>
    </div>
  );
};

interface SortableMessageProps {
  id: string;
  message: string;
  index: number;
  onDelete: () => void;
  onUpdate: (updatedMessage: string) => void;
}

const SortableMessage: React.FC<SortableMessageProps> = ({
  id,
  message,
  index,
  onDelete,
  onUpdate
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleSave = () => {
    onUpdate(editedMessage);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedMessage(message);
    setIsEditing(false);
  };

  useEffect(() => {
    setEditedMessage(message);
  }, [message]);

  return (
    <div
      ref={setNodeRef}
      style={style}
    >
      <div
        className="flex items-center justify-between gap-3 border border-primary rounded-2xl px-4 py-2 cursor-pointer"
      >
        {isEditing ? (
          <div className="flex-1">
            <Textarea
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              className="min-h-[60px]"
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <Button size="sm" onClick={handleSave}>Save</Button>
              <Button size="sm" variant="outline" onClick={handleCancel}>Cancel</Button>
            </div>
          </div>
        ) : (
          <>
            <ToolTipElement discription={message}>
              <div
                className="text-white line-clamp-3 flex-1 cursor-text"
                onClick={() => setIsEditing(true)}
              >
                <span className='font-bold'>{index + 1}.</span> {message}
              </div>
            </ToolTipElement>
            <div className='flex items-center h-4 gap-x-1'>
              <Button
                onClick={onDelete}
                variant={"ghost"}
                size={"icon"}
                aria-label="Delete message"
              >
                <Trash2 className="w-5 h-5 text-white" />
              </Button>
              <Separator orientation="vertical" className='bg-white' />
              <Button
                {...attributes}
                {...listeners}
                variant={"ghost"}
                size={"icon"}
                className="cursor-grab active:cursor-grabbing"
              >
                <GripVertical className='text-white' />
              </Button>
            </div>
          </>
        )}
      </div>
      {!isEditing && (
        <p className="text-white text-end text-sm mt-1 mr-1">
          {message.length} tokens
        </p>
      )}
    </div>
  );
};

export default MessageListManager;