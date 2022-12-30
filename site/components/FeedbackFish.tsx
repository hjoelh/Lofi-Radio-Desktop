import { FeedbackFish as Fish } from "@feedback-fish/react";

const FeedbackFish = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 25,
        right: 60,
        fontWeight: "bold",
      }}
    >
      <Fish projectId="d7cc89301b7f1a">
        <button
          style={{
            fontWeight: "bold",
            background: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "0.75rem",
          }}
        >
          Send feedback
        </button>
      </Fish>
    </div>
  );
};

export { FeedbackFish };
