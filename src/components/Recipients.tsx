import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { IRecipient } from "../App";

export type RecipientsProps = {
    selectedRecipientsId: number,
    onRecipientsSelect: (id: number) => void,
    recipients: IRecipient[],
}

const Recipients = ({ recipients, onRecipientsSelect, selectedRecipientsId }: RecipientsProps ) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Recipients</Card.Title>
        <ListGroup variant="flush">
        {recipients.map(recipient => (
          <ListGroup.Item onClick={() => onRecipientsSelect(recipient.id)}>{recipient.name}</ListGroup.Item>
        ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Recipients;
