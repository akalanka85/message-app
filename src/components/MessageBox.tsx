import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Message from "./Message";
import { IRecipient } from "../models/IRecipient";

export type RecipientsProps = {
  recipient?: IRecipient;
  onSend: (id: number, message: string) => void;
};

const MessageBox = ({ recipient, onSend }: RecipientsProps) => {
  const [message, setMessage] = useState("");

  const send = () => {
    if (message.trim() && !!recipient) {
      onSend(recipient.id, message);
      setMessage("");
    }
  };

  return (
    <Card>
      <Card.Body className="messages-card">
        <Card.Title className="mb-4">Messeges</Card.Title>
        <div className="message-area">
          <div className="overflow-auto">
            {recipient?.messages.map((message, index) => (
              <Message
                key={index}
                text={message.text}
                timestamp={message.timestamp}
              />
            ))}
          </div>
          <div>
            <textarea
              name="message"
              className="w-100 text-input"
              rows={4}
              cols={40}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
              placeholder="Type a message..."
            />
            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={send}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MessageBox;
