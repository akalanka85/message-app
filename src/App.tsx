import { useState } from "react";
import "./App.css";
import MessageBox from "./components/MessageBox";
import Recipients from "./components/Recipients";

export interface IMessage {
  text: string;
  timestamp: Date;
}

export interface IRecipient {
  id: number;
  name: string;
  messages: IMessage[];
}

function App() {
  const [recipients, setRecipients] = useState<IRecipient[]>([
    { id: 1, name: "Tony", messages: [] },
    { id: 2, name: "Steve", messages: [] },
    { id: 3, name: "Bruce", messages: [] },
  ]);
  const [selectedRecipientsId, setSelectedRecipientsId] = useState(
    recipients[0].id
  );

  const sendMessage = (recipientsId: number, messageText: string) => {
    setRecipients(
      recipients.map((recipient) =>
        recipient.id === recipientsId
          ? {
              ...recipient,
              messages: [
                ...recipient.messages,
                { text: messageText, timestamp: new Date() },
              ],
            }
          : recipient
      )
    );
  };

  const selectedRecipient = recipients.find(
    (recipient) => recipient.id === selectedRecipientsId
  );

  return (
    <div className="container">
      <header className="App-header">
        <h3 className="text-center mt-4">Messenger App</h3>
      </header>
      <body className="row">
        <div className="col-3">
          <Recipients
            recipients={recipients}
            onRecipientsSelect={setSelectedRecipientsId}
            selectedRecipientsId={selectedRecipientsId}
          ></Recipients>
        </div>
        <div className="col-9">
          <MessageBox recipient={selectedRecipient} onSend={sendMessage}></MessageBox>
        </div>
      </body>
    </div>
  );
}

export default App;
