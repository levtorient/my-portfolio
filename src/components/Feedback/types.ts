export interface FeedbackItem {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
  position: {
    left: number;
    top: number;
  };
}

export interface DummyAvatar {
  avatar: string;
  position: {
    left: number;
    top: number;
  };
}
