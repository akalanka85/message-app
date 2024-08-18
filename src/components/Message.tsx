export type MessageProps = {
  text: string;
  timestamp: Date;
};

const Message = ({ text, timestamp }: MessageProps) => {
  return (
    <div className="message">
      <p className="mb-2">{text}</p>
      <span className="timestamp">{new Date(timestamp).toLocaleString()}</span>
    </div>
  );
};

export default Message;
