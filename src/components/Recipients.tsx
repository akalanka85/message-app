import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { IRecipient } from "../models/IRecipient";

export type RecipientsProps = {
  selectedRecipientsId: number;
  onRecipientsSelect: (id: number) => void;
  recipients: IRecipient[];
};

const Recipients = ({
  recipients,
  onRecipientsSelect,
  selectedRecipientsId,
}: RecipientsProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-4">Recipients</Card.Title>
        <ListGroup variant="flush">
          {recipients.map((recipient) => (
            <ListGroup.Item
              key={recipient.id}
              onClick={() => onRecipientsSelect(recipient.id)}
              className={
                "recipient " +
                (recipient.id === selectedRecipientsId ? "selected" : "")
              }
            >
              {recipient.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Recipients;
