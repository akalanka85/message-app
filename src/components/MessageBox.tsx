import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { IRecipient } from "../App";
import Message from "./Message";

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
      <Card.Body>
        <Card.Title className="mb-4">Messeges</Card.Title>
        <div className="messages">
          {recipient?.messages.map((message, index) => (
            <Message
              key={index}
              text={message.text}
              timestamp={message.timestamp}
            />
          ))}
        </div>
        <textarea
          name="postContent"
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
      </Card.Body>
    </Card>
  );
};

export default MessageBox;
