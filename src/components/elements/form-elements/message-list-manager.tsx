import React, { useState } from 'react';
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
import Field from './field';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ToolTipElement from '../tooltip-element';

interface MessageListManagerProps {
  initialMessages?: string[];
  placeholder?: string;
  onChange: (messages: string[]) => void;
}

const MessageListManager: React.FC<MessageListManagerProps> = ({
  initialMessages = [],
  placeholder = "",
  onChange,
}) => {
  const [messages, setMessages] = useState<string[]>(initialMessages);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = messages.findIndex((msg) => msg === active.id);
      const newIndex = messages.findIndex((msg) => msg === over.id);

      const newMessages = arrayMove(messages, oldIndex, newIndex);
      setMessages(newMessages);
      onChange(newMessages);
    }
  };

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, newMessage.trim()];
      setMessages(updatedMessages);
      setNewMessage('');
      onChange(updatedMessages);
    }
  };

  const handleDeleteMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    onChange(updatedMessages);
  };

  console.log("d", isDialogOpen)
  return (
    <div className='relative'>
      <Dialog>
        <DialogTrigger asChild>
          <button
            type='button'
            className='text-primary absolute top-[34%] -translate-y-[34%] -left-16 cursor-pointer'
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className='size-14' />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
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
                <Field
                  as='textarea'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Enter new message"
                  className="flex-grow bg-transparent backdrop-blur-none "
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAddMessage();
                    }
                  }}
                />
              </div>

              <div className=' max-h-[400px] overflow-y-auto'>
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                  modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
                >
                  <SortableContext items={messages} strategy={verticalListSortingStrategy}>
                    <div className="space-y-3">
                      {messages.map((message, index) => (
                        <SortableMessage
                          key={message}
                          id={message}
                          message={message}
                          index={index}
                          onDelete={() => handleDeleteMessage(index)}
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

      <Field
        as="textarea"
        value={messages[0] || ''}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const updatedMessages = [...messages];
          if (updatedMessages.length > 0) {
            updatedMessages[0] = e.target.value;
          } else {
            updatedMessages.push(e.target.value);
          }
          setMessages(updatedMessages);
          onChange(updatedMessages);
        }}
      />
    </div>
  );
};

// Sortable Message Component
interface SortableMessageProps {
  id: string;
  message: string;
  index?: number;
  onDelete: () => void;
}

const SortableMessage: React.FC<SortableMessageProps> = ({ id, message, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between gap-3 border border-primary rounded-2xl px-4 py-2 cursor-pointer"
    >
      <ToolTipElement discription={message}>
        <div className="text-white line-clamp-3 ">{message}</div>

      </ToolTipElement>
      <div className='flex items-center h-4 gap-x-1  '>
        <Button
          onClick={onDelete}
          variant={"ghost"}
          size={"icon"}
          aria-label="Delete message"
        >
          <Trash2 className="w-5 h-5 text-white" />
        </Button>
        <Separator orientation="vertical" className='bg-white ' />
        <Button
          {...attributes}
          {...listeners}
          variant={"ghost"}
          size={"icon"}
        >
          <GripVertical className=' text-white' />
        </Button>
      </div>
    </div>
  );
};

export default MessageListManager;